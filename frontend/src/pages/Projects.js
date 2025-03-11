"use client"

import { useState } from "react"
import ProjectCard from "../components/ProjectCard"
import "./Projects.css"

function Projects() {
  // Mock data
  const initialProjects = [
    {
      id: 1,
      title: "The Last Chapter",
      status: "In Production",
      description: "A thriller about a writer who discovers his latest novel is coming true.",
      director: "John Smith",
      dueDate: "Aug 2023",
      thumbnail: "/placeholder.jpg",
    },
    {
      id: 2,
      title: "Midnight Blues",
      status: "Pre-production",
      description: "A jazz musician finds himself caught in a time loop in 1950s New York.",
      director: "Sarah Johnson",
      dueDate: "Oct 2023",
      thumbnail: "/placeholder.jpg",
    },
    {
      id: 3,
      title: "City Lights",
      status: "Development",
      description: "A coming-of-age story set in the vibrant streets of Tokyo.",
      director: "Mike Williams",
      dueDate: "Dec 2023",
      thumbnail: "/placeholder.jpg",
    },
    {
      id: 4,
      title: "Desert Storm",
      status: "Completed",
      description: "A war drama following a group of soldiers stranded in a desert.",
      director: "Emily Davis",
      dueDate: "Completed",
      thumbnail: "/placeholder.jpg",
    },
  ]

  const [projects, setProjects] = useState(initialProjects)
  const [filter, setFilter] = useState("all")

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.status.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div className="projects-page">
      <div className="projects-header">
        <h1 className="page-title">Projects</h1>
        <button className="btn btn-primary">+ New Project</button>
      </div>

      <div className="filters">
        <button className={`filter-btn ${filter === "all" ? "active" : ""}`} onClick={() => setFilter("all")}>
          All
        </button>
        <button
          className={`filter-btn ${filter === "production" ? "active" : ""}`}
          onClick={() => setFilter("production")}
        >
          In Production
        </button>
        <button className={`filter-btn ${filter === "pre" ? "active" : ""}`} onClick={() => setFilter("pre")}>
          Pre-production
        </button>
        <button
          className={`filter-btn ${filter === "development" ? "active" : ""}`}
          onClick={() => setFilter("development")}
        >
          Development
        </button>
        <button
          className={`filter-btn ${filter === "completed" ? "active" : ""}`}
          onClick={() => setFilter("completed")}
        >
          Completed
        </button>
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}

export default Projects

