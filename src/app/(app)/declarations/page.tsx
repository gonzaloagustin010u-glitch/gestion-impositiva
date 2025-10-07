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
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold font-headline">Declarations</h1>
        <div className="flex gap-2">
            <Button variant="outline">
                <CheckCircle className="mr-2 h-4 w-4" /> Validate
            </Button>
            <Button>
                <Download className="mr-2 h-4 w-4" /> Generate TXT
            </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>June 2024 Declaration Summary</CardTitle>
          <CardDescription>
            Calculated totals based on imported sales and purchases.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-6 border rounded-lg">
            <h3 className="text-lg font-semibold">Sales Totals</h3>
            <div className="mt-4 space-y-2 text-sm">
                <p className="flex justify-between">Net Amount: <span>$142,300.00</span></p>
                <p className="flex justify-between">IVA (21%): <span>$29,883.00</span></p>
                <p className="flex justify-between font-bold">Total Sales: <span className="font-bold">$172,183.00</span></p>
            </div>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="text-lg font-semibold">Purchases Totals</h3>
            <div className="mt-4 space-y-2 text-sm">
                <p className="flex justify-between">Net Amount: <span>$58,800.00</span></p>
                <p className="flex justify-between">IVA (21%): <span>$12,348.00</span></p>
                <p className="flex justify-between font-bold">Total Purchases: <span className="font-bold">$71,148.00</span></p>
            </div>
          </div>
          <div className="p-6 rounded-lg bg-secondary text-secondary-foreground">
            <h3 className="text-lg font-semibold">Final Position</h3>
            <div className="mt-4 space-y-2 text-sm">
                <p className="flex justify-between">IVA Sales (Crédito Fiscal): <span>$29,883.00</span></p>
                <p className="flex justify-between">IVA Purchases (Débito Fiscal): <span>-$12,348.00</span></p>
                <p className="flex justify-between text-lg font-bold mt-4 pt-2 border-t">IVA to Pay: <span className="font-bold text-accent-foreground">$17,535.00</span></p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
