// app/page.tsx
import Link from 'next/link';
import { compareDesc, format, parseISO } from 'date-fns';
import { allPosts, Post } from 'contentlayer/generated';
import { Navigation } from "../components/nav";

function PostCard(post: Post) {
  return (
    <div className="p-4 border border-slate-600 w-full mx-auto">
      <h2 className="mb-1 text-xl">
        <Link href={post.url} className="text-slate-200 hover:text-blue-900 dark:text-blue-400">
          {post.title}
        </Link>
      </h2>
      <time dateTime={post.date} className="mb-2 block text-xs text-gray-400">
        {format(parseISO(post.date), 'LLLL d, yyyy')}
      </time>
    </div>
  )
}

export default function Home() {
  const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))

  return (
    <div className="mx-auto max-w-2xl py-8 pt-24 text-slate-200">
        <Navigation />
      <h1 className="mb-8 text-center text-edge-outline font-display sm:text-2xl md:text-4xl">Welcome to my Blog</h1>
      {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
    </div>
  )
}