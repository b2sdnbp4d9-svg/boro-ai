export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <div className="mx-auto max-w-5xl px-6 py-10">

        {/* Header */}
        <header className="mb-16 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">BoroAI</h1>
            <p className="text-sm text-zinc-400">
              Your AI glassblowing assistant
            </p>
          </div>

          <button className="rounded-lg border border-zinc-700 px-4 py-2 text-sm">
            My Projects
          </button>
        </header>

        {/* Main introduction */}
        <section className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold">
            What are you working on today?
          </h2>

          <p className="mx-auto max-w-2xl text-zinc-400">
            Ask questions, analyze a glass piece, learn techniques,
            or find the materials you need.
          </p>
        </section>

        {/* Ask BoroAI */}
        <section className="mb-12">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
            <h3 className="mb-4 text-xl font-semibold">
              Ask BoroAI
            </h3>

            <div className="flex gap-3">
              <input
                type="text"
                placeholder="Ask about a technique, color, tool, or project..."
                className="flex-1 rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 outline-none"
              />

              <button className="rounded-lg bg-white px-6 py-3 font-semibold text-black">
                Ask
              </button>
            </div>
          </div>
        </section>

        {/* Main tools */}
        <section>
          <h3 className="mb-6 text-2xl font-semibold">
            Explore
          </h3>

          <div className="grid gap-4 md:grid-cols-2">

            <button className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 text-left">
              <div className="mb-3 text-3xl">📷</div>
              <h4 className="mb-2 text-lg font-semibold">
                Analyze a Piece
              </h4>
              <p className="text-sm text-zinc-400">
                Upload a photo and learn about the techniques and
                construction behind a glass piece.
              </p>
            </button>

            <button className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 text-left">
              <div className="mb-3 text-3xl">🔥</div>
              <h4 className="mb-2 text-lg font-semibold">
                Glassblowing Techniques
              </h4>
              <p className="text-sm text-zinc-400">
                Learn techniques, terminology, and construction methods.
              </p>
            </button>

            <button className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 text-left">
              <div className="mb-3 text-3xl">🎨</div>
              <h4 className="mb-2 text-lg font-semibold">
                Glass Colors
              </h4>
              <p className="text-sm text-zinc-400">
                Explore colors, compatibility, striking colors,
                and manufacturers.
              </p>
            </button>

            <button className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 text-left">
              <div className="mb-3 text-3xl">🔧</div>
              <h4 className="mb-2 text-lg font-semibold">
                Tools & Materials
              </h4>
              <p className="text-sm text-zinc-400">
                Find tools and materials and eventually compare
                prices from different suppliers.
              </p>
            </button>

          </div>
        </section>

      </div>
    </main>
  );
}