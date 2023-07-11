import PageTitle from "@/Components/PageTitle";
import { revalidatePath } from "next/cache";
import AddRandomButton from "./Components/client/AddRandomButton";

let todos: string[] = ["First goal"];

export const metadata = {
  title: "Todo List",
  description: "Example of todo list",
};

export default async function FormPost() {

  // Server Action: doesn't work ((
  async function addTodo(data: FormData) {
    "use server";
    console.log(">> todo", data);
    revalidatePath('/')
  }
  
  // Server functions for client components
  async function addRandom() {
    "use server";
    const text = Math.random().toString();
    todos.push(text)
  }
  async function revalidate() {
    "use server";
    revalidatePath('/');
  }

  return (
    <main className="p-5" style={{ minHeight: "110vh" }}>
      <PageTitle>Todo list</PageTitle>

      {/* Server actions example */}
      <div className="mb-5">
        <form action={addTodo}>
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
      </div>

      {/* Client actions */}
      <AddRandomButton addRandom={addRandom} revalidate={revalidate} />

      {/* List */}
      <ul style={{ width: 300 }} className="mt-5">
        {todos.map((item, index) => (
          <li
            key={index}
            className="flex"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div>{item}</div>
          </li>
        ))}
      </ul>

    </main>
  );
}
