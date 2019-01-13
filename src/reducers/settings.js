const SET_DARKMODE = 'settings/setDarkMode'
const SET_SHOW_SETTINGS = 'settings/setShowSettings'

export const setDarkMode = (payload) => ({
  type: SET_DARKMODE,
  payload
})

export const setFirstLoadFalse = (payload) => ({
  type: SET_SHOW_SETTINGS,
  payload
})

const initialState = {
  darkMode: false,
  showSettings: true
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_DARKMODE:
      return {
        ...state,
        darkMode: action.payload
      }
    case SET_SHOW_SETTINGS:
      return {
        ...state,
        showSettings: action.payload
      }
    default:
      return state
  }
}
