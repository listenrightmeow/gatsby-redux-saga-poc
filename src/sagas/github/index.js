import axios from 'axios'
import { call, put, takeLatest } from 'redux-saga/effects'

import * as s from 'selectors/github'

const tld = 'https://api.github.com'
const auth = '?access_token=56fd2c101fb60c59ac4ef890d63cdd1a643ff661'

function* action(payload) {
  const request = () => axios.get(`${tld}/users/${payload.event.target.value}/keys${auth}`)

  try {
    const req = yield call(request)

    yield put({ type: s.GITHUB_SUCCESS, payload: req.data })
  } catch (error) {
    yield put({ type: s.GITHUB_ERROR, message: error.message })
  }
}

function* github() {
  yield takeLatest(s.GITHUB_TRIGGER, action)
}

export default github
