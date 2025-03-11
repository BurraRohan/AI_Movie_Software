import { NavLink } from "react-router-dom"
import "./Sidebar.css"

function Sidebar() {
  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" className={({ isActive }) => (isActive ? "active" : "")}>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/cast-crew" className={({ isActive }) => (isActive ? "active" : "")}>
              Cast & Crew
            </NavLink>
          </li>
          <li>
            <NavLink to="/schedule" className={({ isActive }) => (isActive ? "active" : "")}>
              Schedule
            </NavLink>
          </li>
          <li>
            <NavLink to="/settings" className={({ isActive }) => (isActive ? "active" : "")}>
              Settings
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar

