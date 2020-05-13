import { put, takeEvery, all, select } from 'redux-saga/effects'
import * as actions from '../actions/actions'

const fetch = require("node-fetch")
function* getList() {
  
  let fetchData = yield fetch('https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0');
  let jsonData = yield fetchData.json()
  yield put(actions.setList(jsonData))
  return jsonData
  
}

// function* setList() {
//   yield put
// }


// let gen = getList()
// let gen1 = gen.next()
// let gen2 = gen.next()
// let gen3 = gen.next()
// console.log(`jsonData: ${JSON.stringify(gen3[0])}`)

export function* rootSaga() {
  yield all ([getList()])
}