import React from 'react'

import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'

import createSagaMiddleware from 'redux-saga'

import reducers from 'reducers'
import root from 'sagas'

export default ({ element }) => {
  const middleware = createSagaMiddleware()
  const store = createStore(reducers, applyMiddleware(middleware))

  middleware.run(root)

  return <Provider store={store}>{element}</Provider>
}
