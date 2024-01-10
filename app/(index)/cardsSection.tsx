"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { formatCurrency } from "@/lib/utils";
import { Landmark } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function CardsSection() {
  return (
    <div className="container-screen">
      <h4 className="font-medium mb-1">Accounts</h4>
      <Carousel opts={{}}>
        <CarouselContent>
          <CarouselItem className="basis-2/3 lg:basis-1/3">
            <Card className="rounded-xl">
              <CardHeader className="pb-4">
                <CardTitle>
                  <div className="flex items-center justify-between text-neutral-500">
                    <p className="text-sm">Current Account</p>
                    <Landmark className="icon-size-sm" />
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col space-y-1">
                  <h3 className="text-3xl font-bold">
                    {formatCurrency(123.5, "SRD")}
                  </h3>
                  <p>DSB 12345</p>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
          <CarouselItem className="basis-2/3 lg:basis-1/3">
            <Card className="rounded-xl">
              <CardHeader className="pb-4">
                <CardTitle>
                  <div className="flex items-center justify-between text-neutral-500">
                    <p className="text-sm">Current Account</p>
                    <Landmark className="icon-size-sm" />
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col space-y-1">
                  <h3 className="text-3xl font-bold">
                    {formatCurrency(123.5, "SRD")}
                  </h3>
                  <p>DSB 12345</p>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
