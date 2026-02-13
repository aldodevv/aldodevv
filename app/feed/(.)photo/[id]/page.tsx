type Props = {
  params: Promise<{ id: string }>;
};

export default async function PhotoModal({ params }: Props) {
  const id = (await params).id;
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded shadow-xl">
        <h2 className="text-xl font-bold">Intercepted Photo {id}</h2>
        <p className="mt-2">This is a modal view.</p>
        {/* In a real app, you'd add a close button/router.back() here */}
      </div>
    </div>
  );
}
