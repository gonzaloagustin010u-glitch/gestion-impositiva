"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Download, CheckCircle, Send } from "lucide-react";

export default function DeclarationsPage() {
  const generateTxtFile = () => {
    const salesData = {
      neto: 142300.00,
      iva: 29883.00,
      total: 172183.00,
    };
    const purchasesData = {
      neto: 58800.00,
      iva: 12348.00,
      total: 71148.00,
    };
    const finalPositionData = {
      ivaVentas: 29883.00,
      ivaCompras: -12348.00,
      ivaPagar: 17535.00,
    };

    const content = `Resumen de Declaración de Junio 2024

Totales de Ventas:
  Monto Neto: $${salesData.neto.toFixed(2)}
  IVA (21%): $${salesData.iva.toFixed(2)}
  Ventas Totales: $${salesData.total.toFixed(2)}

Totales de Compras:
  Monto Neto: $${purchasesData.neto.toFixed(2)}
  IVA (21%): $${purchasesData.iva.toFixed(2)}
  Compras Totales: $${purchasesData.total.toFixed(2)}

Posición Final:
  IVA Ventas (Crédito Fiscal): $${finalPositionData.ivaVentas.toFixed(2)}
  IVA Compras (Débito Fiscal): $${finalPositionData.ivaCompras.toFixed(2)}
  IVA a Pagar: $${finalPositionData.ivaPagar.toFixed(2)}
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

  return (
    <div className="flex flex-col gap-8 w-full">
      <div className="flex items-center justify-between w-full">
        <h1 className="text-3xl font-bold font-headline">Declaraciones</h1>
        <div className="flex gap-2">
            <Button variant="outline">
                <CheckCircle className="mr-2 h-4 w-4" /> Validar
            </Button>
            <Button onClick={generateTxtFile}>
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
                <p className="flex justify-between">Monto Neto: <span>$142,300.00</span></p>
                <p className="flex justify-between">IVA (21%): <span>$29,883.00</span></p>
                <p className="flex justify-between font-bold">Ventas Totales: <span className="font-bold">$172,183.00</span></p>
            </div>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="text-lg font-semibold">Totales de Compras</h3>
            <div className="mt-4 space-y-2 text-sm">
                <p className="flex justify-between">Monto Neto: <span>$58,800.00</span></p>
                <p className="flex justify-between">IVA (21%): <span>$12,348.00</span></p>
                <p className="flex justify-between font-bold">Compras Totales: <span className="font-bold">$71,148.00</span></p>
            </div>
          </div>
          <div className="p-6 rounded-lg bg-secondary text-secondary-foreground">
            <h3 className="text-lg font-semibold">Posición Final</h3>
            <div className="mt-4 space-y-2 text-sm">
                <p className="flex justify-between">IVA Ventas (Crédito Fiscal): <span>$29,883.00</span></p>
                <p className="flex justify-between">IVA Compras (Débito Fiscal): <span>-$12,348.00</span></p>
                <p className="flex justify-between text-lg font-bold mt-4 pt-2 border-t">IVA a Pagar: <span className="font-bold text-accent-foreground">$17,535.00</span></p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
