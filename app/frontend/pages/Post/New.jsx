import React from 'react'
import { Link, Head } from '@inertiajs/react'
import Form from './Form'

export default function New({ post }) {
  return (
    <>
      <Head title="New post" />

      <h1>New post</h1>

      <Form
        post={post}
        onSubmit={(form) => {
          form.transform((data) => ({ post: data }))
          form.post('/posts')
        }}
        submitText="Create post"
      />

      <br />

      <div>
        <Link href="/posts">Back to posts</Link>
      </div>
    </>
  )
}
