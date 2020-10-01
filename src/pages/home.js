import React from "react"
import { ComingSoon } from "../components/ComingSoon"
import { Layout } from "../components/Layout"
import { SEO } from "../components/SEO"
import { HackathonDefinition } from "../components/HackathonDefinition"

const HomePage = () => (
  <Layout>
    <SEO title="Home" />
    {/* Insert elements here! */}
    <HackathonDefinition />
  </Layout>
)

export default HomePage
