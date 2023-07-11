"use client";

type Props = {
  addRandom: () => void;
  revalidate: () => void;
};

export default function AddRandomButton({ addRandom, revalidate }: Props) {
  
  return (
    <div>

      <button
        className="border disabled:bg-gray-600 hover:bg-blue-600 active:bg-blue-500 bg-blue-700 shadow-lg text-gray-100 rounded-xl py-2 px-2 "
        onClick={async () => {
          await addRandom();
        }}
      >
        Add Random
      </button>
      
      <button
        className="border disabled:bg-gray-600 hover:bg-green-600 active:bg-green-500 bg-green-700 shadow-lg text-gray-100 rounded-xl py-2 px-2 "
        onClick={async () => {
          await revalidate()
        }}
      >
        Revalidate
      </button>
    
    </div>
  );
}
