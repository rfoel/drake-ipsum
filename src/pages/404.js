import React from "react"
import styled from "styled-components"

import SEO from "../components/SEO"
import NotFound from "../images/not-found.svg"

const Container = styled.div`
  max-width: 304px;
  margin: 48px auto;
`

const NotFoundPage = () => (
  <>
    <SEO title="404" />
    <Container>
      <NotFound />
    </Container>
  </>
)

export default NotFoundPage
