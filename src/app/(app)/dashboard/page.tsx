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
  { month: "January", sales: 18600, purchases: 8000 },
  { month: "February", sales: 30500, purchases: 12000 },
  { month: "March", sales: 23700, purchases: 9800 },
  { month: "April", sales: 27300, purchases: 15000 },
  { month: "May", sales: 20900, purchases: 11000 },
  { month: "June", sales: 21400, purchases: 13000 },
];

const chartConfig = {
  sales: {
    label: "Sales",
    color: "hsl(var(--primary))",
  },
  purchases: {
    label: "Purchases",
    color: "hsl(var(--accent))",
  },
};

const declarations = [
  { period: "May 2024", status: "Validated", iva: 2352.0, iibb: 823.2 },
  { period: "April 2024", status: "Validated", iva: 2583.0, iibb: 904.05 },
  { period: "March 2024", status: "Validated", iva: 2912.7, iibb: 1019.45 },
  { period: "February 2024", status: "Validated", iva: 3885.0, iibb: 1359.75 },
];

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-3xl font-bold font-headline">Dashboard</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Sales</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$142,300.00</div>
            <p className="text-xs text-muted-foreground">+20.1% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Purchases
            </CardTitle>
            <ShoppingCart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$58,800.00</div>
            <p className="text-xs text-muted-foreground">+18.1% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Estimated IVA
            </CardTitle>
            <Landmark className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$17,535.00</div>
            <p className="text-xs text-muted-foreground">For current period</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Sales & Purchases Overview</CardTitle>
          <CardDescription>
            A look at your financial activity for the last 6 months.
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
          <CardTitle>Recent Declarations</CardTitle>
          <CardDescription>Status of your recent tax declarations.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Period</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">IVA</TableHead>
                <TableHead className="text-right">IIBB</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {declarations.map((d) => (
                <TableRow key={d.period}>
                  <TableCell className="font-medium">{d.period}</TableCell>
                  <TableCell><Badge variant={d.status === 'Validated' ? 'secondary' : 'default'}>{d.status}</Badge></TableCell>
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
