import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer"
import List from "@material-ui/core/List"
import Divider from "@material-ui/core/Divider"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
// import InboxIcon from "@material-ui/icons/MoveToInbox"
// import MailIcon from "@material-ui/icons/Mail"
import MenuIcon from "@material-ui/icons/Menu"
import SettingsIcon from "@material-ui/icons/settings"
import IconButton from "@material-ui/core/IconButton"
import HomeIcon from "@material-ui/icons/Home"
import SettingsRemoteIcon from "@material-ui/icons/SettingsRemote"
import { Link, animateScroll as scroll } from "react-scroll"

const useStyles = makeStyles(theme => ({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}))

export default function SwipeableTemporaryDrawer() {
  const classes = useStyles()
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  })

  const toggleDrawer = (anchor, open) => event => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return
    }

    setState({ ...state, [anchor]: open })
  }

  const list = anchor => (
    <div
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem
          button
          key={"Home"}
          onClick={() => {
            // navigate("/")
            scroll.scrollToTop()
          }}
        >
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary={"Home"} />
        </ListItem>
        <Link to="about" smooth={true} duration={1000}>
          <ListItem
            button
            key={"About Us"}
            // onClick={() => {
            //   navigate("/about")
            // }}
          >
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary={"About Us"} />
          </ListItem>
        </Link>
        <ListItem button key={"Blog"}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary={"Blog"} />
        </ListItem>
        <Divider />
        <Link to="contact" smooth={true} duration={1000}>
          <ListItem
            button
            key={"Contact Us"}
            // onClick={() => {
            //   navigate("/contact")
            // }}
          >
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary={"Contact Us"} />
          </ListItem>
        </Link>
        <ListItem button key={"Pricing"}>
          <ListItemIcon>
            <SettingsRemoteIcon />
          </ListItemIcon>
          <ListItemText primary={"Pricing"} />
        </ListItem>
        <Link to="FAQ" smooth={true} duration={1000}>
          <ListItem
            button
            key={"FAQs"}
            // onClick={() => {
            //   navigate("/faq")
            // }}
          >
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary={"FAQs"} />
          </ListItem>
        </Link>
      </List>
    </div>
  )

  return (
    <div className={classes.sectionMobile}>
      {["left"].map(anchor => (
        <React.Fragment key={anchor}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer(anchor, true)}
          >
            <MenuIcon />
          </IconButton>

          {/* <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  )
}
