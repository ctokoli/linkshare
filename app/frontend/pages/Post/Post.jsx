import React from 'react'
export default function Post({ post }) {
  return (
    <div>
      <p className='text-green-500'>
        <strong>Title:</strong>
        {post.title.toString()}
      </p>
      <p>
        <strong>Body:</strong>
        {post.body.toString()}
      </p>
      <p>
        <strong>Published at:</strong>
        {post.published_at.toString()}
      </p>
    </div>
  )
}
