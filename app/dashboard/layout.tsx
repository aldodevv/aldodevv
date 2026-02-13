export default function Layout({
  children,
  team,
  analytics,
}: {
  children: React.ReactNode;
  team: React.ReactNode;
  analytics: React.ReactNode;
}) {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard (Parallel Routes)</h1>
      {children}
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="border p-4 rounded bg-gray-50">{team}</div>
        <div className="border p-4 rounded bg-gray-50">{analytics}</div>
      </div>
    </div>
  );
}
