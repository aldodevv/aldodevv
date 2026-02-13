export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="bg-white">
      <nav className="p-4 border-b">
        <span className="font-bold text-xl">Marketing Header</span>
      </nav>
      {children}
      <footer className="p-4 bg-gray-100 mt-8">Marketing Footer</footer>
    </section>
  );
}
