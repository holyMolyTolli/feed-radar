import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/home'
import { RadarPage } from './pages/radar'
import { CreateRadarPage } from './pages/create-radar'

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <div className="container mx-auto py-8 px-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/radar/:id" element={<RadarPage />} />
            <Route path="/create" element={<CreateRadarPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}