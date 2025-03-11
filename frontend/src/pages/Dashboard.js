import "./Dashboard.css"

function Dashboard() {
  // Mock data
  const stats = {
    activeProjects: 5,
    completedProjects: 12,
    upcomingShoots: 3,
    castMembers: 24,
    crewMembers: 18,
  }

  const recentActivities = [
    { id: 1, action: "Project updated", project: "The Last Chapter", user: "John Doe", time: "2 hours ago" },
    { id: 2, action: "New crew member added", project: "Midnight Blues", user: "Jane Smith", time: "5 hours ago" },
    { id: 3, action: "Schedule changed", project: "The Last Chapter", user: "Mike Johnson", time: "1 day ago" },
    { id: 4, action: "Budget updated", project: "City Lights", user: "Sarah Williams", time: "2 days ago" },
  ]

  return (
    <div className="dashboard">
      <h1 className="page-title">Dashboard</h1>

      <div className="stats-container">
        <div className="stat-card">
          <h3>Active Projects</h3>
          <p className="stat-value">{stats.activeProjects}</p>
        </div>
        <div className="stat-card">
          <h3>Completed Projects</h3>
          <p className="stat-value">{stats.completedProjects}</p>
        </div>
        <div className="stat-card">
          <h3>Upcoming Shoots</h3>
          <p className="stat-value">{stats.upcomingShoots}</p>
        </div>
        <div className="stat-card">
          <h3>Cast Members</h3>
          <p className="stat-value">{stats.castMembers}</p>
        </div>
        <div className="stat-card">
          <h3>Crew Members</h3>
          <p className="stat-value">{stats.crewMembers}</p>
        </div>
      </div>

      <div className="dashboard-row">
        <div className="card upcoming-deadlines">
          <h2>Upcoming Deadlines</h2>
          <ul className="deadline-list">
            <li>
              <div className="deadline-date">May 15</div>
              <div className="deadline-info">
                <h4>Script Review</h4>
                <p>The Last Chapter</p>
              </div>
            </li>
            <li>
              <div className="deadline-date">May 18</div>
              <div className="deadline-info">
                <h4>Location Scouting</h4>
                <p>Midnight Blues</p>
              </div>
            </li>
            <li>
              <div className="deadline-date">May 22</div>
              <div className="deadline-info">
                <h4>Casting Call</h4>
                <p>City Lights</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="card recent-activity">
          <h2>Recent Activity</h2>
          <ul className="activity-list">
            {recentActivities.map((activity) => (
              <li key={activity.id}>
                <div className="activity-info">
                  <h4>{activity.action}</h4>
                  <p>{activity.project}</p>
                </div>
                <div className="activity-meta">
                  <span className="activity-user">{activity.user}</span>
                  <span className="activity-time">{activity.time}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Dashboard

