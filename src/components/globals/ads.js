import React from "react"
import { Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles(theme => ({
  containerFluid: {
    backgroundColor: "#F5F5F5",
    color: "#eaeceb",
    borderTop: "2px solid #eaeceb",
    paddingTop: "2em",
    paddingBottom: "2em",
    zIndex: -1,
    textAlign: "center",
    alignContent: "center",
  },
}))
const AdsColumn = () => {
  const classes = useStyles()

  return (
    <Grid item xs={12} sm={1} className={classes.containerFluid}>
      Ads
    </Grid>
  )
}
export default AdsColumn
