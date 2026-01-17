import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SiteLayout from './components/layout/SiteLayout'
import BrewsPage from './pages/BrewsPage'
import ContactPage from './pages/ContactPage'
import HikeDetailPage from './pages/HikeDetailPage'
import HikesPage from './pages/HikesPage'
import HomePage from './pages/HomePage'
import JournalPage from './pages/JournalPage'
import NotFoundPage from './pages/NotFoundPage'
import VideosPage from './pages/VideosPage'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/hikes" element={<HikesPage />} />
          <Route path="/hikes/:slug" element={<HikeDetailPage />} />
          <Route path="/brews" element={<BrewsPage />} />
          <Route path="/videos" element={<VideosPage />} />
          <Route path="/journal" element={<JournalPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
