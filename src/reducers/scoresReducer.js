export default function scoresReducer(state = {}, action) {
  switch (action.type) {
    case 'GET_SCORES':

      return action.payload
    default:
      return state
  }
}
