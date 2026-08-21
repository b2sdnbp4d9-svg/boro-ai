import Image from "next/image";
import Link from "next/link";

type ManufacturerCardProps = {
  name: string;
  description: string;
  logo: string;
};

export default function ManufacturerCard({
  name,
  description,
  logo,
}: ManufacturerCardProps) {
  return (
    <Link
      href={`/glass/colors/${name.toLowerCase().replace(/\s+/g, "-")}`}
      className="block rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition hover:border-zinc-600"
    >
      <div className="mb-4 flex h-24 items-center justify-center">
        <Image
          src={logo}
          alt={`${name} logo`}
          width={160}
          height={80}
          className="max-h-20 w-auto object-contain"
        />
      </div>

      <h2 className="text-xl font-semibold">{name}</h2>

      <p className="mt-2 text-sm text-zinc-400">
        {description}
      </p>
    </Link>
  );
}