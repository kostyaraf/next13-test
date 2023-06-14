import Image from "next/image";

type Props = {
  product: ProductModel;
};

export default function ProductCard({ product }: Props) {
  return (
    <div className="border shadow-xl bg-white rounded-xl p-4 flex flex-col">
      <div className="text-2xl mb-2 text-center">{product.title}</div>
      <div className="mb-4 text-gray-500 line-clamp-2">{product.description}</div>
      <div className="flex flex-grow">
      <Image
        className="m-auto"
        src={product.image}
        alt={product.title}
        width={200}
        height={100}
      />
      </div>
    </div>
  );
}
