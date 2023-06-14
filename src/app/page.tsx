import { revalidatePath } from "next/cache";
import Link from "next/link";

const todos: string[] = ["First goal"];

export default async function Home() {
  "use server"
  async function addToDo (data: FormData) {
    "use server"
    const todo = data.get('todo') as string
    todos.push(todo);
    revalidatePath('/');
  }

  return (
    <main className="p-5">
      <h1 className="text-4xl font-bold">Todo list:</h1>
      <ul>
        <li>
          <Link href="/todo-list">Todo List</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link href="/products">Products</Link>
        </li>
      </ul>
      <form action={addToDo}>
        <input
          type="text"
          name="todo"
          className="border border-gray-300 rounded-xl py-2 px-2 mr-1"
        />
        <button
          type="submit"
          className="border disabled:bg-gray-600 hover:bg-blue-600 active:bg-blue-500 bg-blue-700 shadow-lg text-gray-100 rounded-xl py-2 px-2 "
        >
          Save
        </button>
      </form>
    </main>
  );
}