import { initialState } from '../store/Store'
import * as actions from '../actions/actions'

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.SET_LIST:
      return {...state, list: action.payload }
    default: 
      return state
  }
}
