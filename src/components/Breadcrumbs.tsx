import Link from 'next/link'

export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-zinc-400">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-2">
            {i > 0 && <span className="text-zinc-600">/</span>}
            {item.href ? (
              <Link href={item.href} className="hover:text-cyan-400 transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-zinc-300">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
