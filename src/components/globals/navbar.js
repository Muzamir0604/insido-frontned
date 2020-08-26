import React from "react"
import PropTypes from "prop-types"
import SideMenu from "./sidemenu"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import MenuItem from "@material-ui/core/MenuItem"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Link, animateScroll as scroll } from "react-scroll"

//TODO: Add link Spy from react-scroll
const useStyles = makeStyles(theme => ({
  categoryMenuItem: {
    "&:focus": {
      backgroundColor: theme.palette.secondary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
  },
  AppBar: {
    background: theme.nav.app.background,
    marginBottom: theme.nav.app.marginBottom,
    position: theme.nav.app.position,
    width: theme.nav.app.width,
  },
  grow: {
    position: theme.nav.div.position,
    height: theme.nav.div.height,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    marginLeft: "10px",
    display: theme.nav.title.display,
    paddingBottom: theme.nav.title.paddingBottom,
    fontFamily: theme.nav.title.fontType,
    [theme.breakpoints.up("sm", "md")]: {
      display: "block",
    },
  },
  img: {
    marginRight: "10px",
    display: theme.nav.title.display,
    paddingBottom: theme.nav.title.paddingBottom,
    fontFamily: theme.nav.title.fontType,
    [theme.breakpoints.up("sm", "md")]: {
      display: "block",
    },
  },

  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}))

export default function NavHead({ siteTitle }) {
  const data = useStaticQuery(graphql`
    query {
      ImageIcon: file(relativePath: { eq: "Apple.png" }) {
        childImageSharp {
          fixed(height: 55) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const classes = useStyles()

  return (
    <div className={classes.grow}>
      <AppBar className={classes.AppBar}>
        <Toolbar>
          <MenuItem
            className={classes.title}
            onClick={() => {
              scroll.scrollToTop()
            }}
          >
            <Img
              className={classes.img}
              fixed={data.ImageIcon.childImageSharp.fixed}
              alt="imageIcon"
              imgStyle={{ padding: "0px 0px" }}
            />
          </MenuItem>

          <SideMenu />

          <Typography
            style={{ fontFamily: "Lato" }}
            variant="h4"
            noWrap
            onClick={() => {
              scroll.scrollToTop()
            }}
          >
            {siteTitle}
          </Typography>
          <MenuItem
            className={classes.title}
            onClick={() => {
              scroll.scrollToTop()
            }}
          >
            <Typography variant="h6" noWrap className={classes.title}>
              Home
            </Typography>
          </MenuItem>
          <MenuItem
            className={classes.title}
            // onClick={() => {
            //   navigate("/about")
            // }}
          >
            <Link to="about" smooth={true} duration={1000}>
              <Typography variant="h6" noWrap className={classes.title}>
                About Us
              </Typography>
            </Link>
          </MenuItem>

          <>
            <MenuItem className={classes.title}>
              <Typography
                variant="h6"
                noWrap
                className={classes.title}
                aria-controls="customized-menu"
                aria-haspopup="true"
              >
                Pricing
              </Typography>
            </MenuItem>
            <MenuItem className={classes.title}>
              <Typography
                variant="h6"
                noWrap
                className={classes.title}
                aria-controls="customized-menu"
                aria-haspopup="true"
              >
                Blog
              </Typography>
            </MenuItem>
          </>

          <MenuItem
            className={classes.title}
            // onClick={() => {
            //   navigate("/contact")
            // }}
          >
            <Link to="contact" smooth={true} duration={1000}>
              <Typography variant="h6" noWrap className={classes.title}>
                Contact Us
              </Typography>
            </Link>
          </MenuItem>
          <MenuItem className={classes.title}>
            <Link to="FAQ" smooth={true} duration={1000}>
              <Typography
                variant="h6"
                noWrap
                className={classes.title}
                aria-controls="customized-menu"
                aria-haspopup="true"
                // onClick={() => {
                //   navigate("/faq")
                // }}
              >
                FAQs
              </Typography>
            </Link>
          </MenuItem>

          <div className={classes.grow} />
        </Toolbar>
      </AppBar>
    </div>
  )
}

NavHead.propTypes = {
  siteTitle: PropTypes.string,
}
