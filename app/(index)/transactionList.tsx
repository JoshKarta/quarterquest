import { Card, CardContent } from "@/components/ui/card";
import { cn, formatCurrency } from "@/lib/utils";
import { format, parseISO } from "date-fns";

type TTransaction = {
  purchase: string;
  amount: number;
  date: string;
  type: "income" | "expense";
};

export default function TransactionList() {
  const transactions = [
    {
      purchase: "Gym",
      amount: 500,
      date: "2023-10-30 17:40:23",
      type: "expense",
    },
    {
      purchase: "Gym",
      amount: 500,
      date: "2023-10-30 17:40:23",
      type: "expense",
    },
  ];
  return (
    <div className="container-screen py-4">
      <h4 className="font-medium mb-1">Recent transactions</h4>
      <div className="flex flex-col space-y-2">
        {transactions.map(({ purchase, amount, date, type }) => {
          const parsedDate = parseISO(date);
          return (
            <Card>
              <CardContent className="p-4">
                <div className="grid grid-cols-2">
                  <div>
                    <p className="font-bold">{purchase}</p>
                    <p className="text-sm">
                      {format(parsedDate, "dd MMMM yyyy")}
                    </p>
                  </div>
                  <div className="flex justify-end items-center">
                    <p
                      className={cn(
                        "font-bold",
                        type === "income" ? "text-green-500" : "text-red-500"
                      )}
                    >
                      {formatCurrency(amount, "SRD")}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
