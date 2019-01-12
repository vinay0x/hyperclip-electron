const SET_DARKMODE = 'settings/setDarkMode'

export const setDarkMode = (payload) => ({
  type: SET_DARKMODE,
  payload
})

const initialState = {
  darkMode: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_DARKMODE:
      return {
        ...state,
        darkMode: action.payload
      }
    default:
      return state
  }
}
