import React from "react"
import styled from "styled-components"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import NotFound from "../images/not-found.svg"

const Container = styled.div`
  max-width: 304px;
  margin: 48px auto;
`

const NotFoundPage = () => (
  <Layout>
    <SEO title="404" />
    <Container>
      <NotFound />
    </Container>
  </Layout>
)

export default NotFoundPage
