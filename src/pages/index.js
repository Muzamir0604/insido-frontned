import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Typography, Grid, Button } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { graphql } from "gatsby"
import ServiceCard from "../components/serviceCard"
import About from "../components/about"
import Contact from "../components/contact"
import FAQ from "../components/faq"
import Team from "../components/team"
import { Link, Element } from "react-scroll"

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: "1.25em",
    textAlign: "center",
  },
  gridItem: {
    marginBottom: "1.25em",
  },
  quote: {
    fontFamily: "Helvetica",
    fontStyle: "italic",
  },
  title: {
    fontFamily: "Latio",
    fontStyle: "bold",
  },
  intro: {
    fontFamily: "Latio",
  },
  button: {
    margin: "0.5em",
  },
}))

export const homeQuery = graphql`
  {
    Django {
      allHome {
        edges {
          node {
            title
            description
            summary
            quotes
            cover
            createdAt
            serviceCategories {
              edges {
                node {
                  title
                  services {
                    edges {
                      node {
                        id
                        title
                        description
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      allTeam {
        edges {
          node {
            shortName
            longName
            summary
            role
            profileImage
          }
        }
      }
      allAbout {
        edges {
          node {
            id
            title
            slug
            content
            mission
            vision
            cover
          }
        }
      }
      faq: allFaqcategories {
        edges {
          node {
            id
            title
            faqs {
              edges {
                node {
                  id
                  question
                  answer
                }
              }
            }
          }
        }
      }
    }
  }
`

const IndexPage = ({ data }) => {
  const homeData = data.Django.allHome.edges[0].node
  const faqData = data.Django.faq.edges
  const aboutData = data.Django.allAbout.edges[0].node
  const teamData = data.Django.allTeam.edges
  const classes = useStyles()
  return (
    <Layout background={homeData.cover}>
      <SEO title={homeData.title} />
      <Grid container className={classes.container}>
        <Grid item xs={12} className={classes.gridItem}>
          <Typography variant="h2" className={classes.title}>
            {homeData.title}
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.gridItem}>
          <Typography variant="h4" className={classes.intro}>
            {homeData.description}
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.gridItem}>
          <Typography variant="h6" className={classes.quote}>
            {homeData.quotes}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
          >
            <Link
              activeClass="active"
              to="contact"
              smooth={true}
              duration={1000}
            >
              Contact Us
            </Link>
          </Button>
        </Grid>
        <Grid item xs={12} className={classes.gridItem}>
          <ServiceCard servicesCat={homeData.serviceCategories.edges} />
        </Grid>
      </Grid>
      <Element id="about">
        <About about={aboutData} />
      </Element>
      <Element id="team">
        <Team teams={teamData} />
      </Element>
      <Element id="contact">
        <Contact />
      </Element>
      <Element id="FAQ">
        <FAQ data={faqData} />
      </Element>
    </Layout>
  )
}

export default IndexPage
