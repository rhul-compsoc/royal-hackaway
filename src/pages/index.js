import React from "react"
import { ComingSoon } from "../components/ComingSoon"
import { Layout } from "../components/Layout"
import { SEO } from "../components/SEO"
import { HackathonDefinition } from "../components/HackathonDefinition"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ComingSoon />
  </Layout>
)

export default IndexPage
