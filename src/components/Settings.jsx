import React from 'react'
import { connect } from 'react-redux'

const mapDispatchToProps = dispatch => ({ dispatch })
@connect(null, mapDispatchToProps)
class Settings extends React.Component {
  render () {
    return (
      <div>
        Enter the desired shortcut combo. Make sure it's something that doesn't conflict with other shortcuts
      </div>
    )
  }
}

export default Settings
