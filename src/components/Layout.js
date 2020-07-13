import React from "react"
import { node } from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled, { createGlobalStyle } from "styled-components"

import Footer from "./Footer"
import Header from "./Header"

const GlobalStyle = createGlobalStyle`
  html,
  body,
  #___gatsby,
  #gatsby-focus-wrapper {
    font-family: BlinkMacSystemFont, -apple-system, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", Helvetica,
      Arial, sans-serif;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  * {
    box-sizing: border-box;
  }

  ::selection {
    color: white;
    background: black;
  }
`

const Container = styled.div`
  border: 16px solid black;
  display: flex;
  flex-direction: column;
  min-height: 100%;

  main {
    flex: 1;
  }
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Container>
      <GlobalStyle />
      <Header title={data.site.siteMetadata.title} />
      <main>{children}</main>
      <Footer />
    </Container>
  )
}

Layout.propTypes = {
  children: node.isRequired,
}

export default Layout
