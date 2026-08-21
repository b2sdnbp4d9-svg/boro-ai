import ClearManufacturerCard from "@/components/ClearManufacturerCard";
import { clearManufacturers } from "@/data/clearManufacturers";

export default function ClearGlass() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <div className="mx-auto max-w-5xl px-6 py-10">

        <h1 className="text-4xl font-bold">
          Clear Glass
        </h1>

        <p className="mt-4 text-zinc-400">
          Explore clear borosilicate glass, manufacturers,
          products, and working information.
        </p>

        {/* Search */}
        <div className="mt-8">
          <input
            type="text"
            placeholder="Search clear glass or manufacturers..."
            className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 outline-none"
          />
        </div>

        {/* Featured */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Featured & New
          </h2>

          <div className="mt-6 rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
            <h3 className="text-xl font-semibold">
              Featured Clear Glass
            </h3>

            <p className="mt-2 text-sm text-zinc-400">
              New and featured clear glass products will appear here.
            </p>
          </div>
        </section>

        {/* Manufacturers */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Browse by Manufacturer
          </h2>

          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {clearManufacturers.map((manufacturer) => (
              <ClearManufacturerCard
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