"use client";

import { use, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SearchBar from "@/components/SearchBar";
import { colors } from "@/data/colors";
import { manufacturers } from "@/data/manufacturers";

type ManufacturerPageProps = {
  params: Promise<{
    manufacturer: string;
  }>;
};

export default function ManufacturerPage({
  params,
}: ManufacturerPageProps) {
  const { manufacturer } = use(params);

  const manufacturerData = manufacturers.find(
    (item) =>
      item.name.toLowerCase().replace(/\s+/g, "-") ===
      manufacturer.toLowerCase()
  );

  const manufacturerName = manufacturer
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const [searchTerm, setSearchTerm] = useState("");

  const manufacturerColors = colors.filter(
    (color) =>
      color.manufacturer.toLowerCase() === manufacturerName.toLowerCase()
  );

  const filteredColors = manufacturerColors.filter((color) => {
    const search = searchTerm.toLowerCase();

    return (
      color.name.toLowerCase().includes(search) ||
      color.description.toLowerCase().includes(search)
    );
  });

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <div className="mx-auto max-w-5xl px-6 py-10">

        {manufacturerData && (
          <div className="mb-6 flex justify-center">
            <Image
              src={manufacturerData.logo}
              alt={`${manufacturerData.name} logo`}
              width={240}
              height={120}
              className="max-h-28 w-auto object-contain"
            />
          </div>
        )}

        <h1 className="text-4xl font-bold">
          {manufacturerName}
        </h1>

        <p className="mt-4 text-zinc-400">
          Explore colors from {manufacturerName}.
        </p>

        <div className="mt-8">
          <SearchBar
            value={searchTerm}
            onChange={setSearchTerm}
            placeholder={`Search ${manufacturerName} colors...`}
          />
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Colors
          </h2>

          {filteredColors.length === 0 ? (
            <p className="mt-4 text-zinc-400">
              No colors found.
            </p>
          ) : (
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {filteredColors.map((color) => (
                <Link
                  key={color.name}
                  href={`/glass/colors/${manufacturer}/${color.name
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                  className="block rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition hover:border-zinc-600"
                >
                  
  <div className="mb-4 flex justify-center">
    <Image
      src={color.images[0]}
      alt={`${color.name} glass color`}
      width={300}
      height={200}
      className="h-40 w-full object-contain"
    />
  </div>

  <h3 className="text-xl font-semibold">
    {color.name}
  </h3>

                  <p className="mt-2 text-sm text-zinc-400">
                    {color.description}
                  </p>

                  <p className="mt-4 text-sm text-zinc-500">
                    {color.compatibility}
                  </p>
                </Link>
              ))}
            </div>
          )}
        </section>

      </div>
    </main>
  );
}