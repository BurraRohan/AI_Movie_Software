"use client"

import { useState } from "react"
import "./Schedule.css"

function Schedule() {
  // Mock data
  const initialEvents = [
    {
      id: 1,
      title: "Location Scouting",
      project: "The Last Chapter",
      date: "2023-05-15",
      startTime: "09:00",
      endTime: "12:00",
      location: "New York City",
      participants: ["John Smith", "Jane Doe", "Robert Wilson"],
    },
    {
      id: 2,
      title: "Script Reading",
      project: "The Last Chapter",
      date: "2023-05-16",
      startTime: "14:00",
      endTime: "17:00",
      location: "Studio A",
      participants: ["Michael Johnson", "Emily Williams", "David Brown", "John Smith"],
    },
    {
      id: 3,
      title: "Costume Fitting",
      project: "Midnight Blues",
      date: "2023-05-17",
      startTime: "10:00",
      endTime: "13:00",
      location: "Wardrobe Department",
      participants: ["Emily Williams", "Lisa Anderson"],
    },
    {
      id: 4,
      title: "Production Meeting",
      project: "City Lights",
      date: "2023-05-18",
      startTime: "09:00",
      endTime: "11:00",
      location: "Conference Room B",
      participants: ["John Smith", "Jane Doe", "Robert Wilson", "Lisa Anderson"],
    },
    {
      id: 5,
      title: "Shooting - Scene 12",
      project: "The Last Chapter",
      date: "2023-05-19",
      startTime: "08:00",
      endTime: "18:00",
      location: "New York City",
      participants: ["Michael Johnson", "Emily Williams", "John Smith", "Robert Wilson"],
    },
  ]

  const [events, setEvents] = useState(initialEvents)
  const [view, setView] = useState("week")
  const [currentProject, setCurrentProject] = useState("all")

  // Filter events based on selected project
  const filteredEvents = currentProject === "all" ? events : events.filter((event) => event.project === currentProject)

  // Get unique projects for filter dropdown
  const projects = ["all", ...new Set(events.map((event) => event.project))]

  return (
    <div className="schedule-page">
      <div className="page-header">
        <h1 className="page-title">Schedule</h1>
        <button className="btn btn-primary">+ Add Event</button>
      </div>

      <div className="schedule-controls">
        <div className="view-controls">
          <button className={`view-btn ${view === "day" ? "active" : ""}`} onClick={() => setView("day")}>
            Day
          </button>
          <button className={`view-btn ${view === "week" ? "active" : ""}`} onClick={() => setView("week")}>
            Week
          </button>
          <button className={`view-btn ${view === "month" ? "active" : ""}`} onClick={() => setView("month")}>
            Month
          </button>
        </div>

        <div className="project-filter">
          <label htmlFor="project-select">Project:</label>
          <select id="project-select" value={currentProject} onChange={(e) => setCurrentProject(e.target.value)}>
            {projects.map((project, index) => (
              <option key={index} value={project}>
                {project === "all" ? "All Projects" : project}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="calendar-container">
        {/* This would be replaced with a proper calendar component in a real app */}
        <div className="calendar-placeholder">
          <h3>Calendar View ({view})</h3>
          <p>A full calendar implementation would be displayed here.</p>
        </div>
      </div>

      <div className="upcoming-events">
        <h2>Upcoming Events</h2>
        <div className="events-list">
          {filteredEvents.map((event) => (
            <div key={event.id} className="event-card">
              <div className="event-header">
                <h3>{event.title}</h3>
                <span className="event-project">{event.project}</span>
              </div>
              <div className="event-details">
                <div className="event-detail">
                  <span className="detail-label">Date:</span>
                  <span>{event.date}</span>
                </div>
                <div className="event-detail">
                  <span className="detail-label">Time:</span>
                  <span>
                    {event.startTime} - {event.endTime}
                  </span>
                </div>
                <div className="event-detail">
                  <span className="detail-label">Location:</span>
                  <span>{event.location}</span>
                </div>
                <div className="event-detail">
                  <span className="detail-label">Participants:</span>
                  <span>{event.participants.join(", ")}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Schedule

