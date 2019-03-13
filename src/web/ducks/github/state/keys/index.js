import React from 'react'

import { connect } from 'react-redux'

const keys = ({ count }) => (
  <p>public key count: {count}</p>
)

const mapStateToProps = ({ github }) => ({ count: github.keys })

const Keys = connect(
  mapStateToProps
)(keys)

export default Keys
