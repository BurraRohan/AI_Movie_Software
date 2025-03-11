import { Link } from "react-router-dom"
import "./ProjectCard.css"

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-card-image">
        <img src={project.thumbnail || "/placeholder.jpg"} alt={project.title} />
      </div>
      <div className="project-card-content">
        <h3>{project.title}</h3>
        <p className="project-status">{project.status}</p>
        <p className="project-description">{project.description}</p>
        <div className="project-meta">
          <span>Director: {project.director}</span>
          <span>Due: {project.dueDate}</span>
        </div>
        <Link to={`/projects/${project.id}`} className="btn btn-primary view-btn">
          View Project
        </Link>
      </div>
    </div>
  )
}

export default ProjectCard

