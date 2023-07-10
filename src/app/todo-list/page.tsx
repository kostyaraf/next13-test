import PageTitle from "@/Components/PageTitle";
import { revalidatePath } from "next/cache";
import AddForm from "./Components/client/AddForm";
import DeleteButton from "./Components/client/DeleteButton";

type ToDoType = {
  text: string;
  id: number;
};

let todos: ToDoType[] = [{ text: "First goal", id: 0 }];

export const metadata = {
  title: 'Todo List',
  description: 'Example of todo list',
}

export default function FormPost() {
  async function addToDo(data: string) {
    "use server";
    const newId = todos?.length ? todos[todos.length - 1].id + 1 : 0; 
    todos.push({ text: data, id: newId });
    revalidatePath("/form-post");
  }

  async function deleteToDo(id: number) {
    "use server";
    todos = todos.filter((item) => item.id !== id);
    revalidatePath("/form-post");
  }

  return (
    <main className="p-5" style={{ minHeight: '110vh'}}>
      <PageTitle>Todo list</PageTitle>
      <AddForm addToDo={addToDo} />
      <ul style={{ width: 300 }}>
        {todos.map((item) => (
          <li
            key={item.id}
            className="flex"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div>{item.text}</div>
            <div>
              <DeleteButton deleteToDo={deleteToDo} id={item.id}/>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
