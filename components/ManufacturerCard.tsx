type ManufacturerCardProps = {
  name: string;
  description: string;
};

export default function ManufacturerCard({
  name,
  description,
}: ManufacturerCardProps) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition hover:border-zinc-600">
      <h2 className="text-xl font-semibold">{name}</h2>

      <p className="mt-2 text-sm text-zinc-400">
        {description}
      </p>
    </div>
  );
}