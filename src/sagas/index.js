import { all } from 'redux-saga/effects';

import github from 'sagas/github'

export default function* root() {
  yield all([
    github()
  ])
}
