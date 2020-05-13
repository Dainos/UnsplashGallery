import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducer from '../reducers/Reducer'
import { sagas, rootSaga } from '../sagas/sagas'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const initialState = {
  list: []
}

const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducer, composeEnhancer(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(rootSaga)

export { store, initialState }