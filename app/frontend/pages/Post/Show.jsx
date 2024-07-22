import React from 'react'
import { Link, Head } from '@inertiajs/react'
import Post from './Post'

export default function Show({ post, flash }) {
  const onDestroy = (e) => {
    if (!confirm('Are you sure you want to delete this post?')) {
      e.preventDefault()
    }
  }

  return (
    <>
      <Head title={`Post #${post.id}`} />

      {flash.notice && <p style={{ color: 'green' }}>{flash.notice}</p>}

      <h1>Post #{post.id}</h1>

      <Post post={post} />

      <div>
        <Link href={`/posts/${post.id}/edit`}>Edit this post</Link>
        {' | '}
        <Link href="/posts">Back to posts</Link>

        <br />

        <Link
          href={`/posts/${post.id}`}
          onClick={onDestroy}
          as="button"
          method="delete"
          className='text-red-500'
        >
          Destroy this post
        </Link>
      </div>
    </>
  )
}
