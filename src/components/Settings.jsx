import React from 'react'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import PropTypes from 'prop-types'
import '../styles/main.css'

const mapDispatchToProps = dispatch => ({
  gotoHome () {
    dispatch(push('/'))
  }
})
@connect(null, mapDispatchToProps)
class App extends React.Component {
  static propTypes = {
    gotoHome: PropTypes.func.isRequired
  }
  state = {
    counter: 1
  }
  render () {
    const { gotoHome } = this.props
    return (
      <div>
        <p>This is the settings page!</p>
        <button
          onClick={gotoHome}
        >Go home</button>
      </div>
    )
  }
}

export default App
