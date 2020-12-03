import React from "react"
import { Layout } from "../components/layout"

const IndexPage = ({ location }) => {
  return (
    <Layout location={location}>
      <h1>This is my home page</h1>
    </Layout>
  )
}

export default IndexPage
