import React from "react"
import {
  Card,
  CardHeader,
  CardContent,
  Grid,
  Typography,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles(theme => ({
  card: {
    height: "100%",
    backgroundColor: "rgba(255, 255, 255, .7)",
  },
  title: {
    marginBottom: "0.25em",
  },
  serviceTitle: {
    fontStyle: "bold",
  },
  content: {
    marginTop: "0",
    paddingTop: "0em",
    paddingBottom: "0.5em",
    marginLeft: "0.5em",
    marginRight: "0.5em",
  },
}))

const ServiceCard = props => {
  const classes = useStyles()
  return (
    <React.Fragment>
      <Typography variant="h3" className={classes.title}>
        Our services
      </Typography>

      <Grid container spacing={2}>
        {props.servicesCat.map((serviceCat, key) => {
          return (
            <Grid item xs={12} sm={4} key={key}>
              <Card className={classes.card}>
                <CardHeader
                  title={
                    <Typography variant="h4" className={classes.serviceTitle}>
                      {serviceCat.node.title}
                    </Typography>
                  }
                />
                <CardContent className={classes.content}>
                  {serviceCat.node.services.edges.map(service => {
                    return (
                      <Typography variant="h6">{service.node.title}</Typography>
                    )
                  })}
                </CardContent>
              </Card>
            </Grid>
          )
        })}
      </Grid>
    </React.Fragment>
  )
}

export default ServiceCard
