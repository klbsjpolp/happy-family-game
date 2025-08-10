import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
// @ts-expect-error - No types for this package
import { registerSW } from 'virtual:pwa-register'

const updateSW = registerSW({
  onNeedRefresh() {
    // You could show a toast/button to reload
    updateSW(true) // immediately activate and reload
  },
  onOfflineReady() {
    // Optional: show a toast that the app is ready to work offline
    console.log('App ready to work offline')
  },
})

createRoot(document.getElementById("root")!).render(<App />);
