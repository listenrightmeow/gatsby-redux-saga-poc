// TODO: load static + dynamic (Redux) content

import React from 'react'

import Layout from 'web/components/layout'
import SEO from 'web/components/seo'

import Github from 'web/ducks/github'
import Logo from 'web/ducks/logo'

const IndexPage = () => (
  <Layout>
    <SEO title="Drift"/>
    <Logo/>
    <Github/>
  </Layout>
)

export default IndexPage
