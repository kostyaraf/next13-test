import Link from "next/link";

export default function Header() {
  return (
    <div style={{ width: '100%', height: 60, background: '#000', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ display: 'flex', alignItems: '', textTransform: 'uppercase' }}>
        
        <div style={{ margin: '0 10px'}}>
          <Link href="/todo-list" className="text-1xl">
            Todo List
          </Link>
        </div>

        <div style={{ margin: '0 10px'}}>
          <Link href="/products" className="text-1xl">
            Products
          </Link>
        </div>

        <div style={{ margin: '0 10px'}}>
          <Link href="/posts" className="text-1xl">
            Posts
          </Link>
        </div>
      </div>
    </div>
  );
}
