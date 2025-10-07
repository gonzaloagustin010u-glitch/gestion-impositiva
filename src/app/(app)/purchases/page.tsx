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
import { Upload, Paperclip, MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const purchasesData = [
    { id: 1, date: "2024-06-15", cuit: "33-54859654-9", amount: 4500.0, iva: 945.0, hasAttachment: true },
    { id: 2, date: "2024-06-14", cuit: "30-68745123-5", amount: 1200.0, iva: 252.0, hasAttachment: false },
    { id: 3, date: "2024-06-14", cuit: "33-54859654-9", amount: 8000.0, iva: 1680.0, hasAttachment: true },
    { id: 4, date: "2024-06-12", cuit: "30-71122334-4", amount: 2300.0, iva: 483.0, hasAttachment: false },
    { id: 5, date: "2024-06-11", cuit: "30-68745123-5", amount: 500.0, iva: 105.0, hasAttachment: true },
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
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Fecha</TableHead>
                <TableHead>CUIT</TableHead>
                <TableHead>Adjunto</TableHead>
                <TableHead className="text-right">Monto Neto</TableHead>
                <TableHead className="text-right">IVA</TableHead>
                <TableHead className="text-right">Total</TableHead>
                <TableHead><span className="sr-only">Acciones</span></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {purchasesData.map((purchase) => (
                <TableRow key={purchase.id}>
                  <TableCell>{purchase.date}</TableCell>
                  <TableCell>{purchase.cuit}</TableCell>
                  <TableCell>
                    {purchase.hasAttachment && (
                      <Paperclip className="h-4 w-4 text-muted-foreground" />
                    )}
                  </TableCell>
                  <TableCell className="text-right">${purchase.amount.toFixed(2)}</TableCell>
                  <TableCell className="text-right">${purchase.iva.toFixed(2)}</TableCell>
                  <TableCell className="text-right font-medium">
                    ${(purchase.amount + purchase.iva).toFixed(2)}
                  </TableCell>
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
        </CardContent>
      </Card>
    </div>
  );
}
