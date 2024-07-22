import React from 'react'
import { useForm } from '@inertiajs/react'

export default function Form({ post, onSubmit, submitText }) {
  const form = useForm({
    title: post.title || '',
    body: post.body || '',
    published_at: post.published_at || '',
  })
  const { data, setData, errors, processing } = form

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(form)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label style={{ display: 'block' }} htmlFor="title">
          Title
        </label>
        <input
          type="text"
          name="title"
          id="title"
          value={data.title}
          onChange={(e) => setData('title', e.target.value)}
        />
        {errors.title && (
          <div style={{ color: 'red' }}>{errors.title.join(', ')}</div>
        )}
      </div>
      <div>
        <label style={{ display: 'block' }} htmlFor="body">
          Body
        </label>
        <textarea
          name="body"
          id="body"
          value={data.body}
          onChange={(e) => setData('body', e.target.value)}
        />
        {errors.body && (
          <div style={{ color: 'red' }}>{errors.body.join(', ')}</div>
        )}
      </div>
      <div>
        <label style={{ display: 'block' }} htmlFor="published_at">
          Published at
        </label>
        <input
          type="datetime-local"
          name="published_at"
          id="published_at"
          value={data.published_at}
          onChange={(e) => setData('published_at', e.target.value)}
        />
        {errors.published_at && (
          <div style={{ color: 'red' }}>{errors.published_at.join(', ')}</div>
        )}
      </div>
      <div>
        <button type="submit" disabled={processing}>
          {submitText}
        </button>
      </div>
    </form>
  )
}
