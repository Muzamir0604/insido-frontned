import React from "react"

import ReactMarkdown from "react-markdown"

// import Img from "gatsby-image"
import { makeStyles } from "@material-ui/core/styles"
import { Grid, Typography, Paper, Box } from "@material-ui/core"

//  Markdown support https://www.youtube.com/watch?v=LIrK5KxsUSE&feature=youtu.be&t=351
// https://stackoverflow.com/questions/51060771/react-markdown-images-not-rendering-in-browser

const useStyles = makeStyles(theme => ({
  markdown: {
    margin: "0.5em",
    marginTop: "0em",
    paddingTop: "0em",
    fontType: "Latio",
    fontStyle: "bold",
    fontSize: "24px",
    padding: "0.5em 0em",
    textAlign: "center",
    lineHeight: "1.5em",
  },
  cover: {
    // position: "static",
    marginTop: "3.25em",
  },
  vision: {
    fontType: "Latio",
    fontStyle: "bold",
    textAlign: "center",
    padding: "0em 0.5em",
    margin: "1.5em 0em",
    text: {
      paddingBottom: "0em",
    },
  },
  mission: {
    fontType: "Latio",
    fontStyle: "bold",
    textAlign: "center",
    padding: "0em 0.5em",
    margin: "1.5em 0em",
    text: {
      paddingBottom: "0em",
    },
  },
  memberBox: {
    marginBottom: "0.5em",
    padding: "1em 3em",
  },

  about: {
    fontType: "Latio",
    fontStyle: "bold",
    textAlign: "center",
    // marginBottom: "0em",
    paddingTop: "0em",
    margin: "0em",
  },
  paper: {
    backgroundColor: "rgba(255, 255, 255, .75)",
  },
}))

const About = ({ about }) => {
  const classes = useStyles()
  return (
    <React.Fragment>
      <Paper className={classes.paper}>
        <Grid container className={classes.cover}>
          <Grid item xs={12} sm={6}>
            <Box className={classes.vision}>
              <Typography variant="h4">Our Vision</Typography>
              <Typography variant="h5" className={classes.vision.text}>
                {about.vision}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box className={classes.mission}>
              <Typography variant="h4">Our Mission</Typography>
              <Typography variant="h5" className={classes.mission.text}>
                {about.mission}
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12}>
            <Box>
              <Typography variant={"h4"} nowrap className={classes.about}>
                About Us
              </Typography>
              <ReactMarkdown
                id={"about"}
                className={classes.markdown}
                source={about.content}
                transformImageUri={uri =>
                  uri.startsWith("http")
                    ? uri
                    : `${process.env.REACT_IMAGE_BASE_URL}${uri}`
                }
                escapeHtml={false}
              />
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </React.Fragment>
  )
}

export default About
