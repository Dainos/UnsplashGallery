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


// const fetch = require("node-fetch")

// let url

// fetch('https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0')
//   .then(response => response.json())
//   .then(unsplash => {
//     url = unsplash[0].urls.small
//   })
// console.log(`URL: ${url}`)
