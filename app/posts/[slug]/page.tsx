// app/posts/[slug]/page.tsx
import { format, parseISO } from 'date-fns'
import { allPosts } from 'contentlayer/generated'
import { Navigation } from "../../components/nav";
import Link from 'next/link';
import { ArrowLeft } from "lucide-react";

export const generateStaticParams = async () => allPosts.map((post) => ({ slug: post._raw.flattenedPath }))

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`)
  return { title: post.title }
}

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`)

  return (
    <article className="flex flex-col items-center justify-center h-5/6 text-slate-400 ">
      <Link
						href="/posts/"
						className=" container flex flex-row  py-10 duration-200 text-zinc-300 hover:text-zinc-100"
					>
						<ArrowLeft className="w-6 h-6 " />
			</Link>
      <div className="from-zinc-900/0 via-zinc-900 to-zinc-900/0 w-5/6 flex-grow text-slate-300 ">
        <h1 className="text-3xl font-bold ">{post.title}</h1>
        <time dateTime={post.date} className="mb-1 text-xs ">
          {format(parseISO(post.date), 'LLLL d, yyyy')}
        </time>
      </div>
      <div className="[&>*]:mb-3 [&>*:last-child]:mb-0 from-zinc-900/0 via-zinc-900 to-zinc-900/0 w-5/6 py-10 flex-grow" dangerouslySetInnerHTML={{ __html: post.body.html }} />
    </article>
  )
}

export default PostLayout