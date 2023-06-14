"use client";
import { useRef, useTransition } from "react";

type Props = {
  addToDo: (val: string) => Promise<void>;
};

export default function AddForm({ addToDo }: Props) {
  const todoRef = useRef<HTMLInputElement>(null);
  const [pending, startTransition] = useTransition();

  const onSubmit = async () => {
    startTransition(async () => {
      await addToDo(todoRef.current!.value);
    });
    todoRef.current!.value = "";
  };

  return (
    <div>
      <input
        ref={todoRef}
        type="text"
        name="todo"
        className="border border-gray-300 rounded-xl py-2 px-2 mr-1"
        onKeyDown={(key) => {
          if (key.key == "Enter") onSubmit();
        }}
      />
      <button
        disabled={pending}
        onClick={onSubmit}
        className="border disabled:bg-gray-600 hover:bg-blue-600 active:bg-blue-500 bg-blue-700 shadow-lg text-gray-100 rounded-xl py-2 px-2 "
      >
        Save
      </button>
    </div>
  );
}
