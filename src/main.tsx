import React from 'react'
import ReactDOM from 'react-dom/client'
import studio from '@theatre/studio'
import extension from '@theatre/r3f/dist/extension'
import App from './App'
import './index.css'

// Initialize Theatre.js studio in development mode with R3F extension
if (import.meta.env.DEV) {
  studio.initialize()
  studio.extend(extension)
  
  // Hide studio UI overlay by default for an unobstructed portfolio viewing experience
  // To open the Theatre.js studio editor, append ?studio=true to the URL or press Alt+T
  if (!window.location.search.includes('studio')) {
    try {
      studio.ui.hide()
    } catch (e) {
      console.warn('Theatre studio hide error', e)
    }
  }

  // Allow developer to toggle studio overlay with Alt+T
  window.addEventListener('keydown', (e) => {
    if (e.altKey && e.key.toLowerCase() === 't') {
      try {
        // @ts-ignore
        if (studio.ui.isHidden && studio.ui.isHidden()) {
          studio.ui.restore()
        } else {
          // @ts-ignore
          studio.ui.hide()
        }
      } catch (err) {
        console.warn('Studio toggle failed', err)
      }
    }
  })
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
