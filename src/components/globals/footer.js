import React from "react"
import { makeStyles } from "@material-ui/styles"
import { Grid, Divider, Typography } from "@material-ui/core"
import { useStaticQuery, graphql } from "gatsby"
import Link from "@material-ui/core/Link"
import FacebookIcon from "@material-ui/icons/Facebook"
import InstagramIcon from "@material-ui/icons/Instagram"
import TwitterIcon from "@material-ui/icons/Twitter"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
const useStyles = makeStyles(theme => ({
  containerFluid: {
    backgroundImage: `linear-gradient(90deg,#016450,#02818A, #3690C0)`,
    color: "#eaeceb",
    paddingTop: "2em",
    paddingBottom: "1em",
    textAlign: "center",
  },
  locationContainer: {
    backgroundColor: "#b0a19b",
    color: "#eaeceb",
    textAlign: "center",
  },
  trademark: {
    borderTop: "1px solid grey",
    paddingBottom: "0em",
    marginBottom: "0em",
    paddingTop: "1em",
  },
  socialIcons: {
    color: "#F5F5F5",
    margin: "0.5em",
  },
  socialTitle: {
    marginBottom: "0.5em",
  },
  paragraph: {
    marginBottom: "0.1em",
    paddingTop: "1em",
  },
}))

const IconComponents = {
  Instagram: InstagramIcon,
  Facebook: FacebookIcon,
  LinkedIn: LinkedInIcon,
  Twitter: TwitterIcon,
}

const PageFooter = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      Django {
        allHome {
          edges {
            node {
              social {
                edges {
                  node {
                    id
                    title
                    link
                  }
                }
              }
              locations {
                edges {
                  node {
                    id
                    city
                    state
                    contact
                    email
                    operations {
                      edges {
                        node {
                          daytoday
                          fromHour
                          toHour
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  const classes = useStyles()
  const locations = data.Django.allHome.edges[0].node.locations.edges
  const socials = data.Django.allHome.edges[0].node.social.edges
  return (
    <React.Fragment>
      <footer>
        <Grid container className={`${classes.containerFluid}`}>
          <Grid item xs={12} sm={4} className="">
            <Typography variant="h6">Our Locations</Typography>
            {locations.map((location, key) => {
              return (
                <React.Fragment key={key}>
                  {console.log(location.node.state)}
                  <p className={classes.paragraph}>{location.node.state}</p>
                  <p className={classes.paragraph}>{location.node.city}</p>
                  <p className={classes.paragraph}>{location.node.contact}</p>
                  <p className={classes.paragraph}>{location.node.email}</p>
                  <p className={classes.paragraph}>{location.node.address}</p>

                  <Divider />
                </React.Fragment>
              )
            })}
          </Grid>

          <Grid item xs={12} sm={4}>
            <Typography variant="h6" className={classes.socialTitle}>
              Follow Us
            </Typography>

            {socials.map((social, key) => {
              const TagName = IconComponents[social.node.title]
              return (
                <React.Fragment key={key}>
                  <Link
                    key={key}
                    href={social.node.link}
                    className={classes.socialIcons}
                  >
                    <TagName />
                  </Link>
                </React.Fragment>
              )
            })}
          </Grid>

          <Divider />
          <Grid item xs={12} sm={4}>
            <Typography variant="h6">Resources</Typography>
            <p className={classes.paragraph}>Blog</p>
            <p className={classes.paragraph}>User Stories</p>
            <p className={classes.paragraph}>News</p>
          </Grid>

          <Grid item xs={12} className={classes.trademark}>
            <h5>&copy; insido.com</h5>
          </Grid>
        </Grid>
      </footer>
    </React.Fragment>
  )
}

export default PageFooter
