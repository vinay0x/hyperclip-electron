import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { push } from 'connected-react-router'
import { increment, decrement } from '../reducers/count'
import '../styles/main.css'

const mapStateToProps = (state) => ({
  count: state.count
})

const mapDispatchToProps = dispatch => ({
  increment () {
    dispatch(increment())
  },
  decrement () {
    dispatch(decrement())
  },
  gotoSettings () {
    dispatch(push('/settings'))
  }
})

@connect(mapStateToProps, mapDispatchToProps)
class App extends React.Component {
  static propTypes = {
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    gotoSettings: PropTypes.func.isRequired,
    count: PropTypes.number.isRequired
  }
  state = {
    counter: 1
  }
  render () {
    const { increment, decrement, gotoSettings, count } = this.props
    return (
      <div>
        <p>Count is { count }!</p>
        <button
          onClick={increment}
        >Increment</button>
        <button
          onClick={decrement}
        >Decrement</button>
        <button
          onClick={gotoSettings}
        >Go to Settings</button>
      </div>
    )
  }
}

export default App
