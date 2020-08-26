import React from "react"
import { ApolloProvider } from "react-apollo"
import { CookiesProvider } from "react-cookie"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import NavBar from "./globals/navbar"
import PageFooter from "./globals/footer"
import Ads from "./globals/ads"
import { ApolloClient } from "apollo-boost"
import { createHttpLink } from "apollo-link-http"
import { InMemoryCache } from "apollo-cache-inmemory"
import { ThemeProvider } from "@material-ui/core/styles"
import { Grid } from "@material-ui/core"
import theme from "../styles/theme"
import { makeStyles } from "@material-ui/styles"

import "./layout.css"

const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: "#F5F5F5",
  },
}))

const httpLink = createHttpLink({
  uri: `${process.env.REACT_IMAGE_BASE_URL}/graphql`,
})

export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
})

const Layout = ({ children, background }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const classes = useStyles()

  return (
    <>
      <CookiesProvider>
        <ApolloProvider client={client}>
          <ThemeProvider theme={theme}>
            <NavBar siteTitle={data.site.siteMetadata.title} />

            <Grid
              container
              spacing={1}
              className={classes.container}
              style={{
                backgroundImage: `url(${process.env.API_URL}/${background})`,
              }}
            >
              <Ads />
              <Grid item xs={12} sm={10}>
                <main>{children}</main>
              </Grid>
              <Ads />
            </Grid>

            <PageFooter />
          </ThemeProvider>
        </ApolloProvider>
      </CookiesProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
