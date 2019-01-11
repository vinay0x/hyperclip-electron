const ADD = 'clipboard/add'
const REMOVE = 'clipboard/remove'
const CLEAR = 'clipboard/clear'

export const addToClipboard = (payload) => ({
  type: ADD,
  payload
})

export const removeFromClipboard = (payload) => ({
  type: REMOVE,
  payload
})

export const clearClipboard = () => ({
  type: CLEAR
})

const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.payload]
    case REMOVE:
      // TODO
      return [...state]
    case CLEAR:
      return []
    default:
      return state
  }
}
