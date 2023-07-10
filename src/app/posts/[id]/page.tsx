// "use client"
import PageTitle from "@/Components/PageTitle";
// import Error from "next/error";
import Image from "next/image";
import Link from "next/link";

const getPosts = async (id: number) => {
  try {
    const response: any = await fetch(`https://api.slingacademy.com/v1/sample-data/blog-posts/${id}`, {
      next: {
        revalidate: 60,
      }})

      // My error handler
      if (!response.ok) throw 'Wrong post id.'
      
      const data: any = await response.json()
      const blog: PostModel = data.blog
      return blog;    
  } catch (error) {
    throw error;
  }

}

type Props = {
  params: {
    id: number
  }
}

// export const generateMetaData = ({ params }) 

export default async function Posts({ params }: Props) {
  const post: PostModel = await getPosts(params.id);
  // if (!post?.id) throw post

  return (
    <main className="p-5">
      {post?.id ? (
        <>
          <Link href="/posts">
            <button
              className="border hover:bg-blue-600 active:bg-blue-500 bg-blue-700 shadow-lg text-gray-100 rounded-xl py-1 px-4"
            >
              {'<< Back'}
            </button>
          </Link>

          <PageTitle>{post.title}</PageTitle>

          <div className="flex">
            <div className="flex-1 grid gap-1">

              <Image src={post.photo_url} alt={post.title} width="500" height="300" loading="lazy" />
              
              <div><b>Category:</b></div>        
              <div>{post.category}</div>        
              
              <div><b>Description:</b></div>        
              <div>{post.description}</div>        
            
            </div>
          </div>

          <div className="flex-auto">
            <div dangerouslySetInnerHTML={{__html: post.content_html}} />
          </div>

        </>
      ): null}
      
    </main>
  );
}
