"use client";

import { use } from "react";
import Image from "next/image";
import { colors } from "@/data/colors";

type ColorPageProps = {
  params: Promise<{
    manufacturer: string;
    color: string;
  }>;
};

export default function ColorPage({ params }: ColorPageProps) {
  const { manufacturer, color } = use(params);

  const manufacturerName = manufacturer
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const colorName = color
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const colorData = colors.find(
    (item) =>
      item.manufacturer.toLowerCase() === manufacturerName.toLowerCase() &&
      item.name.toLowerCase() === colorName.toLowerCase()
  );

  if (!colorData) {
    return (
      <main className="min-h-screen bg-zinc-950 text-white">
        <div className="mx-auto max-w-5xl px-6 py-10">
          <h1 className="text-4xl font-bold">Color Not Found</h1>

          <p className="mt-4 text-zinc-400">
            We couldn't find this glass color.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <div className="mx-auto max-w-5xl px-6 py-10">
        <p className="text-sm text-zinc-500">
          {colorData.manufacturer}
        </p>
        
        <div className="mt-6 flex justify-center">
  <Image
    src={colorData.image}
    alt={`${colorData.name} glass color`}
    width={400}
    height={300}
    className="max-h-72 w-auto rounded-2xl object-contain"
  />
</div>

        <h1 className="mt-2 text-4xl font-bold">
          {colorData.name}
        </h1>

        <p className="mt-4 text-zinc-400">
          {colorData.description}
        </p>

        <section className="mt-10 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
            <h2 className="text-xl font-semibold">
              Compatibility
            </h2>

            <p className="mt-3 text-zinc-400">
              {colorData.compatibility}
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
            <h2 className="text-xl font-semibold">
              Working Characteristics
            </h2>

            <p className="mt-3 text-zinc-400">
              {colorData.workingCharacteristics}
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
            <h2 className="text-xl font-semibold">
              Striking Behavior
            </h2>

            <p className="mt-3 text-zinc-400">
              {colorData.strikingBehavior}
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
            <h2 className="text-xl font-semibold">
              Common Uses
            </h2>

            <p className="mt-3 text-zinc-400">
              {colorData.commonUses}
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}