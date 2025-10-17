// src/types/declarations.ts

export interface IvaSummary {
  neto: number;
  iva: number;
  total: number;
}

export interface IvaPurchaseSummary extends IvaSummary {
  exento: number;
}

export interface IvaPosition {
  ivaDebitoFiscal: number;
  ivaCreditoFiscal: number;
  saldoTecnicoAnterior: number;
  totalSaldoDdjjPerActual: number;
  compensaciones: number;
  retencionesSufridasDelPeriodo: number;
  percepcionesSufridasDelPeriodo: number;
  saldoLibreDispPeriodoAnterior: number;
  totalSaldoLibreDisponibleDdjjPerActual: number;
  saldoTotalAFavor: number;
}

export interface ActivityDetail {
  periodo: string;
  actividad: string;
  ventasNetas: number;
  jurisdiccion: string;
  ventasTotales: number;
  impuesto: number;
  retencion: number;
  sircreb: number;
  percepcion: number;
  saldoAFavorAnterior: number;
  subtotal: number;
  intereses: number;
  aPagar: number;
}

export interface DeclarationData {
  periodo: string; // e.g., "JUNIO 2024"
  ventas: IvaSummary;
  compras: IvaPurchaseSummary;
  posicionIva: IvaPosition;
  actividades: ActivityDetail[];
}