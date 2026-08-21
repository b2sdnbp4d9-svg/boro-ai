import ColorCard from "@/components/ColorCard";
import { colors } from "@/data/colors";

export default function Colors() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <div className="mx-auto max-w-5xl px-6 py-10">
        <h1 className="text-4xl font-bold">
          Glass Colors
        </h1>

        <p className="mt-4 text-zinc-400">
          Explore borosilicate glass colors, manufacturers, and working characteristics.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {colors.map((color) => (
            <ColorCard
              key={color.name}
              name={color.name}
              manufacturer={color.manufacturer}
              description={color.description}
            />
          ))}
        </div>
      </div>
    </main>
  );
}