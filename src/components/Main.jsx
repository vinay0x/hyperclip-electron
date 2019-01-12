import React from 'react'
import { connect } from 'react-redux'
import { clipboard } from 'electron'
import propTypes from 'prop-types'
import ClipWindow from './ClipWindow'
import { addToClipboard } from '../reducers/clipboard'
import isEqual from 'lodash/isEqual'

@connect(({ clipboard, settings, router }) => ({ clipboardValues: clipboard, settings, router }), (dispatch) => ({ dispatch }))
class Main extends React.Component {
  static propTypes = {
    clipboardValues: propTypes.array.isRequired,
    dispatch: propTypes.func.isRequired
  }
  componentDidMount () {
    setInterval(() => {
      const currentClip = clipboard.readText()
      const { clipboardValues, dispatch } = this.props
      const immediateClips = [...clipboardValues.slice(0, 20)]
      const isImmediateClip = immediateClips.some(clip => isEqual(clip, currentClip))
      if (!!currentClip && !isImmediateClip) {
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
