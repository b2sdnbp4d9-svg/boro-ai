type ColorCardProps = {
  name: string;
  manufacturer: string;
  description: string;
  compatibility: string;
  workingCharacteristics: string;
  strikingBehavior: string;
  commonUses: string;
};

export default function ColorCard({
  name,
  manufacturer,
  description,
  compatibility,
  workingCharacteristics,
  strikingBehavior,
  commonUses,
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

      <div className="mt-5 space-y-3 text-sm">
        <div>
          <span className="font-semibold text-white">
            Compatibility:
          </span>{" "}
          <span className="text-zinc-400">
            {compatibility}
          </span>
        </div>

        <div>
          <span className="font-semibold text-white">
            Working Characteristics:
          </span>{" "}
          <span className="text-zinc-400">
            {workingCharacteristics}
          </span>
        </div>

        <div>
          <span className="font-semibold text-white">
            Striking / Reduction:
          </span>{" "}
          <span className="text-zinc-400">
            {strikingBehavior}
          </span>
        </div>

        <div>
          <span className="font-semibold text-white">
            Common Uses:
          </span>{" "}
          <span className="text-zinc-400">
            {commonUses}
          </span>
        </div>
      </div>
    </div>
  );
}