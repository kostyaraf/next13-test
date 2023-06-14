"use client";

type Props = {
  id: number;
  deleteToDo: (id: number) => Promise<void>;
};

export default function DeleteButton({ deleteToDo, id }: Props) {
  return (
    <button
      onClick={async () => {
        await deleteToDo(id);
      }}
      className="border disabled:bg-gray-600 hover:bg-red-600 active:bg-red-500 bg-red-700 shadow-lg text-gray-100 rounded-xl py-0 px-2"
    >
      X
    </button>
  );
}
