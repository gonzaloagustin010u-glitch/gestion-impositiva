"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { DollarSign, ShoppingCart, Landmark } from "lucide-react";

const chartData = [
  { month: "Enero", sales: 18600, purchases: 8000 },
  { month: "Febrero", sales: 30500, purchases: 12000 },
  { month: "Marzo", sales: 23700, purchases: 9800 },
  { month: "Abril", sales: 27300, purchases: 15000 },
  { month: "Mayo", sales: 20900, purchases: 11000 },
  { month: "Junio", sales: 21400, purchases: 13000 },
];

const chartConfig = {
  sales: {
    label: "Ventas",
    color: "hsl(var(--chart-1))",
  },
  purchases: {
    label: "Compras",
    color: "hsl(var(--chart-2))",
  },
};

const declarations = [
  { period: "Mayo 2024", status: "Validado", iva: 2352.0, iibb: 823.2 },
  { period: "Abril 2024", status: "Validado", iva: 2583.0, iibb: 904.05 },
  { period: "Marzo 2024", status: "Validado", iva: 2912.7, iibb: 1019.45 },
  { period: "Febrero 2024", status: "Validado", iva: 3885.0, iibb: 1359.75 },
];

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-8 w-full">
      <h1 className="text-3xl font-bold font-headline">Panel de Control</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Ventas Totales</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$142,300.00</div>
            <p className="text-xs text-muted-foreground">+20.1% desde el mes anterior</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Compras Totales
            </CardTitle>
            <ShoppingCart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$58,800.00</div>
            <p className="text-xs text-muted-foreground">+18.1% desde el mes anterior</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              IVA Estimado
            </CardTitle>
            <Landmark className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$17,535.00</div>
            <p className="text-xs text-muted-foreground">Para el período actual</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Resumen de Ventas y Compras</CardTitle>
          <CardDescription>
            Un vistazo a tu actividad financiera de los últimos 6 meses.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="min-h-[300px] w-full">
            <BarChart accessibilityLayer data={chartData}>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value.slice(0, 3)}
              />
               <YAxis
                tickFormatter={(value) => `$${Number(value) / 1000}k`}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="dot" />}
              />
              <Bar dataKey="sales" fill="var(--color-sales)" radius={4} />
              <Bar dataKey="purchases" fill="var(--color-purchases)" radius={4} />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Declaraciones Recientes</CardTitle>
          <CardDescription>Estado de tus declaraciones de impuestos recientes.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Período</TableHead>
                <TableHead>Estado</TableHead>
                <TableHead className="text-right">IVA</TableHead>
                <TableHead className="text-right">IIBB</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {declarations.map((d) => (
                <TableRow key={d.period}>
                  <TableCell className="font-medium">{d.period}</TableCell>
                  <TableCell><Badge variant={d.status === 'Validado' ? 'secondary' : 'default'}>{d.status}</Badge></TableCell>
                  <TableCell className="text-right">${d.iva.toFixed(2)}</TableCell>
                  <TableCell className="text-right">${d.iibb.toFixed(2)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
