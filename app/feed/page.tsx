import Link from "next/link";

export default function Feed() {
  const photos = [1, 2, 3];
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Photo Feed</h1>
      <div className="grid grid-cols-3 gap-4">
        {photos.map((id) => (
          <Link key={id} href={`/feed/photo/${id}`}>
            <div className="h-32 bg-gray-200 flex items-center justify-center rounded cursor-pointer hover:bg-gray-300">
              Photo {id}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
