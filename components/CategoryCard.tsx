type CategoryCardProps = {
  title: string;
  description: string;
  href: string;
  icon: string;
};

export default function CategoryCard({
  title,
  description,
  href,
  icon,
}: CategoryCardProps) {
  return (
    <a
      href={href}
      className="block rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition hover:border-zinc-600"
    >
      <div className="mb-3 text-3xl">{icon}</div>

      <h2 className="text-xl font-semibold">{title}</h2>

      <p className="mt-2 text-sm text-zinc-400">
        {description}
      </p>
    </a>
  );
}