"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Upload } from "lucide-react";

const salesData = [
  { id: 1, date: "2024-06-15", cuit: "30-71122334-4", amount: 12500.0, iva: 2625.0 },
  { id: 2, date: "2024-06-14", cuit: "20-12345678-9", amount: 8200.0, iva: 1722.0 },
  { id: 3, date: "2024-06-14", cuit: "27-98765432-1", amount: 25000.0, iva: 5250.0 },
  { id: 4, date: "2024-06-13", cuit: "30-71122334-4", amount: 5500.0, iva: 1155.0 },
  { id: 5, date: "2024-06-12", cuit: "20-12345678-9", amount: 1500.0, iva: 315.0 },
];

export default function SalesPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between w-full">
        <h1 className="text-3xl font-bold font-headline">Ventas</h1>
        <div className="flex gap-2">
          <Button variant="outline">
            Extraer
          </Button>
          <Button>
            <Upload className="mr-2 h-4 w-4" /> Importar Ventas
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Registros de Ventas</CardTitle>
          <CardDescription>
            Navegá y gestioná tus registros de ventas para el período actual.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Fecha</TableHead>
                <TableHead>CUIT</TableHead>
                <TableHead className="text-right">Monto Neto</TableHead>
                <TableHead className="text-right">IVA</TableHead>
                <TableHead className="text-right">Total</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {salesData.map((sale) => (
                <TableRow key={sale.id}>
                  <TableCell>{sale.date}</TableCell>
                  <TableCell>{sale.cuit}</TableCell>
                  <TableCell className="text-right">${sale.amount.toFixed(2)}</TableCell>
                  <TableCell className="text-right">${sale.iva.toFixed(2)}</TableCell>
                  <TableCell className="text-right font-medium">
                    ${(sale.amount + sale.iva).toFixed(2)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
