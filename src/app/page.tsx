import PageTitle from "@/Components/PageTitle";
import Link from "next/link";

export default async function Home() {
  return (
    <main className="p-5">
      <PageTitle>Home</PageTitle>
      <ul>
        <li className="mb-2">
          <Link href="/todo-list" className="text-1xl">
            Todo List
          </Link>
          <div className="text-gray-500">
            List saving in server component state <br />
            (yeah, not recommended, but interesting)
          </div>
        </li>
        <li className="mb-2">
          <Link href="/products" className="text-1xl">
            Products
          </Link>
          <div className="text-gray-500">
            Mix server & client components.
            <br />
            Server component get fetch request and saving in
            <b>client component state</b>
          </div>
        </li>
      </ul>
    </main>
  );
}
