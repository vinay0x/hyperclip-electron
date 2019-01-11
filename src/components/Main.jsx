import React from 'react'
import Routes from '../routes'
import { connect } from 'react-redux'
import { clipboard, ipcRenderer } from 'electron'
import propTypes from 'prop-types'
import { addToClipboard } from '../reducers/clipboard'

@connect(({ clipboard }) => ({ clipboardValues: clipboard }), (dispatch) => ({ dispatch }))
class Main extends React.Component {
  static propTypes = {
    clipboardValues: propTypes.array.isRequired,
    dispatch: propTypes.func.isRequired
  }
  componentDidMount () {
    setInterval(() => {
      const currentClip = clipboard.readText()
      const { clipboardValues, dispatch } = this.props
      if (!!currentClip && (currentClip !== clipboardValues[0])) {
        dispatch(addToClipboard(currentClip))
      }
    }, 500)
  }
  render () {
    return (
      <Routes />
    )
  }
}

export default Main
