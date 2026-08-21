"use client";

import { useState } from "react";
import SearchBar from "@/components/SearchBar";
import ManufacturerCard from "@/components/ManufacturerCard";
import { manufacturers } from "@/data/manufacturers";
import { colors } from "@/data/colors";

export default function Colors() {
  const [searchTerm, setSearchTerm] = useState("");
const filteredColors = colors.filter((color) => {
  const search = searchTerm.toLowerCase();

  return (
    color.name.toLowerCase().includes(search) ||
    color.manufacturer.toLowerCase().includes(search) ||
    color.description.toLowerCase().includes(search)
  );
});
  
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <div className="mx-auto max-w-5xl px-6 py-10">

        <h1 className="text-4xl font-bold">
          Glass Colors
        </h1>

        <p className="mt-4 text-zinc-400">
          Explore glass colors, manufacturers, and working information.
        </p>

       {/* Search */}
<div className="mt-8">
  <SearchBar
    value={searchTerm}
    onChange={setSearchTerm}
    placeholder="Search colors or manufacturers..."
  />
</div>

        {/* Featured */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Featured & New
          </h2>

          <div className="mt-6 rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
            <h3 className="text-xl font-semibold">
              Featured Color
            </h3>

            <p className="mt-2 text-sm text-zinc-400">
              New and featured glass colors will appear here.
            </p>
          </div>
        </section>

{/* Search Results */}
{searchTerm && (
  <section className="mt-12">
    <h2 className="text-2xl font-semibold">
      Search Results
    </h2>

    {filteredColors.length === 0 ? (
      <p className="mt-4 text-zinc-400">
        No colors found.
      </p>
    ) : (
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {filteredColors.map((color) => (
          <div
            key={color.name}
            className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6"
          >
            <h3 className="text-xl font-semibold">
              {color.name}
            </h3>

            <p className="mt-2 text-sm text-zinc-400">
              {color.manufacturer}
            </p>

            <p className="mt-4 text-sm text-zinc-400">
              {color.description}
            </p>
          </div>
        ))}
      </div>
    )}
  </section>
)}

        {/* Manufacturers */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Browse by Manufacturer
          </h2>

          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {manufacturers.map((manufacturer) => (
              <ManufacturerCard
                key={manufacturer.name}
                name={manufacturer.name}
                description={manufacturer.description}
              />
            ))}
          </div>
        </section>

        

      </div>
    </main>
  );
}