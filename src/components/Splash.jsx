import React from 'react'
import { connect } from 'react-redux'
import { setFirstLoad } from '../reducers/settings'
import settings from 'electron-settings'
const mapDispatchToProps = dispatch => ({ dispatch })
@connect(null, mapDispatchToProps)
class Splash extends React.Component {
  state = {
    countdown: 10
  }
  componentDidMount () {
    settings.set('darkMode', true)
    document.body.style.backgroundColor = '#141d26'
    setInterval(() => this.setState({ countdown: this.state.countdown - 1 }), 1000)
  }
  render () {
    if (this.state.countdown < 0) {
      this.props.dispatch(setFirstLoad(false))
    }
    return (
      <div className="splash_container">
        <img className="splash_banner" src="../../assets/banner-white.png" />
        <div className="splash_subtext">Press <span className="kbd">Command</span>+<span className="kbd">Shift</span>+<span className="kbd">L</span>
        to show the clipboard.
        </div>
        <button className="btn" onClick={e => this.props.dispatch(setFirstLoad(false))}>Got it!</button>
        <div className="splash_footer_text">I will close in {this.state.countdown} seconds. You can find me in the system tray!</div>
      </div>
    )
  }
}

export default Splash
