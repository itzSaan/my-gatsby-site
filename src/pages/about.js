import React from 'react'
import Layout from '../components/layout'

const AboutPage = () => {
  return (
    <Layout pageTitle="About Page">      
      <p>Hi there, I'm the proud creater of this site, which is built with Gatsby.</p>
    </Layout>
  )
}

export const Head = () => <title>About Page</title>

export default AboutPage