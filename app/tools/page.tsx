import ToolCard from "@/components/ToolCard";
import { tools } from "@/data/tools";

export default function Tools() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <div className="mx-auto max-w-5xl px-6 py-10">
        <h1 className="text-4xl font-bold">
          Tools
        </h1>

        <p className="mt-4 text-zinc-400">
          Explore glassblowing tools, equipment, and supplies.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {tools.map((tool) => (
            <ToolCard
              key={tool.name}
              name={tool.name}
              description={tool.description}
            />
          ))}
        </div>
      </div>
    </main>
  );
}