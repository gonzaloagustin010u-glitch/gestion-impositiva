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
import { Upload, MoreHorizontal } from "lucide-react";
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
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold font-headline">Compras</h1>
        <Button>
          <Upload className="mr-2 h-4 w-4" /> Importar Compras
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Registros de Compras</CardTitle>
          <CardDescription>
            Navegá y gestioná tus registros de compras para el período actual.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="w-full overflow-auto">
            <Table className="min-w-max">
            <TableHeader>
                <TableRow>
                    <TableHead colSpan={1} className="text-center bg-primary/10">FECHA</TableHead>
                    <TableHead colSpan={4} className="text-center bg-primary/20">COMPROBANTES</TableHead>
                    <TableHead colSpan={16} className="text-center bg-primary/30">PROVEEDOR / IMPORTES</TableHead>
                    <TableHead colSpan={6} className="text-center bg-primary/40">PERCEPCIONES</TableHead>
                    <TableHead colSpan={2} className="text-center bg-primary/50">TOTALES</TableHead>
                </TableRow>
              <TableRow>
                {/* FECHA */}
                <TableHead>Fecha</TableHead>
                {/* COMPROBANTES */}
                <TableHead>Tipo</TableHead>
                <TableHead>PV</TableHead>
                <TableHead>Número</TableHead>
                <TableHead>Nº despacho</TableHead>
                {/* PROVEEDOR */}
                <TableHead>Cód. Op.</TableHead>
                <TableHead>Apellido y Nombre</TableHead>
                <TableHead>Cód. Doc.</TableHead>
                <TableHead>CUIT</TableHead>
                <TableHead>Moneda</TableHead>
                <TableHead>Tipo Cambio</TableHead>
                <TableHead>Cant. Alic. IVA</TableHead>
                <TableHead>Cód. IVA 1</TableHead>
                <TableHead>Cód. IVA 2</TableHead>
                <TableHead className="text-right">Neto Grav. 1</TableHead>
                <TableHead className="text-right">IVA 1</TableHead>
                <TableHead className="text-right">Neto Grav. 2</TableHead>
                <TableHead className="text-right">IVA 2</TableHead>
                <TableHead className="text-right">No Gravado</TableHead>
                <TableHead className="text-right">Op. Exentas</TableHead>
                {/* PERCEPCIONES */}
                <TableHead className="text-right">Perc/Ret. IVA</TableHead>
                <TableHead className="text-right">Perc. Otros</TableHead>
                <TableHead className="text-right">Perc. IIBB</TableHead>
                <TableHead className="text-right">Perc. Munic.</TableHead>
                <TableHead className="text-right">Perc. Int.</TableHead>
                <TableHead className="text-right">Otros Trib.</TableHead>
                {/* TOTAL */}
                <TableHead className="text-right">Total</TableHead>
                <TableHead><span className="sr-only">Acciones</span></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {purchasesData.map((p) => (
                <TableRow key={p.id}>
                  <TableCell>{p.fecha}</TableCell>
                  <TableCell>{p.tipo}</TableCell>
                  <TableCell>{p.pv}</TableCell>
                  <TableCell>{p.numero}</TableCell>
                  <TableCell>{p.despacho}</TableCell>
                  <TableCell>{p.codOp}</TableCell>
                  <TableCell>{p.nombreVendedor}</TableCell>
                  <TableCell>{p.codDoc}</TableCell>
                  <TableCell>{p.cuit}</TableCell>
                  <TableCell>{p.moneda}</TableCell>
                  <TableCell>{p.cambio}</TableCell>
                  <TableCell className="text-center">{p.cantIva}</TableCell>
                  <TableCell>{p.codIva1}</TableCell>
                  <TableCell>{p.codIva2}</TableCell>
                  <TableCell className="text-right">${p.netoGravado1.toFixed(2)}</TableCell>
                  <TableCell className="text-right">${p.iva1.toFixed(2)}</TableCell>
                  <TableCell className="text-right">${p.netoGravado2.toFixed(2)}</TableCell>
                  <TableCell className="text-right">${p.iva2.toFixed(2)}</TableCell>
                  <TableCell className="text-right">${p.noGravado.toFixed(2)}</TableCell>
                  <TableCell className="text-right">${p.exentas.toFixed(2)}</TableCell>
                  <TableCell className="text-right">${p.perRetIva.toFixed(2)}</TableCell>
                  <TableCell className="text-right">${p.percOtrosNac.toFixed(2)}</TableCell>
                  <TableCell className="text-right">${p.percIibb.toFixed(2)}</TableCell>
                  <TableCell className="text-right">${p.percMuni.toFixed(2)}</TableCell>
                  <TableCell className="text-right">${p.percInt.toFixed(2)}</TableCell>
                  <TableCell className="text-right">${p.otrosTributos.toFixed(2)}</TableCell>
                  <TableCell className="text-right font-medium">${p.total.toFixed(2)}</TableCell>
                  <TableCell className="text-right">
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
        </CardContent>
      </Card>
    </div>
  );
}
