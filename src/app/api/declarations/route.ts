// src/app/api/declarations/route.ts
import { NextResponse } from 'next/server';
import { DeclarationData } from '@/types/declarations';
import { validateDeclarationData } from '@/lib/declarationValidation';

// Mock data for demonstration purposes
const mockDeclarationData: DeclarationData = {
  periodo: "JUNIO 2024",
  ventas: {
    neto: 142300.00,
    iva: 29883.00,
    total: 172183.00,
  },
  compras: {
    neto: 58800.00,
    iva: 12348.00,
    total: 71148.00,
    exento: 0.00,
  },
  posicionIva: {
    ivaDebitoFiscal: 29883.00,
    ivaCreditoFiscal: -12348.00,
    saldoTecnicoAnterior: 0.00,
    totalSaldoDdjjPerActual: 17535.00,
    compensaciones: 0.00,
    retencionesSufridasDelPeriodo: 0.00,
    percepcionesSufridasDelPeriodo: 0.00,
    saldoLibreDispPeriodoAnterior: 0.00,
    totalSaldoLibreDisponibleDdjjPerActual: 0.00,
    saldoTotalAFavor: 0.00,
  },
  actividades: [
    {
      periodo: "JUNIO 2024",
      actividad: "471192 - Ventas al por menor de tabaco, cigarrillos y cigarrillos en Kioscos",
      ventasNetas: 14209.60,
      jurisdiccion: "CABA",
      ventasTotales: 0,
      impuesto: 85.58,
      retencion: 0,
      sircreb: 0,
      percepcion: 0,
      saldoAFavorAnterior: 0,
      subtotal: 0,
      intereses: 0,
      aPagar: 0,
    },
    {
      periodo: "JUNIO 2024",
      actividad: "471191 - Ventas al por menor de tabaco, cigarrillos y cigarrillos en Kioscos",
      ventasNetas: 166370.69,
      jurisdiccion: "CABA",
      ventasTotales: 180500.29,
      impuesto: 4991.12,
      retencion: 5843.70,
      sircreb: 19737.80,
      percepcion: 0,
      saldoAFavorAnterior: 0,
      subtotal: -13894.10,
      intereses: 0,
      aPagar: -13894.10,
    },
  ],
};

export async function GET() {
  const errors = validateDeclarationData(mockDeclarationData);

  if (errors.length > 0) {
    return new NextResponse(JSON.stringify({ errors }), {
      status: 400,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  return NextResponse.json(mockDeclarationData);
}