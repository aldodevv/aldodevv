export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="bg-gray-50">
      <header className="p-4 bg-blue-600 text-white">
        <span className="font-bold text-xl">Shop Storefront</span>
      </header>
      <main className="p-4">{children}</main>
    </section>
  );
}
