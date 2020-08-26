import React from "react"

// import Img from "gatsby-image"
import Image from "material-ui-image"
import { makeStyles } from "@material-ui/core/styles"
import { Grid, Typography, Paper } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  teamTitle: {
    textAlign: "center",
    fontType: "Latio",
    fontStyle: "bold",
  },
  memberPic: {
    borderRadius: "25% 25%",
    // margin: "0em 1em",
    // padding: " 1em 0em",

    marginTop: "0em",
  },
  summary: {
    margin: "1.5em",
    fontType: "Latio",
    marginTop: "0em",
  },
  header: {
    fontType: "Latio",
    margin: "0em 0.8em",
  },
  cover: {
    marginTop: "3.25em",
  },
  paper: {
    backgroundColor: "rgba(255, 255, 255, .3)",
  },
}))
const Team = ({ teams }) => {
  const classes = useStyles()
  return (
    <Grid container className={classes.cover}>
      <Paper className={classes.paper}>
        <Grid item xs={12}>
          <Typography variant="h4" className={classes.teamTitle}>
            Our Team
          </Typography>
          {teams.map((member, key) => {
            return (
              <React.Fragment>
                <Typography
                  variant="h5"
                  className={classes.header}
                  style={{ textAlign: key % 2 === 0 ? "left" : "right" }}
                >
                  {member.node.shortName}
                </Typography>
                <Typography
                  variant="h5"
                  className={classes.header}
                  style={{ textAlign: key % 2 === 0 ? "left" : "right" }}
                >
                  {member.node.role}
                </Typography>
                <Grid
                  container
                  spacing={3}
                  key={key}
                  direction={key % 2 === 0 ? "row" : "row-reverse"}
                  className={classes.memberBox}
                >
                  <Grid item xs={12} sm={4}>
                    {member.node.profileImage !== null ? (
                      <Image
                        color="inherit"
                        className={classes.memberPic}
                        alt={member.node.shortName}
                        src={`${process.env.API_URL}/${member.node.profileImage}`}
                      />
                    ) : null}
                  </Grid>
                  <Grid item xs={12} sm={8}>
                    <Typography variant="body1" className={classes.summary}>
                      {member.node.summary}
                    </Typography>
                  </Grid>
                </Grid>
              </React.Fragment>
            )
          })}
        </Grid>
      </Paper>
    </Grid>
  )
}

export default Team
