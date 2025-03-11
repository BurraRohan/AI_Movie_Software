import { Link } from "react-router-dom"
import "./Header.css"

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">MoviePro</Link>
      </div>
      <div className="header-right">
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
        </div>
        <div className="user-menu">
          <span className="user-name">John Doe</span>
          <div className="avatar">JD</div>
        </div>
      </div>
    </header>
  )
}

export default Header

