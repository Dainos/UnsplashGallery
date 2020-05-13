import { put, takeEvery, all, select } from 'redux-saga/effects'
import * as actions from '../actions/actions'
function* getList() {
  
  let fetchData = yield fetch('https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0');
  let jsonData = yield fetchData.json()
  yield put(actions.setList(jsonData))
  return jsonData
  
}

export function* rootSaga() {
  yield all ([getList()])
}