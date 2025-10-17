"use client";
import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Download, CheckCircle, Send } from "lucide-react";
import { DeclarationData } from '@/types/declarations';

export default function DeclarationsPage() {
  const [declarationData, setDeclarationData] = useState<DeclarationData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDeclarationData = async () => {
      try {
        const response = await fetch('/api/declarations');
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.errors ? errorData.errors.join(', ') : 'Error al obtener los datos de la declaración');
        }
        const data: DeclarationData = await response.json();
        setDeclarationData(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDeclarationData();
  }, []);

  const generateTxtFile = () => {
    if (!declarationData) return;

    const { ventas, compras, posicionIva } = declarationData;

    const content = `Resumen de Declaración de ${declarationData.periodo}


Totales de Ventas:
  Monto Neto: $${ventas.neto.toFixed(2)}
  IVA (21%): $${ventas.iva.toFixed(2)}
  Ventas Totales: $${ventas.total.toFixed(2)}

Totales de Compras:
  Monto Neto: $${compras.neto.toFixed(2)}
  IVA (21%): $${compras.iva.toFixed(2)}
  Compras Totales: $${compras.total.toFixed(2)}

Posición Final:
  IVA Ventas (Crédito Fiscal): $${posicionIva.ivaDebitoFiscal.toFixed(2)}
  IVA Compras (Débito Fiscal): $${posicionIva.ivaCreditoFiscal.toFixed(2)}
  IVA a Pagar: $${posicionIva.totalSaldoDdjjPerActual.toFixed(2)}
`;

    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "declaracion_junio_2024.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  if (loading) {
    return <div className="flex flex-col gap-8 w-full">Cargando declaraciones...</div>;
  }

  if (error) {
    return <div className="flex flex-col gap-8 w-full text-red-500">Error: {error}</div>;
  }

  if (!declarationData) {
    return <div className="flex flex-col gap-8 w-full">No hay datos de declaración disponibles.</div>;
  }

  const { ventas, compras, posicionIva } = declarationData;

  return (
    <div className="flex flex-col gap-8 w-full">
      <div className="flex items-center justify-between w-full">
        <h1 className="text-3xl font-bold font-headline">Declaraciones</h1>
        <div className="flex gap-2">
            <Button variant="outline">
                <CheckCircle className="mr-2 h-4 w-4" /> Validar
            </Button>
            <Button onClick={generateTxtFile} disabled={!declarationData}>
                <Download className="mr-2 h-4 w-4" /> Generar TXT
            </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Resumen de Declaración de Junio 2024</CardTitle>
          <CardDescription>
            Totales calculados basados en las ventas y compras importadas.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-6 border rounded-lg">
            <h3 className="text-lg font-semibold">Totales de Ventas</h3>
            <div className="mt-4 space-y-2 text-sm">
                <p className="flex justify-between">Monto Neto: <span>${ventas.neto.toFixed(2)}</span></p>
                <p className="flex justify-between">IVA (21%): <span>${ventas.iva.toFixed(2)}</span></p>
                <p className="flex justify-between font-bold">Ventas Totales: <span className="font-bold">${ventas.total.toFixed(2)}</span></p>
            </div>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="text-lg font-semibold">Totales de Compras</h3>
            <div className="mt-4 space-y-2 text-sm">
                <p className="flex justify-between">Monto Neto: <span>${compras.neto.toFixed(2)}</span></p>
                <p className="flex justify-between">IVA (21%): <span>${compras.iva.toFixed(2)}</span></p>
                <p className="flex justify-between font-bold">Compras Totales: <span className="font-bold">${compras.total.toFixed(2)}</span></p>
            </div>
          </div>
          <div className="p-6 rounded-lg bg-secondary text-secondary-foreground">
            <h3 className="text-lg font-semibold">Posición Final</h3>
            <div className="mt-4 space-y-2 text-sm">
                <p className="flex justify-between">IVA Ventas (Crédito Fiscal): <span>${posicionIva.ivaDebitoFiscal.toFixed(2)}</span></p>
                <p className="flex justify-between">IVA Compras (Débito Fiscal): <span>${posicionIva.ivaCreditoFiscal.toFixed(2)}</span></p>
                <p className="flex justify-between text-lg font-bold mt-4 pt-2 border-t">IVA a Pagar: <span className="font-bold text-accent-foreground">${posicionIva.totalSaldoDdjjPerActual.toFixed(2)}</span></p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
