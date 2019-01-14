import React from 'react'
import { connect } from 'react-redux'

const mapDispatchToProps = dispatch => ({ dispatch })
@connect(null, mapDispatchToProps)
class Settings extends React.Component {
  render () {
    return (
      <div>
        <p>This is the settings page!</p>
      </div>
    )
  }
}

export default Settings
