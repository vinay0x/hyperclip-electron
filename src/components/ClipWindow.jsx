import React from 'react'
import Select from 'react-select'
import { connect } from 'react-redux'
import propTypes from 'prop-types'
import '../styles/main.css'
import { clipboard } from 'electron'
import { makeWindowBig, hideWindow } from '../helpers/ipcRendererEvents'

const customStyles = {
  option: (provided, state) => {
    return {
      ...provided,
      borderBottom: 'none',
      color: state.isFocused ? 'red' : 'blue',
      padding: 8
    }
  },
  control: (provided, state) => ({
    ...provided,
    backgroundColor: '#fff',
    border: 'none',
    boxShadow: 'none',
    fontSize: 20,
    fontWeight: 300
  }),
  placeholder: (provided, state) => ({
    ...provided,
    color: '#bbb',
    fontWeight: '300',
    fontSize: 20
  }),
  input: (provided, state) => ({
    ...provided,
    color: '#333',
    fontWeight: '300',
    fontSize: 24
  }),
  menu: (provided, state) => ({
    ...provided,
    borderRadius: 'none',
    boxShadow: 'none'
  })
}

const ClipWindow = (props) => {
  const options = props.clipboardValues && props.clipboardValues.map(value => ({ label: value, value }))
  return (
    <Select
      options={ options }
      autoFocus
      styles={customStyles}
      value={ null }
      className="r-sel"
      classNamePrefix="r-sel-p"
      placeholder="Search or use arrow keys"
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
