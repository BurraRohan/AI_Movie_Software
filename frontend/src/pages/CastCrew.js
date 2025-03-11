"use client"

import { useState } from "react"
import PersonCard from "../components/PersonCard"
import "./CastCrew.css"

function CastCrew() {
  // Mock data
  const initialPeople = [
    {
      id: 1,
      name: "Michael Johnson",
      role: "Actor",
      email: "michael@example.com",
      phone: "(555) 123-4567",
      photo: "/placeholder-avatar.jpg",
    },
    {
      id: 2,
      name: "Emily Williams",
      role: "Actress",
      email: "emily@example.com",
      phone: "(555) 234-5678",
      photo: "/placeholder-avatar.jpg",
    },
    {
      id: 3,
      name: "David Brown",
      role: "Actor",
      email: "david@example.com",
      phone: "(555) 345-6789",
      photo: "/placeholder-avatar.jpg",
    },
    {
      id: 4,
      name: "John Smith",
      role: "Director",
      email: "john@example.com",
      phone: "(555) 456-7890",
      photo: "/placeholder-avatar.jpg",
    },
    {
      id: 5,
      name: "Jane Doe",
      role: "Producer",
      email: "jane@example.com",
      phone: "(555) 567-8901",
      photo: "/placeholder-avatar.jpg",
    },
    {
      id: 6,
      name: "Robert Wilson",
      role: "Cinematographer",
      email: "robert@example.com",
      phone: "(555) 678-9012",
      photo: "/placeholder-avatar.jpg",
    },
    {
      id: 7,
      name: "Lisa Anderson",
      role: "Production Designer",
      email: "lisa@example.com",
      phone: "(555) 789-0123",
      photo: "/placeholder-avatar.jpg",
    },
  ]

  const [people, setPeople] = useState(initialPeople)
  const [filter, setFilter] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")

  const filteredPeople = people.filter((person) => {
    const matchesFilter =
      filter === "all" ||
      (filter === "cast" && (person.role === "Actor" || person.role === "Actress")) ||
      (filter === "crew" && person.role !== "Actor" && person.role !== "Actress")

    const matchesSearch =
      person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      person.role.toLowerCase().includes(searchTerm.toLowerCase())

    return matchesFilter && matchesSearch
  })

  return (
    <div className="cast-crew-page">
      <div className="page-header">
        <h1 className="page-title">Cast & Crew</h1>
        <button className="btn btn-primary">+ Add Person</button>
      </div>

      <div className="search-filter-container">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search by name or role..."
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="filter-buttons">
          <button className={`filter-btn ${filter === "all" ? "active" : ""}`} onClick={() => setFilter("all")}>
            All
          </button>
          <button className={`filter-btn ${filter === "cast" ? "active" : ""}`} onClick={() => setFilter("cast")}>
            Cast
          </button>
          <button className={`filter-btn ${filter === "crew" ? "active" : ""}`} onClick={() => setFilter("crew")}>
            Crew
          </button>
        </div>
      </div>

      <div className="people-grid">
        {filteredPeople.map((person) => (
          <PersonCard key={person.id} person={person} />
        ))}
      </div>
    </div>
  )
}

export default CastCrew

