import ToolCard from "@/components/ToolCard";

export default function Tools() {
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
         <ToolCard
           name="Bench Torch"
           description="A torch used for heating and shaping borosilicate glass."
  />

        <ToolCard
           name="Tweezers"
           description="Precision hand tools used for manipulating hot glass."
  />

        <ToolCard
           name="Graphite Paddle"
           description="A graphite tool used to shape and flatten hot glass."
  />

</div>
</div>
    </main>
  );
}