import { components } from 'react-select'
import React from 'react'

const CustomOptions = (props) => {
  const { className, cx, getStyles, emotion, isDisabled, isFocused, isSelected, data } = props
  return (
    <div className={cx(
      emotion.css(getStyles('option', props)),
      {
        'option': true,
        'option--is-disabled': isDisabled,
        'option--is-focused': isFocused,
        'option--is-selected': isSelected
      },
      className
    ) } style={ { display: 'flex', flexDirection: 'row' } }>

      { data.prefix && <div style={ { background: '#ffffff30', color: '#ddd', padding: '4px', borderRadius: '4px', maxHeight: 50 } }>{ data.prefix }</div> }
      <components.Option { ...props } />
    </div>
  )
}

export default CustomOptions
