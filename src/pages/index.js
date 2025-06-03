import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following Gatsby Tutorial.</p>
      <StaticImage
        alt='Corn Fields Under White Clouds With Blue Sky during Daytime'
        // width="500"
        src="../images/field-corn.jpeg"
      />
    </Layout>
  )
}

export const Head = () => <title> Home Page </title>

export default IndexPage