type Props = {
  params: Promise<{ id: string }>;
};

export default async function PhotoPage({ params }: Props) {
  const id = (await params).id;
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">Photo {id}</h1>
      <div className="mt-4 p-8 bg-gray-100 rounded">
        Full Page View of Photo {id}
      </div>
    </div>
  );
}
