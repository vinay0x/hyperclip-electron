import React from 'react'
import { connect } from 'react-redux'
import { setFirstLoad } from '../reducers/settings'

const mapDispatchToProps = dispatch => ({ dispatch })
@connect(null, mapDispatchToProps)
class Slash extends React.Component {
  state = {
    countdown: 10
  }
  componentDidMount () {
    document.body.style.backgroundColor = '#141d26'
    setInterval(() => this.setState({ countdown: this.state.countdown - 1 }), 1000)
  }
  componentWillUnmount () {
    document.body.style.backgroundColor = '#fff'
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
        <button className="btn">Minimize to tray</button>
        <div className="splash_footer_text">Aut minimizing to tray in {this.state.countdown} seconds.</div>
      </div>
    )
  }
}

export default Slash
