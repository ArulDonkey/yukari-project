import { Separator } from "@/components/ui/separator";
import type { LucideIcon } from "lucide-react";

type Components = {
  icon: LucideIcon;
  title: string;
};

interface ComponentsProps {
  items: Components[];
}

export function Components({ items }: ComponentsProps) {
  return (
    <section className="bg-[#AB0103] text-white py-16 lg:py-30">
      <div className="max-w-5xl mx-auto grid grid-cols-2 grid-rows-2 relative">
        <Separator
          orientation="vertical"
          className="absolute inset-y-0 left-1/2 bg-white w-[2px] hidden md:block"
        />
        <Separator
          orientation="horizontal"
          className="absolute inset-x-0 top-1/2 bg-white h-[2px] hidden md:block"
        />

        {items.map((item, i) => {
          const Icon = item.icon;
          return (
            <div
              key={i}
              className="flex flex-col items-center justify-center py-12 text-center"
            >
              <div className="mb-4">
                <Icon className="w-20 h-20 text-white" />
              </div>
              <p className="text-2xl">{item.title}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
