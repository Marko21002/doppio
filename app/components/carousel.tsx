import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function CarouselDemo() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-sm"
    >
      <CarouselItem className="md:basis-1/2 lg:basis-1/3">
        <div className="p-1">
          <Card>
            <CardContent className="flex aspect-square items-center justify-center p-6">
              <span className="text-3xl font-semibold">{+1}</span>
            </CardContent>
          </Card>
        </div>
      </CarouselItem>
      <CarouselItem className="md:basis-1/2 lg:basis-1/3">
        <div className="p-1">
          <Card>
            <CardContent className="flex aspect-square items-center justify-center p-6">
              <span className="text-3xl font-semibold">{+1}</span>
            </CardContent>
          </Card>
        </div>
      </CarouselItem>

      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
