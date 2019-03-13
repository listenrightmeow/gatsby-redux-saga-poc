import * as s from 'selectors/github'

const initial = { keys: 0 };

export default function templates(state = initial, action = null) {
  let response;

  switch (action.type) {
    case s.GITHUB_ERROR:
      console.error(s.GITHUB_ERROR, action);

      response = Object.assign({}, state, {
        keys: 0
      })
    break;
    case s.GITHUB_SUCCESS:
      console.log(s.GITHUB_SUCCESS, action);

      response = Object.assign({}, state, {
        keys: action.payload.length
      });
    break;
    default:
      response = state;
  }

  return response;
}
