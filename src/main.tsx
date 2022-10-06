import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { useLocale } from '@/locale'
import 'normalize.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

useLocale()

root.render(
  <BrowserRouter basename={import.meta.env.VITE_APP_API_BASE_NAME}>
    <App />
  </BrowserRouter>
)
