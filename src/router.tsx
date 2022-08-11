import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { PageTest } from './pages/PageTest'

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/testpage" element={<PageTest />} />
      </Routes>
    </BrowserRouter>
  )
}
