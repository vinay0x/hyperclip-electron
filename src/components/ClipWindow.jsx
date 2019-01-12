import React from 'react'
import Select from 'react-select'
import { connect } from 'react-redux'
import propTypes from 'prop-types'
import '../styles/main.css'
import { clipboard } from 'electron'
import { hideWindow } from '../helpers/ipcRendererEvents'
import Animated from 'react-select/lib/animated'

const customStyles = {
  option: (provided, state) => {
    return {
      ...provided,
      borderBottom: 'none',
      color: state.isFocused ? '#f7f7f7' : '#666',
      padding: 8,
      backgroundColor: state.isFocused ? '#252b4a' : '#fff',
      borderRadius: 4,
      fontWeight: 300
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
  }),
  dropdownIndicator: (provided, state) => ({
    pointerEvents: 'none',
    display: 'none'
  }),
  indicatorSeparator: (provided, state) => ({
    pointerEvents: 'none',
    display: 'none'
  })
}

class ClipWindow extends React.Component {
  propTypes = {
    clipboardValues: propTypes.array.isRequired
  }
  componentDidMount () {
    document.onkeydown = e => {
      if (e.keyCode == 27) hideWindow()
      if (e.metaKey && (e.keyCode > 47 && e.keyCode < 59)) {
        if (e.keyCode == 48) {
          clipboard.writeText(this.props.clipboardValues[9])
        } else {
          clipboard.writeText(this.props.clipboardValues[e.keyCode - 49])
        }
      }
    }
  }
  componentWillUnmount () {
    document.onkeydown = null
  }
  render () {
    const options = this.props.clipboardValues && this.props.clipboardValues.map(
      (value, index) => {
        const prefix = index < 10 ? ((index != 9) ? `⌘${index + 1} ` : '⌘0 ') : ''
        return { label: `${prefix}${value}`, value }
      }
    )

    return (<Select
      options={ options }
      autoFocus
      menuIsOpen
      components={Animated()}
      styles={ customStyles }
      value={ null }
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

export default connect(({ clipboard }) => ({ clipboardValues: clipboard }))(ClipWindow)
