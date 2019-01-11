import React from 'react'
import Select from 'react-select'
import { connect } from 'react-redux'
import propTypes from 'prop-types'
import '../styles/main.css'
import { clipboard } from 'electron'
import { makeWindowBig, makeWindowSmall, hideWindow } from '../helpers/ipcRendererEvents'

const ClipWindow = (props) => {
  const options = props.clipboardValues && props.clipboardValues.map(value => ({ label: value, value }))
  return (
    <Select
      options={ options }
      autoFocus
      value={null}
      onChange={ (selected) => {
        hideWindow()
        clipboard.writeText(selected.value)
      } }
      onMenuOpen={makeWindowBig}
    />
  )
}
ClipWindow.propTypes = {
  clipboardValues: propTypes.array.isRequired
}

export default connect(({ clipboard }) => ({ clipboardValues: clipboard }))(ClipWindow)
