import { createInertiaApp } from '@inertiajs/react'
import { createElement } from 'react'
import { createRoot } from 'react-dom/client'

createInertiaApp({
  resolve: (name) => {
    const pages = import.meta.glob('../pages/**/*.jsx', { eager: true })
    return pages[`../pages/${name}.jsx`]
  },
  setup({ el, App, props }) {
    const root = createRoot(el)
    root.render(createElement(App, props))
  },
})
