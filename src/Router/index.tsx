import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeTemplate from 'templates/Home'

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeTemplate />} />
      </Routes>
    </BrowserRouter>
  )
}
