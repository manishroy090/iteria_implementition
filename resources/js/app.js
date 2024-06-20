import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'

createInertiaApp({
  // Function to resolve the component by name
  resolve: name => {
    // Importing all .jsx files in the Pages directory and its subdirectories
    const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true })
    // Returning the component based on the name
    return pages[`./Pages/${name}.jsx`]
  },
  // Setup function to render the Inertia app
  setup({ el, App, props }) {
    // Creating a root and rendering the App component with props
    createRoot(el).render(<App {...props} />)
  },
})
