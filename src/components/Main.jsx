import React from 'react'
import { connect } from 'react-redux'
import { clipboard } from 'electron'
import propTypes from 'prop-types'
import ClipWindow from './ClipWindow'
import { addToClipboard } from '../reducers/clipboard'

@connect(({ clipboard, router }) => ({ clipboardValues: clipboard, router }), (dispatch) => ({ dispatch }))
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
      <ClipWindow />
    )
  }
}

export default Main
