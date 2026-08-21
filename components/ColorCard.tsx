type ColorCardProps = {
  name: string;
  manufacturer: string;
  description: string;
};

export default function ColorCard({
  name,
  manufacturer,
  description,
}: ColorCardProps) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
      <h2 className="text-xl font-semibold">{name}</h2>

      <p className="mt-1 text-sm text-zinc-500">
        {manufacturer}
      </p>

      <p className="mt-3 text-sm text-zinc-400">
        {description}
      </p>
    </div>
  );
}