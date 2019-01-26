const SET_DARKMODE = 'settings/setDarkMode'
const SET_SHOW_SETTINGS = 'settings/setShowSettings'
const SET_FIRST_LOAD = 'settings/setFirstLoad'

export const setDarkMode = (payload) => ({
  type: SET_DARKMODE,
  payload
})

export const setShowSettings = (payload) => ({
  type: SET_SHOW_SETTINGS,
  payload
})

export const setFirstLoad = (payload) => ({
  type: SET_FIRST_LOAD,
  payload
})

const initialState = {
  darkMode: true,
  showSettings: true,
  firstLoad: true
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
    case SET_FIRST_LOAD:
      return {
        ...state,
        firstLoad: action.payload
      }
    default:
      return state
  }
}
