import CowinDashboard from './components/CowinDashboard'

import './App.css'

const App = () => (
  <div className="container">
    <div className="card-1">
      <span className="span-card">
        <img
          className="web-log"
          src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
          alt="website logo"
        />
        <p className="span-text">Co-Win</p>
      </span>
      <h1>CoWIN Vaccination in India</h1>
    </div>
    <CowinDashboard />
  </div>
)

export default App
