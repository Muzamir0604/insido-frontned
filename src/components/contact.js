import React from "react"
import { makeStyles } from "@material-ui/styles"
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Card,
  CardContent,
  Divider,
  TextareaAutosize,
  FormGroup,
  Button,
  Typography,
} from "@material-ui/core"
import { useFormik } from "formik"
import * as Yup from "yup"
import phoneRegExp from "../utils/phoneRegExp"

const useStyles = makeStyles(theme => ({
  form: {
    paddingTop: "2em",
  },
  formGroup: {
    marginBottom: "1.5em",
  },
}))
const ContactForm = () => {
  const classes = useStyles()
  const contactFormik = useFormik({
    initialValues: {
      name: "",
      email: "",
      companyName: "",
      contactNumber: "",
      remarks: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email").required("Required"),
      companyName: Yup.string().required("Required"),
      contactNumber: Yup.string().matches(
        phoneRegExp,
        "Phone number is not valid"
      ),
      remarks: Yup.string(),
    }),
    onSubmit: values => {
      console.log(values)
    },
  })
  return (
    <React.Fragment>
      <Typography variant="h4" className={classes.form}>
        Contact Us!{" "}
      </Typography>
      <form className={classes.form} onSubmit={contactFormik.handleSubmit}>
        <Card>
          <Divider />
          <CardContent>
            <FormGroup className={classes.formGroup}>
              <InputLabel>Name</InputLabel>
              <FormControl>
                <Input
                  name="name"
                  type="text"
                  value={contactFormik.values.name}
                  onChange={contactFormik.handleChange}
                  onBlur={contactFormik.handleBlur}
                  placeholder="Please tell us your name"
                />
              </FormControl>
              {contactFormik.touched.name && contactFormik.errors.name ? (
                <FormHelperText
                  id="component-error-text"
                  style={{ color: "red" }}
                >
                  {contactFormik.errors.name}
                </FormHelperText>
              ) : null}
            </FormGroup>
            <FormGroup className={classes.formGroup}>
              <InputLabel>Email</InputLabel>
              <FormControl>
                <Input
                  name="email"
                  type="text"
                  value={contactFormik.values.email}
                  onChange={contactFormik.handleChange}
                  onBlur={contactFormik.handleBlur}
                  placeholder="Please tell us your email"
                />
              </FormControl>
              {contactFormik.touched.email && contactFormik.errors.email ? (
                <FormHelperText
                  id="component-error-text"
                  style={{ color: "red" }}
                >
                  {contactFormik.errors.email}
                </FormHelperText>
              ) : null}
            </FormGroup>
            <FormGroup className={classes.formGroup}>
              <InputLabel>Company Name</InputLabel>
              <FormControl>
                <Input
                  name="companyName"
                  type="text"
                  value={contactFormik.values.companyName}
                  onChange={contactFormik.handleChange}
                  onBlur={contactFormik.handleBlur}
                  placeholder="Tell us the name of your company"
                />
              </FormControl>
              {contactFormik.touched.companyName &&
              contactFormik.errors.companyName ? (
                <FormHelperText
                  id="component-error-text"
                  style={{ color: "red" }}
                >
                  {contactFormik.errors.companyName}
                </FormHelperText>
              ) : null}
            </FormGroup>
            <FormGroup className={classes.formGroup}>
              <InputLabel>Contact Number</InputLabel>
              <FormControl>
                <Input
                  name="contactNumber"
                  type="text"
                  value={contactFormik.values.contactNumber}
                  onChange={contactFormik.handleChange}
                  onBlur={contactFormik.handleBlur}
                  placeholder="Give us your number so we can reach you"
                />
              </FormControl>
              {contactFormik.touched.contactNumber &&
              contactFormik.errors.contactNumber ? (
                <FormHelperText
                  id="component-error-text"
                  style={{ color: "red" }}
                >
                  {contactFormik.errors.contactNumber}
                </FormHelperText>
              ) : null}
            </FormGroup>
            <FormGroup className={classes.formGroup}>
              <InputLabel>Remarks</InputLabel>
              <FormControl>
                <TextareaAutosize
                  style={{ minHeight: "150px" }}
                  name="remarks"
                  type="text"
                  value={contactFormik.values.remarks}
                  onChange={contactFormik.handleChange}
                  onBlur={contactFormik.handleBlur}
                  placeholder="Leave any remarks as you wish"
                />
              </FormControl>
              {contactFormik.touched.remarks && contactFormik.errors.remarks ? (
                <FormHelperText
                  id="component-error-text"
                  style={{ color: "red" }}
                >
                  {contactFormik.errors.remarks}
                </FormHelperText>
              ) : null}
            </FormGroup>
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </CardContent>
        </Card>
      </form>
    </React.Fragment>
  )
}

export default ContactForm
