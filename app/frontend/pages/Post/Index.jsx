import React from 'react'
import { Link, Head } from '@inertiajs/react'
import Post from './Post'

export default function Index({ posts, flash }) {
  return (
    <>
      <Head title="Posts" />

      {flash.notice && <p style={{ color: 'green' }}>{flash.notice}</p>}

      <h1>Posts</h1>
      <div>
        {posts.map((post) => (
          <div key={post.id}>
            <Post post={post} />
            <p>
              <Link href={`/posts/${post.id}`}>Show this post</Link>
            </p>
          </div>
        ))}
      </div>

      <Link href="/posts/new">New post</Link>
    </>
  )
}
