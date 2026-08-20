type ToolCardProps = {
  name: string;
  description: string;
};

export default function ToolCard({ name, description }: ToolCardProps) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
      <h3 className="text-lg font-semibold">{name}</h3>

      <p className="mt-2 text-sm text-zinc-400">
        {description}
      </p>
    </div>
  );
}