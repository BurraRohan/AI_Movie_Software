import "./PersonCard.css"

function PersonCard({ person }) {
  return (
    <div className="person-card">
      <div className="person-avatar">
        <img src={person.photo || "/placeholder-avatar.jpg"} alt={person.name} />
      </div>
      <div className="person-info">
        <h3>{person.name}</h3>
        <p className="person-role">{person.role}</p>
        <p className="person-contact">{person.email}</p>
        <p className="person-contact">{person.phone}</p>
      </div>
    </div>
  )
}

export default PersonCard

