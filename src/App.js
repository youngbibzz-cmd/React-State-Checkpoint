import { Component } from 'react'
import './App.css'

class App extends Component {
  state = {
    Person: {
      fullName: 'John Doe',
      bio: 'A passionate web developer who enjoys building modern applications.',
      imgSrc:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=640&q=85',
      profession: 'Frontend Developer',
    },
    shows: false,
    elapsedSeconds: 0,
  }

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState((state) => ({ elapsedSeconds: state.elapsedSeconds + 1 }))
    }, 1000)
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId)
  }

  toggleProfile = () => {
    this.setState((state) => ({ shows: !state.shows }))
  }

  render() {
    const { Person, shows, elapsedSeconds } = this.state

    return (
      <main className="page-shell">
        <section className="profile-panel" aria-labelledby="page-title">
          <div className="panel-heading">
            <p className="eyebrow">A LITTLE INTRODUCTION</p>
            <h1 id="page-title">Profile card</h1>
            <p className="panel-description">
              Get to know the person behind the projects.
            </p>
          </div>

          {shows && (
            <div className="profile-details">
              <img className="profile-image" src={Person.imgSrc} alt={Person.fullName} />
              <h2>{Person.fullName}</h2>
              <p className="profession">{Person.profession}</p>
              <p className="bio">{Person.bio}</p>
            </div>
          )}

          <button
            className="toggle-button"
            type="button"
            onClick={this.toggleProfile}
            aria-expanded={shows}
          >
            {shows ? 'Hide Profile' : 'Show Profile'}
          </button>

          <p className="timer" aria-live="polite">
            <span className="timer-dot" aria-hidden="true" />
            Time since component mounted: {elapsedSeconds} seconds
          </p>
        </section>
        <p className="page-note">Built with curiosity and a little code.</p>
      </main>
    )
  }
}

export default App