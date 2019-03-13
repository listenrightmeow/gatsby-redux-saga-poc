import React from 'react'

import { connect } from 'react-redux'

import * as s from 'selectors/github'

const input = ({ state, onchange }) => (
  <input
    name="username"
    type="text"
    placeholder="enter your github username"
    onChange={onchange}
  />
)

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
  onchange: (event) => dispatch({ type: s.GITHUB_TRIGGER, event: event })
})

const Input = connect(
  mapStateToProps,
  mapDispatchToProps
)(input)

export default Input
