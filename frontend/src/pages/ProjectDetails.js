"use client"

import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import "./ProjectDetails.css"

function ProjectDetails() {
  const { id } = useParams()
  const [project, setProject] = useState(null)
  const [activeTab, setActiveTab] = useState("overview")

  // Mock data - in a real app, you would fetch this from an API
  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setProject({
        id: Number.parseInt(id),
        title: "The Last Chapter",
        status: "In Production",
        description:
          "A thriller about a writer who discovers his latest novel is coming true in real life, leading him on a dangerous journey to prevent the tragic ending he wrote.",
        director: "John Smith",
        producer: "Jane Doe",
        startDate: "2023-03-15",
        endDate: "2023-08-30",
        budget: "$2,500,000",
        locations: ["New York City", "Boston", "Chicago"],
        cast: [
          { id: 1, name: "Michael Johnson", role: "Alex Turner", photo: "/placeholder-avatar.jpg" },
          { id: 2, name: "Emily Williams", role: "Sarah Mitchell", photo: "/placeholder-avatar.jpg" },
          { id: 3, name: "David Brown", role: "Detective Rogers", photo: "/placeholder-avatar.jpg" },
        ],
        crew: [
          { id: 1, name: "John Smith", role: "Director", photo: "/placeholder-avatar.jpg" },
          { id: 2, name: "Jane Doe", role: "Producer", photo: "/placeholder-avatar.jpg" },
          { id: 3, name: "Robert Wilson", role: "Cinematographer", photo: "/placeholder-avatar.jpg" },
          { id: 4, name: "Lisa Anderson", role: "Production Designer", photo: "/placeholder-avatar.jpg" },
        ],
        schedule: [
          {
            id: 1,
            date: "2023-05-15",
            location: "New York City",
            scenes: ["Scene 12", "Scene 13"],
            notes: "Night shoot",
          },
          {
            id: 2,
            date: "2023-05-18",
            location: "New York City",
            scenes: ["Scene 15", "Scene 16"],
            notes: "Day shoot",
          },
          { id: 3, date: "2023-05-22", location: "Boston", scenes: ["Scene 20", "Scene 21"], notes: "Interior scenes" },
        ],
      })
    }, 500)
  }, [id])

  if (!project) {
    return <div className="loading">Loading project details...</div>
  }

  return (
    <div className="project-details">
      <div className="project-header">
        <div>
          <h1 className="project-title">{project.title}</h1>
          <span className="project-status">{project.status}</span>
        </div>
        <div className="project-actions">
          <button className="btn btn-secondary">Edit Project</button>
          <button className="btn btn-primary">Add Task</button>
        </div>
      </div>

      <div className="project-tabs">
        <button
          className={`tab-btn ${activeTab === "overview" ? "active" : ""}`}
          onClick={() => setActiveTab("overview")}
        >
          Overview
        </button>
        <button className={`tab-btn ${activeTab === "cast" ? "active" : ""}`} onClick={() => setActiveTab("cast")}>
          Cast & Crew
        </button>
        <button
          className={`tab-btn ${activeTab === "schedule" ? "active" : ""}`}
          onClick={() => setActiveTab("schedule")}
        >
          Schedule
        </button>
        <button className={`tab-btn ${activeTab === "budget" ? "active" : ""}`} onClick={() => setActiveTab("budget")}>
          Budget
        </button>
        <button className={`tab-btn ${activeTab === "files" ? "active" : ""}`} onClick={() => setActiveTab("files")}>
          Files
        </button>
      </div>

      <div className="tab-content">
        {activeTab === "overview" && (
          <div className="overview-tab">
            <div className="card">
              <h2>Project Details</h2>
              <div className="details-grid">
                <div className="detail-item">
                  <h4>Director</h4>
                  <p>{project.director}</p>
                </div>
                <div className="detail-item">
                  <h4>Producer</h4>
                  <p>{project.producer}</p>
                </div>
                <div className="detail-item">
                  <h4>Start Date</h4>
                  <p>{project.startDate}</p>
                </div>
                <div className="detail-item">
                  <h4>End Date</h4>
                  <p>{project.endDate}</p>
                </div>
                <div className="detail-item">
                  <h4>Budget</h4>
                  <p>{project.budget}</p>
                </div>
              </div>
            </div>

            <div className="card">
              <h2>Description</h2>
              <p>{project.description}</p>
            </div>

            <div className="card">
              <h2>Locations</h2>
              <ul className="locations-list">
                {project.locations.map((location, index) => (
                  <li key={index}>{location}</li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {activeTab === "cast" && (
          <div className="cast-tab">
            <div className="card">
              <h2>Cast</h2>
              <div className="people-grid">
                {project.cast.map((person) => (
                  <div key={person.id} className="person-card">
                    <div className="person-avatar">
                      <img src={person.photo || "/placeholder.svg"} alt={person.name} />
                    </div>
                    <div className="person-info">
                      <h3>{person.name}</h3>
                      <p className="person-role">{person.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card">
              <h2>Crew</h2>
              <div className="people-grid">
                {project.crew.map((person) => (
                  <div key={person.id} className="person-card">
                    <div className="person-avatar">
                      <img src={person.photo || "/placeholder.svg"} alt={person.name} />
                    </div>
                    <div className="person-info">
                      <h3>{person.name}</h3>
                      <p className="person-role">{person.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "schedule" && (
          <div className="schedule-tab">
            <div className="card">
              <h2>Shooting Schedule</h2>
              <table className="schedule-table">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Location</th>
                    <th>Scenes</th>
                    <th>Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {project.schedule.map((item) => (
                    <tr key={item.id}>
                      <td>{item.date}</td>
                      <td>{item.location}</td>
                      <td>{item.scenes.join(", ")}</td>
                      <td>{item.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === "budget" && (
          <div className="budget-tab">
            <div className="card">
              <h2>Budget Overview</h2>
              <p>Budget details would be displayed here.</p>
            </div>
          </div>
        )}

        {activeTab === "files" && (
          <div className="files-tab">
            <div className="card">
              <h2>Project Files</h2>
              <p>File management interface would be displayed here.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProjectDetails

