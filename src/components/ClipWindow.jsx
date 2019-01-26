import React from 'react'
import Select, { createFilter } from 'react-select'
import { connect } from 'react-redux'
import propTypes from 'prop-types'
import { clipboard } from 'electron'
import { hideWindow } from '../helpers/ipcRendererEvents'
import CustomOptions from './CustomOptions'
import '../styles/main.css'

const getCustomStyles = (darkMode) => {
  const backgroundColor = darkMode ? '#141d26' : '#fff'
  return ({
    option: (provided, state) => {
      return {
        ...provided,
        borderBottom: 'none',
        color: state.isFocused ? '#fff' : (darkMode ? '#ffffffaa' : '#555'),
        padding: 4,
        backgroundColor: state.isFocused ? '#007AFF' : (darkMode ? '#141d26' : '#fff'),
        fontWeight: 300,
        borderRadius: 4
      }
    },
    control: (provided, state) => ({
      ...provided,
      backgroundColor,
      border: 'none',
      boxShadow: 'none',
      fontSize: 20,
      fontWeight: 300
    }),
    placeholder: (provided, state) => ({
      ...provided,
      color: darkMode ? '#aaa' : '#bbb',
      fontWeight: '300',
      fontSize: 20
    }),
    input: (provided, state) => ({
      ...provided,
      color: darkMode ? '#fff' : '#333',
      fontWeight: '300',
      fontSize: 24
    }),
    menu: (provided, state) => ({
      ...provided,
      borderRadius: 'none',
      boxShadow: 'none',
      backgroundColor
    }),
    dropdownIndicator: (provided, state) => ({
      pointerEvents: 'none',
      display: 'none'
    }),
    indicatorSeparator: (provided, state) => ({
      pointerEvents: 'none',
      display: 'none'
    })
  })
}

class ClipWindow extends React.Component {
  propTypes = {
    clipboardValues: propTypes.array.isRequired,
    settings: propTypes.object.isRequired
  }
  componentDidMount () {
    this.props.settings.darkMode
      ? document.body.style.backgroundColor = '#141d26'
      : document.body.style.backgroundColor = '#fff'
    document.onkeydown = e => {
      if (e.keyCode == 27) hideWindow()
      if (e.metaKey && (e.keyCode > 47 && e.keyCode < 59)) {
        if (e.keyCode == 48) {
          clipboard.writeText(this.props.clipboardValues[9])
        } else {
          clipboard.writeText(this.props.clipboardValues[e.keyCode - 49])
        }
        hideWindow()
      }
    }
  }
  componentWillUnmount () {
    document.onkeydown = null
  }
  componentDidUpdate () {
    this.props.settings.darkMode
      ? document.body.style.backgroundColor = '#141d26'
      : document.body.style.backgroundColor = '#fff'
  }
  render () {
    const options = this.props.clipboardValues && this.props.clipboardValues.map(
      (value, index) => {
        const prefix = index < 10 ? ((index != 9) ? `⌘${index + 1} ` : '⌘0 ') : ''
        let label = null
        if (value.length > 75) { label = value.substring(0, 75) + '...' }
        return { label: label || value, value, prefix }
      }
    )
    return (<Select
      escapeClearsValue
      options={ options }
      filterOption={createFilter({
        ignoreAccents: false
      })}
      autoFocus
      menuIsOpen
      styles={ getCustomStyles(this.props.settings.darkMode) }
      value={ null }
      components={{ Option: CustomOptions }}
      className="r-sel"
      classNamePrefix="r-sel-p"
      placeholder="Search or use arrow keys"
      onChange={ (selected) => {
        clipboard.writeText(selected.value)
        hideWindow()
      } }
    />
    )
  }
}

export default connect(({ clipboard, settings }) => ({ clipboardValues: clipboard.slice(0, 200), settings }))(ClipWindow)
