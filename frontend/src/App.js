import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./assets/css/App.css"

// Layout components
import Header from "./components/layout/Header"
import Sidebar from "./components/layout/Sidebar"

// Pages
import Dashboard from "./pages/Dashboard"
import Projects from "./pages/Projects"
import CastCrew from "./pages/CastCrew"
import Schedule from "./pages/Schedule"
import Settings from "./pages/Settings"
import ProjectDetails from "./pages/ProjectDetails"

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="main-container">
          <Sidebar />
          <main className="content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:id" element={<ProjectDetails />} />
              <Route path="/cast-crew" element={<CastCrew />} />
              <Route path="/schedule" element={<Schedule />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  )
}

export default App

