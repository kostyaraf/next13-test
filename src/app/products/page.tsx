import PageTitle from "@/Components/PageTitle";
import SearchProducts from "./Components/client/SearchProducts";

export default function Products() {

  // Search Server Action
  async function onSearch(data?: string) {
    "use server";
    try {
      const resp = await fetch('https://fakestoreapi.com/products', {
        next: {
          revalidate: 5,
        }
      })
      let productList: ProductModel[] = await resp.json();
      if (data) productList = productList.filter(p => p.title.includes(data))
      return productList;
    } catch (error) {
      alert(JSON.stringify(error))
      return []
    }
  }

  return (
    <main className="p-5" style={{ minHeight: '110vh'}}>
      <PageTitle>Products</PageTitle>
      <SearchProducts onSearch={onSearch} />
    </main>
  );
}
