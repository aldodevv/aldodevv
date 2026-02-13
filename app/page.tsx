import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen p-8 font-sans">
      <main className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">
          Next.js Playground & Portfolio
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Section title="Standard Routes">
            <LinkItem
              href="/blog"
              label="Dynamic Routes (Blog)"
              description="/blog/[slug]"
            />
            <LinkItem
              href="/about"
              label="Route Group (Marketing)"
              description="/(marketing)/about"
            />
            <LinkItem
              href="/account"
              label="Route Group (Shop)"
              description="/(shop)/account"
            />
          </Section>

          <Section title="Advanced Patterns">
            <LinkItem
              href="/dashboard"
              label="Parallel Routes"
              description="@slot in Dashboard"
            />
            <LinkItem
              href="/feed"
              label="Intercepting Routes"
              description="(.)photo in Feed"
            />
          </Section>

          <Section title="System Pages">
            <LinkItem
              href="/non-existent-page"
              label="Not Found"
              description="Triggers not-found.tsx"
            />
            <LinkItem
              href="/api/sitemap.xml"
              label="Sitemap"
              description="Generated sitemap.xml"
            />
            <LinkItem
              href="/robots.txt"
              label="Robots.txt"
              description="Generated robots.txt"
            />
          </Section>
        </div>
      </main>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border p-6 rounded-lg bg-gray-50 dark:bg-gray-900">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <ul className="space-y-3">{children}</ul>
    </div>
  );
}

function LinkItem({
  href,
  label,
  description,
}: {
  href: string;
  label: string;
  description: string;
}) {
  return (
    <li>
      <Link href={href} className="flex flex-col group">
        <span className="text-blue-600 dark:text-blue-400 font-medium group-hover:underline">
          {label}
        </span>
        <span className="text-sm text-gray-500">{description}</span>
      </Link>
    </li>
  );
}
