import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { makeStyles } from "@material-ui/styles"
import { Grid } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  grid: {
    paddingTop: "2em",
  },
}))

const NotFoundPage = () => {
  const classes = useStyles()
  return (
    <Layout>
      <SEO title="404: Not found" />
      <Grid className={classes.grid}>
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </Grid>
    </Layout>
  )
}

export default NotFoundPage
