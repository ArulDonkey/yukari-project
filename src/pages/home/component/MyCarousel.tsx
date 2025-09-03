import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function CarouselSize() {
  return (
    <div className="w-6xl h-1/2">
      <Carousel opts={{ align: "start" }}>
        <div className="grid grid-cols-2 grid-rows-2 gap-10 w-20 mt-8">
          <CarouselPrevious />
          <CarouselNext />
        </div>
        <CarouselContent>
          {[
            "/assets/images/manufactur.png",
            "/assets/images/perawatan-lansia.png",
            "/assets/images/kontruksi.png",
            "/assets/images/otomotif.png",
            "/assets/images/perhotelan.png",
            "/assets/images/pengelolaan-makanan.png",
          ].map((src, index) => (
            <CarouselItem
              key={index}
              className="pl-1 md:basis-1/2 lg:basis-1/4"
            >
              <div className="flex items-center justify-center p-4">
                <img
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className="object-cover"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
