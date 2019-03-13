import React from 'react'

import Input from 'web/ducks/github/state/input'
import Keys from 'web/ducks/github/state/keys'

import 'web/ducks/github/stylesheets/index.scss'

const Github = () => (
  <section id="github">
    <form>
      <Input/>
    </form>
    <Keys/>
  </section>
)

export default Github
