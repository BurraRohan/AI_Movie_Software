"use client"

import { useState } from "react"
import "./Settings.css"

function Settings() {
  const [generalSettings, setGeneralSettings] = useState({
    companyName: "Acme Productions",
    email: "info@acmeproductions.com",
    phone: "(555) 123-4567",
    address: "123 Main St, Los Angeles, CA 90001",
    timezone: "America/Los_Angeles",
  })

  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    pushNotifications: true,
    dailyDigest: false,
    upcomingDeadlines: true,
    teamUpdates: true,
  })

  const handleGeneralChange = (e) => {
    const { name, value } = e.target
    setGeneralSettings((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleNotificationChange = (e) => {
    const { name, checked } = e.target
    setNotificationSettings((prev) => ({
      ...prev,
      [name]: checked,
    }))
  }

  const handleGeneralSubmit = (e) => {
    e.preventDefault()
    // In a real app, this would save to an API
    alert("General settings saved!")
  }

  const handleNotificationSubmit = (e) => {
    e.preventDefault()
    // In a real app, this would save to an API
    alert("Notification settings saved!")
  }

  return (
    <div className="settings-page">
      <h1 className="page-title">Settings</h1>

      <div className="settings-container">
        <div className="settings-sidebar">
          <ul className="settings-nav">
            <li className="active">General</li>
            <li>Notifications</li>
            <li>Account</li>
            <li>Team Members</li>
            <li>Billing</li>
            <li>Integrations</li>
          </ul>
        </div>

        <div className="settings-content">
          <section className="settings-section">
            <h2>General Settings</h2>
            <form onSubmit={handleGeneralSubmit}>
              <div className="form-group">
                <label htmlFor="companyName">Company Name</label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  className="form-control"
                  value={generalSettings.companyName}
                  onChange={handleGeneralChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  value={generalSettings.email}
                  onChange={handleGeneralChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="form-control"
                  value={generalSettings.phone}
                  onChange={handleGeneralChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="address">Address</label>
                <textarea
                  id="address"
                  name="address"
                  className="form-control"
                  value={generalSettings.address}
                  onChange={handleGeneralChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="timezone">Timezone</label>
                <select
                  id="timezone"
                  name="timezone"
                  className="form-control"
                  value={generalSettings.timezone}
                  onChange={handleGeneralChange}
                >
                  <option value="America/Los_Angeles">Pacific Time (PT)</option>
                  <option value="America/Denver">Mountain Time (MT)</option>
                  <option value="America/Chicago">Central Time (CT)</option>
                  <option value="America/New_York">Eastern Time (ET)</option>
                </select>
              </div>

              <button type="submit" className="btn btn-primary">
                Save Changes
              </button>
            </form>
          </section>

          <section className="settings-section">
            <h2>Notification Settings</h2>
            <form onSubmit={handleNotificationSubmit}>
              <div className="checkbox-group">
                <input
                  type="checkbox"
                  id="emailNotifications"
                  name="emailNotifications"
                  checked={notificationSettings.emailNotifications}
                  onChange={handleNotificationChange}
                />
                <label htmlFor="emailNotifications">Email Notifications</label>
              </div>

              <div className="checkbox-group">
                <input
                  type="checkbox"
                  id="pushNotifications"
                  name="pushNotifications"
                  checked={notificationSettings.pushNotifications}
                  onChange={handleNotificationChange}
                />
                <label htmlFor="pushNotifications">Push Notifications</label>
              </div>

              <div className="checkbox-group">
                <input
                  type="checkbox"
                  id="dailyDigest"
                  name="dailyDigest"
                  checked={notificationSettings.dailyDigest}
                  onChange={handleNotificationChange}
                />
                <label htmlFor="dailyDigest">Daily Digest</label>
              </div>

              <div className="checkbox-group">
                <input
                  type="checkbox"
                  id="upcomingDeadlines"
                  name="upcomingDeadlines"
                  checked={notificationSettings.upcomingDeadlines}
                  onChange={handleNotificationChange}
                />
                <label htmlFor="upcomingDeadlines">Upcoming Deadlines</label>
              </div>

              <div className="checkbox-group">
                <input
                  type="checkbox"
                  id="teamUpdates"
                  name="teamUpdates"
                  checked={notificationSettings.teamUpdates}
                  onChange={handleNotificationChange}
                />
                <label htmlFor="teamUpdates">Team Updates</label>
              </div>

              <button type="submit" className="btn btn-primary">
                Save Changes
              </button>
            </form>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Settings

