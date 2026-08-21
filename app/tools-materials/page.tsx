import CategoryCard from "@/components/CategoryCard";

export default function ToolsMaterials() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <div className="mx-auto max-w-5xl px-6 py-10">
        <h1 className="text-4xl font-bold">
          Tools & Materials
        </h1>

        <p className="mt-4 text-zinc-400">
          Explore glassblowing tools, equipment, materials, and suppliers.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <CategoryCard
            title="Tools"
            description="Explore torches, hand tools, graphite, kilns, and other glassblowing equipment."
            href="/tools"
            icon="🧰"
          />

          <CategoryCard
            title="Glass Colors"
            description="Explore colors, compatibility, striking colors, and manufacturers."
            href="/colors"
            icon="🎨"
          />

          <CategoryCard
            title="Materials"
            description="Explore tubing, rod, frit, and other glassworking materials."
            href="/materials"
            icon="🧱"
          />

          <CategoryCard
            title="Suppliers"
            description="Find glass, tools, equipment, and suppliers."
            href="/suppliers"
            icon="🏪"
          />
        </div>
      </div>
    </main>
  );
}