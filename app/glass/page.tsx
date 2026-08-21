import Link from "next/link";

export default function Glass() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <div className="mx-auto max-w-5xl px-6 py-10">

        <h1 className="text-4xl font-bold">
          Glass
        </h1>

        <p className="mt-4 text-zinc-400">
          Explore glass colors, clear glass, manufacturers, and working information.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">

          <Link
            href="/glass/colors"
            className="block rounded-2xl border border-zinc-800 bg-zinc-900 p-8 transition hover:border-zinc-600"
          >
            <div className="mb-4 text-4xl">🎨</div>

            <h2 className="text-2xl font-semibold">
              Glass Colors
            </h2>

            <p className="mt-3 text-zinc-400">
              Explore colored borosilicate glass, manufacturers,
              working characteristics, and community information.
            </p>
          </Link>

          <Link
            href="/glass/clear"
            className="block rounded-2xl border border-zinc-800 bg-zinc-900 p-8 transition hover:border-zinc-600"
          >
            <div className="mb-4 text-4xl">💎</div>

            <h2 className="text-2xl font-semibold">
              Clear Glass
            </h2>

            <p className="mt-3 text-zinc-400">
              Explore clear borosilicate glass, manufacturers,
              types, and working information.
            </p>
          </Link>

        </div>

      </div>
    </main>
  );
}