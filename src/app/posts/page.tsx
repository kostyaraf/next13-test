import PageTitle from "@/Components/PageTitle";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";

const getPosts = async () => {
  const response: any = await fetch('https://api.slingacademy.com/v1/sample-data/blog-posts?offset=5&limit=50', {
  next: {
    revalidate: 60,
  }})
  const data: any = await response.json()
  const blogs: PostModel[] = data.blogs
  return blogs;
}

export default async function Posts() {
  const posts: PostModel[] = await getPosts();

  return (
    <main className="p-5">
      <PageTitle>Posts</PageTitle>
      
      <ul className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      
        <li>
          
          <Link className="text-center" href={`/posts/asdfsad`}>
            <div className="text-2xl mb-2 text-center">Wrong post example</div>
            <Image className="m-auto" src={posts?.[0].photo_url} alt={'wrong'} width="200" height="400" loading="lazy" />
          </Link>
          
          <div className="text-center">date: {moment().format('YYYY-MM-DD, HH:mm')}</div>
        </li>

      {posts?.map(post => (
        <li key={post.id}>
          
          <Link className="text-center" href={`/posts/${post.id}`}>
            <div className="text-2xl mb-2 text-center">{post.title}</div>
            <Image className="m-auto" src={post.photo_url} alt={post.title} width="200" height="400" loading="lazy" />
          </Link>
          
          <div className="text-center">date: {moment(post.updated_at).format('YYYY-MM-DD, HH:mm')}</div>
        </li>
      ))}

      </ul>
      {/* <SearchProducts onSearch={onSearch} /> */}
      {/* <AddForm addToDo={addToDo} /> */}
    </main>
  );
}
