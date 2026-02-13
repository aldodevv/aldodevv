import Link from "next/link";

export default function BlogIndex() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Blog</h1>
      <ul className="list-disc pl-5">
        <li>
          <Link
            href="/blog/first-post"
            className="text-blue-500 hover:underline"
          >
            First Post
          </Link>
        </li>
        <li>
          <Link
            href="/blog/second-post"
            className="text-blue-500 hover:underline"
          >
            Second Post
          </Link>
        </li>
      </ul>
    </div>
  );
}
