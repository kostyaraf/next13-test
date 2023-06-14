const todos: string[] = ["First goal"];

export default function Home() {
  async function addToDo (data: FormData) {
    "use server"
    const todo = data.get('todo') as string
    todos.push(todo);
  }

  return (
    <main className="p-5">
      <h1 className="text-4xl font-bold">Todo list:</h1>
      <ul>
        {todos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
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