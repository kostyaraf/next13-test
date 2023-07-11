"use client";

import { useEffect, useRef, useState, useTransition } from "react";
import ProductList from "../server/ProductList";

type Props = {
  onSearch: (val: string) => Promise<ProductModel[]>;
};

export default function SearchProducts({ onSearch }: Props) {
  const todoRef = useRef<HTMLInputElement>(null);
  const [pending, startTransition] = useTransition();
  const [products, setProducts] = useState<ProductModel[]>();

  const searchAction = async (val: string) => {
    const newProduct = await onSearch(val);
    setProducts(newProduct);
  };

  const onSubmit = async () => {
    startTransition(async () => {
      searchAction(todoRef.current!.value);
    });
  };

  useEffect(() => {
    searchAction("");
  }, []);

  return (
    <div>
      <div className="mb-4">
        <input
          ref={todoRef}
          type="text"
          name="search"
          className="border border-gray-300 rounded-xl py-2 px-2 mr-1"
          onKeyDown={(key) => {
            if (key.key == "Enter") onSubmit();
          }}
          onChange={(e) => { searchAction(e.target.value) }}
        />
        <button
          disabled={pending}
          onClick={onSubmit}
          className="border disabled:bg-gray-600 hover:bg-blue-600 active:bg-blue-500 bg-blue-700 shadow-lg text-gray-100 rounded-xl py-2 px-2 "
        >
          Search
        </button>
      </div>
      <ProductList list={products} />
    </div>
  );
}
