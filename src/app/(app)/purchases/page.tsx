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
import React, { useRef } from "react";
import { Upload, MoreHorizontal, ChevronLeft, ChevronRight } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const purchasesData = [
    { id: 1, fecha: "15/06/2024", tipo: "FC", pv: "0001", numero: "00123456", despacho: "", codOp: "COMPRA", nombreVendedor: "Proveedor A", codDoc: "80", cuit: "30-12345678-9", moneda: "ARS", cambio: "1.00", cantIva: 1, codIva1: "005", codIva2: "", netoGravado1: 4500.0, iva1: 945.0, netoGravado2: 0, iva2: 0, noGravado: 0, exentas: 0, perRetIva: 0, percOtrosNac: 0, percIibb: 0, percMuni: 0, percInt: 0, otrosTributos: 0, total: 5445.0 },
    { id: 2, fecha: "14/06/2024", tipo: "FC", pv: "0002", numero: "00234567", despacho: "", codOp: "COMPRA", nombreVendedor: "Proveedor B", codDoc: "80", cuit: "30-87654321-5", moneda: "ARS", cambio: "1.00", cantIva: 1, codIva1: "005", codIva2: "", netoGravado1: 1200.0, iva1: 252.0, netoGravado2: 0, iva2: 0, noGravado: 0, exentas: 0, perRetIva: 0, percOtrosNac: 0, percIibb: 0, percMuni: 0, percInt: 0, otrosTributos: 0, total: 1452.0 },
    { id: 3, fecha: "14/06/2024", tipo: "NC", pv: "0001", numero: "00001234", despacho: "", codOp: "COMPRA", nombreVendedor: "Proveedor A", codDoc: "80", cuit: "30-12345678-9", moneda: "ARS", cambio: "1.00", cantIva: 1, codIva1: "005", codIva2: "", netoGravado1: -8000.0, iva1: -1680.0, netoGravado2: 0, iva2: 0, noGravado: 0, exentas: 0, perRetIva: 0, percOtrosNac: 0, percIibb: 0, percMuni: 0, percInt: 0, otrosTributos: 0, total: -9680.0 },
    { id: 4, fecha: "12/06/2024", tipo: "FC", pv: "0005", numero: "00567890", despacho: "", codOp: "COMPRA", nombreVendedor: "Proveedor C", codDoc: "80", cuit: "30-11223344-4", moneda: "ARS", cambio: "1.00", cantIva: 1, codIva1: "005", codIva2: "", netoGravado1: 2300.0, iva1: 483.0, netoGravado2: 0, iva2: 0, noGravado: 0, exentas: 0, perRetIva: 0, percOtrosNac: 0, percIibb: 0, percMuni: 0, percInt: 0, otrosTributos: 0, total: 2783.0 },
    { id: 5, fecha: "11/06/2024", tipo: "FC", pv: "0002", numero: "00234599", despacho: "", codOp: "COMPRA", nombreVendedor: "Proveedor B", codDoc: "80", cuit: "30-87654321-5", moneda: "ARS", cambio: "1.00", cantIva: 1, codIva1: "005", codIva2: "", netoGravado1: 500.0, iva1: 105.0, netoGravado2: 0, iva2: 0, noGravado: 0, exentas: 0, perRetIva: 0, percOtrosNac: 0, percIibb: 0, percMuni: 0, percInt: 0, otrosTributos: 0, total: 605.0 },
];

export default function PurchasesPage() {
  const tableContainerRef = useRef<HTMLDivElement>(null);

  const scrollTable = (direction: "left" | "right") => {
    if (tableContainerRef.current) {
      const scrollAmount = 200; // Ajusta la cantidad de desplazamiento
      if (direction === "left") {
        tableContainerRef.current.scrollLeft -= scrollAmount;
      } else {
        tableContainerRef.current.scrollLeft += scrollAmount;
      }
    }
  };

  return (
    <div className="flex flex-col gap-8 w-full">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold font-headline">Compras</h1>
        <div className="flex gap-2">
          <Button variant="outline">
            Extraer
          </Button>
          <Button>
            <Upload className="mr-2 h-4 w-4" /> Importar Compras
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Registros de Compras</CardTitle>
          <CardDescription className="text-sm">
            Navegá y gestioná tus registros de compras para el período actual.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <div className="absolute left-0 top-1/2 -translate-y-1/2">
              <Button variant="outline" size="icon" onClick={() => scrollTable("left")}>
                <ChevronLeft className="h-4 w-4" />
              </Button>
            </div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2">
              <Button variant="outline" size="icon" onClick={() => scrollTable("right")}>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
            <div className="w-full overflow-auto" ref={tableContainerRef}>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-center bg-primary/10 whitespace-nowrap border-r">FECHA</TableHead>
                    <TableHead colSpan={3} className="text-center bg-primary/20 whitespace-nowrap border-r">COMPROBANTES</TableHead>
                    <TableHead colSpan={7} className="text-center bg-primary/30 whitespace-nowrap border-r">PROVEEDOR / IMPORTES</TableHead>
                    <TableHead colSpan={1} className="text-center bg-primary/40 whitespace-nowrap border-r">PERCEPCIONES</TableHead>
                    <TableHead colSpan={1} className="text-center bg-primary/50 whitespace-nowrap">TOTALES</TableHead>
                  </TableRow>
                  <TableRow>
                    {/* FECHA */}
                    <TableHead className="text-xs p-1 whitespace-nowrap border-r">Fecha</TableHead>
                    {/* COMPROBANTES */}
                    <TableHead className="text-xs p-1 whitespace-nowrap border-r">Tipo</TableHead>
                    <TableHead className="text-xs p-1 whitespace-nowrap border-r">PV</TableHead>
                    <TableHead className="text-xs p-1 whitespace-nowrap border-r">Número</TableHead>
                    <TableHead className="text-xs p-1 hidden md:table-cell whitespace-nowrap border-r">Nº despacho</TableHead>
                    {/* PROVEEDOR */}
                    <TableHead className="text-xs p-1 whitespace-nowrap border-r">Cód. Op.</TableHead>
                    <TableHead className="text-xs p-1 whitespace-nowrap border-r">Apellido y Nombre</TableHead>
                    <TableHead className="text-xs p-1 hidden md:table-cell whitespace-nowrap border-r">Cód. Doc.</TableHead>
                    <TableHead className="text-xs p-1 whitespace-nowrap border-r">CUIT</TableHead>
                    <TableHead className="text-xs p-1 hidden md:table-cell whitespace-nowrap border-r">Moneda</TableHead>
                    <TableHead className="text-xs p-1 hidden md:table-cell whitespace-nowrap border-r">Tipo Cambio</TableHead>
                    <TableHead className="text-xs p-1 hidden md:table-cell whitespace-nowrap border-r">Cant. Alic. IVA</TableHead>
                    <TableHead className="text-xs p-1 hidden md:table-cell whitespace-nowrap border-r">Cód. IVA 1</TableHead>
                    <TableHead className="hidden md:table-cell text-xs p-1 whitespace-nowrap border-r">Cód. IVA 2</TableHead>
                    <TableHead className="text-right text-xs p-1 whitespace-nowrap border-r">Neto Grav. 1</TableHead>
                    <TableHead className="text-right text-xs p-1 whitespace-nowrap border-r">IVA 1</TableHead>
                    <TableHead className="text-right hidden md:table-cell text-xs p-1 whitespace-nowrap border-r">Neto Grav. 2</TableHead>
                    <TableHead className="text-right hidden md:table-cell text-xs p-1 whitespace-nowrap border-r">IVA 2</TableHead>
                    <TableHead className="text-right hidden md:table-cell text-xs p-1 whitespace-nowrap border-r">No Gravado</TableHead>
                    <TableHead className="text-right hidden md:table-cell text-xs p-1 whitespace-nowrap border-r">Op. Exentas</TableHead>
                    {/* PERCEPCIONES */}
                    <TableHead className="text-right text-xs p-1 whitespace-nowrap border-r">Perc/Ret. IVA</TableHead>
                    <TableHead className="text-right hidden md:table-cell text-xs p-1 whitespace-nowrap border-r">Perc. Otros</TableHead>
                    <TableHead className="text-right hidden md:table-cell text-xs p-1 whitespace-nowrap border-r">Perc. IIBB</TableHead>
                    <TableHead className="text-right hidden md:table-cell text-xs p-1 whitespace-nowrap border-r">Perc. Munic.</TableHead>
                    <TableHead className="text-right hidden md:table-cell text-xs p-1 whitespace-nowrap border-r">Perc. Int.</TableHead>
                    <TableHead className="text-right hidden md:table-cell text-xs p-1 whitespace-nowrap border-r">Otros Trib.</TableHead>
                    {/* TOTAL */}
                    <TableHead className="text-right text-xs p-1 whitespace-nowrap">Total</TableHead>
                    <TableHead className="text-xs p-1 whitespace-nowrap"><span className="sr-only">Acciones</span></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {purchasesData.map((p) => (
                    <TableRow key={p.id}>
                      <TableCell className="text-xs p-1 whitespace-nowrap border-r">{p.fecha}</TableCell>
                      <TableCell className="text-xs p-1 whitespace-nowrap border-r">{p.tipo}</TableCell>
                      <TableCell className="text-xs p-1 whitespace-nowrap border-r">{p.pv}</TableCell>
                      <TableCell className="text-xs p-1 whitespace-nowrap border-r">{p.numero}</TableCell>
                      <TableCell className="text-xs p-1 hidden md:table-cell whitespace-nowrap border-r">{p.despacho}</TableCell>
                      <TableCell className="text-xs p-1 whitespace-nowrap border-r">{p.codOp}</TableCell>
                      <TableCell className="text-xs p-1 whitespace-nowrap border-r">{p.nombreVendedor}</TableCell>
                      <TableCell className="text-xs p-1 hidden md:table-cell whitespace-nowrap border-r">{p.codDoc}</TableCell>
                      <TableCell className="text-xs p-1 whitespace-nowrap border-r">{p.cuit}</TableCell>
                      <TableCell className="text-xs p-1 hidden md:table-cell whitespace-nowrap border-r">{p.moneda}</TableCell>
                      <TableCell className="text-xs p-1 hidden md:table-cell whitespace-nowrap border-r">{p.cambio}</TableCell>
                      <TableCell className="text-center text-xs p-1 hidden md:table-cell whitespace-nowrap border-r">{p.cantIva}</TableCell>
                      <TableCell className="text-xs p-1 hidden md:table-cell whitespace-nowrap border-r">{p.codIva1}</TableCell>
                      <TableCell className="hidden md:table-cell text-xs p-1 whitespace-nowrap border-r">{p.codIva2}</TableCell>
                      <TableCell className="text-right text-xs p-1 whitespace-nowrap border-r">${p.netoGravado1.toFixed(2)}</TableCell>
                      <TableCell className="text-right text-xs p-1 whitespace-nowrap border-r">${p.iva1.toFixed(2)}</TableCell>
                      <TableCell className="text-right hidden md:table-cell text-xs p-1 whitespace-nowrap border-r">${p.netoGravado2.toFixed(2)}</TableCell>
                      <TableCell className="text-right hidden md:table-cell text-xs p-1 whitespace-nowrap border-r">${p.iva2.toFixed(2)}</TableCell>
                      <TableCell className="text-right hidden md:table-cell text-xs p-1 whitespace-nowrap border-r">${p.noGravado.toFixed(2)}</TableCell>
                      <TableCell className="text-right hidden md:table-cell text-xs p-1 whitespace-nowrap border-r">${p.exentas.toFixed(2)}</TableCell>
                      <TableCell className="text-right text-xs p-1 whitespace-nowrap border-r">${p.perRetIva.toFixed(2)}</TableCell>
                      <TableCell className="text-right hidden md:table-cell text-xs p-1 whitespace-nowrap border-r">${p.percOtrosNac.toFixed(2)}</TableCell>
                      <TableCell className="text-right hidden md:table-cell text-xs p-1 whitespace-nowrap border-r">${p.percIibb.toFixed(2)}</TableCell>
                      <TableCell className="text-right hidden md:table-cell text-xs p-1 whitespace-nowrap border-r">${p.percMuni.toFixed(2)}</TableCell>
                      <TableCell className="text-right hidden md:table-cell text-xs p-1 whitespace-nowrap border-r">${p.percInt.toFixed(2)}</TableCell>
                      <TableCell className="text-right hidden md:table-cell text-xs p-1 whitespace-nowrap border-r">${p.otrosTributos.toFixed(2)}</TableCell>
                      <TableCell className="text-right font-medium text-xs p-1 whitespace-nowrap">${p.total.toFixed(2)}</TableCell>
                      <TableCell className="text-right text-xs p-1 whitespace-nowrap">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent>
                            <DropdownMenuItem>Ver Detalles</DropdownMenuItem>
                            <DropdownMenuItem>Adjuntar Archivo</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
