// src/lib/declarationValidation.ts
import { DeclarationData, IvaSummary, IvaPurchaseSummary, IvaPosition, ActivityDetail } from '@/types/declarations';

function isValidNumber(value: any): boolean {
  return typeof value === 'number' && !isNaN(value);
}

function validateIvaSummary(summary: IvaSummary, fieldName: string): string[] {
  const errors: string[] = [];
  if (!isValidNumber(summary.neto) || summary.neto < 0) {
    errors.push(`El campo ${fieldName}.neto debe ser un número positivo.`);
  }
  if (!isValidNumber(summary.iva) || summary.iva < 0) {
    errors.push(`El campo ${fieldName}.iva debe ser un número positivo.`);
  }
  if (!isValidNumber(summary.total) || summary.total < 0) {
    errors.push(`El campo ${fieldName}.total debe ser un número positivo.`);
  }
  // Optional: Add a check if neto + iva * 0.21 is close to total, considering floating point inaccuracies
  return errors;
}

function validateIvaPurchaseSummary(summary: IvaPurchaseSummary, fieldName: string): string[] {
  const errors: string[] = validateIvaSummary(summary, fieldName);
  if (!isValidNumber(summary.exento) || summary.exento < 0) {
    errors.push(`El campo ${fieldName}.exento debe ser un número positivo.`);
  }
  return errors;
}

function validateIvaPosition(position: IvaPosition): string[] {
  const errors: string[] = [];
  const fields = [
    'ivaDebitoFiscal', 'ivaCreditoFiscal', 'saldoTecnicoAnterior',
    'totalSaldoDdjjPerActual', 'compensaciones', 'retencionesSufridasDelPeriodo',
    'percepcionesSufridasDelPeriodo', 'saldoLibreDispPeriodoAnterior', 'saldoTotalAFavor'
  ];

  fields.forEach(field => {
    if (!isValidNumber((position as any)[field])) {
      errors.push(`El campo IvaPosition.${field} debe ser un número.`);
    }
  });

  // Add specific business logic validations for IVA position if necessary
  // For example, checking if ivaDebitoFiscal - ivaCreditoFiscal + saldoTecnicoAnterior is consistent with totalSaldoDdjjPerActual
  return errors;
}

function validateActivityDetail(activity: ActivityDetail, index: number): string[] {
  const errors: string[] = [];
  if (typeof activity.periodo !== 'string' || activity.periodo.trim() === '') {
    errors.push(`La actividad ${index} debe tener un periodo válido.`);
  }
  if (typeof activity.actividad !== 'string' || activity.actividad.trim() === '') {
    errors.push(`La actividad ${index} debe tener una descripción de actividad válida.`);
  }
  const numberFields = [
    'ventasNetas', 'ventasTotales', 'impuesto', 'retencion', 'sircreb',
    'percepcion', 'saldoAFavorAnterior', 'subtotal', 'intereses', 'aPagar'
  ];
  numberFields.forEach(field => {
    if (!isValidNumber((activity as any)[field])) {
      errors.push(`El campo ActivityDetail.${field} en la actividad ${index} debe ser un número.`);
    }
  });
  return errors;
}

export function validateDeclarationData(data: DeclarationData): string[] {
  let errors: string[] = [];

  if (typeof data.periodo !== 'string' || data.periodo.trim() === '') {
    errors.push('El campo periodo de la declaración debe ser una cadena de texto no vacía.');
  }

  errors = errors.concat(validateIvaSummary(data.ventas, 'ventas'));
  errors = errors.concat(validateIvaPurchaseSummary(data.compras, 'compras'));
  errors = errors.concat(validateIvaPosition(data.posicionIva));

  if (!Array.isArray(data.actividades)) {
    errors.push('El campo actividades debe ser un arreglo.');
  } else {
    data.actividades.forEach((activity, index) => {
      errors = errors.concat(validateActivityDetail(activity, index));
    });
  }

  return errors;
}