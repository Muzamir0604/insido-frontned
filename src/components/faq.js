import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import {
  Typography,
  AccordionSummary,
  Accordion,
  AccordionDetails,
} from "@material-ui/core"

import ExpandMoreIcon from "@material-ui/icons/ExpandMore"

const useStyles = makeStyles(theme => ({
  gridItem: {
    marginTop: "3.25em",
    marginBottom: "1.25em",
  },

  title: {
    marginBottom: "0.5em",
  },
  faqCategory: {
    fontType: "Latio",
    fontStyle: "bold",
  },
  primaryAccord: {
    backgroundColor: "#F6EFF7",
  },
  secondaryAccord: {
    width: "100%",
  },
}))

const FaqPage = ({ data }) => {
  const classes = useStyles()
  const faqData = data
  // const [expand, setExpand] = useState(false)

  // const toggleExpand = () => setExpand(!expand)

  return (
    <React.Fragment>
      <div className={classes.gridItem} id={"id"}>
        <Typography variant="h4" className={classes.title}>
          FAQs
        </Typography>

        {faqData.map((category, key) => {
          return (
            <React.Fragment key={key}>
              <Accordion className={classes.primaryAccord}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panella-content"
                  id="panella-header"
                  className={classes.faqCategory}
                >
                  <Typography>{category.node.title}</Typography>
                </AccordionSummary>

                {category.node.faqs.edges.map((faq, key) => {
                  return (
                    <React.Fragment key={key}>
                      <AccordionDetails>
                        <Accordion className={classes.secondaryAccord}>
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panella-content"
                            id="panella-subheader"
                          >
                            <Typography>Q:{faq.node.question}</Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            A:{faq.node.answer}
                          </AccordionDetails>
                        </Accordion>
                      </AccordionDetails>
                    </React.Fragment>
                  )
                })}
              </Accordion>
            </React.Fragment>
          )
        })}
      </div>
    </React.Fragment>
  )
}
export default FaqPage
