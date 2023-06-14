import ProductCard from "./ProductCard";

type Props = {
  list?: ProductModel[];
};

export default function ProductList({ list }: Props) {

  return (
    <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      {list?.map(p => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
