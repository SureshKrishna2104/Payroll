import React, { useState } from "react";
//import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Box from "@material-ui/core/Box";
import { borders } from "@material-ui/system";
import { FontAwesome } from "react-fontawesome";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import DomainIcon from "@material-ui/icons/Domain";
import CallIcon from "@material-ui/icons/Call";
import EmailIcon from "@material-ui/icons/Email";
import HttpsIcon from "@material-ui/icons/Https";
import LanguageIcon from "@material-ui/icons/Language";
import {
  createTheme,
  withStyles,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import { green, purple, orange } from "@material-ui/core/colors";
//import TextField from "@material-ui/core/TextField";
import {
  Card,
  CardTitle,
  CardBody,
  CardActions,
} from "@progress/kendo-react-layout";

//import { IconName } from "react-icons/fa";
//import capture from "../../public/logo192.png";
const theme = createTheme({
  palette: {
    primary: orange,
  },
});
const useStyles = makeStyles((theme) => ({
  root1: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: "60px",
    //alignItems: "center",
  },
  margin: {
    margin: theme.spacing(7),
  },
  rectangle: {
    //backgroundColor: "lightgrey",
    // width: "400px",
    // height: "620px",
    // border: "1px solid black",
    // //padding: "50px",
    // margin: "10px",
    width: "350px",
    padding: "30px",
    border: "2px solid gray",
    height: "400px",
    marginTop: "0px",
    alignContent: "center",
    justifyContent: "center",
    //margin: "40",
  },
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(9),
    backgroundColor: "#fff",
    width: "100 * 2",
    height: "100",
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "300px",
    },
    "& .MuiButtonBase-root": {
      margin: theme.spacing(2),
    },
  },
}));

const SignUpForm = () => {
  var FontAwesome = require("react-fontawesome");
  const classes = useStyles();
  // create state variables for each input
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [location, setLocation] = useState("");
  const [currentLayout, setCurrentLayout] = React.useState("k-card-list");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(companyName, email, email, password);
  };

  return (
    <div className={classes.root1}>
      <div className={classes.root1}>
        <p>
          <h1 style={{ fontSize: 25 }}>
            {"  "}
            <img
              src={process.env.PUBLIC_URL + "/images/Capture.png"}
              width="30"
              height="30"
            />
            CodingMart Payroll
          </h1>

          <p>
            CodingMart Payroll is online payroll software that helps<br></br>{" "}
            businesses in india manage their payroll operations and<br></br> pay
            employees on time.
            <br></br>
            <br></br>
            we built CodingMart Payroll so you can:<br></br>
            <br></br>* <b>Streamline</b> your payroll process end-to-end
            <br></br>
            <br></br>* <b>Define</b> clear roles for your payroll staff<br></br>
            <br></br>* <b>Create</b> salary components,allowances and more,the
            way you want<br></br>
            <br></br>* <b>Compute</b> your employees paycheck accurately every
            time<br></br>
            <br></br>* <b>Distribute</b> salaries and payslips online<br></br>
            <br></br>* <b>Automatic</b> payroll accounting with codingmart Books
            <br></br>
            <br></br>* <b>Reduce</b> payroll staff workload with collaborative
            self-service portal.<br></br>
          </p>
        </p>
      </div>

      <form className={classes.root} onSubmit={handleSubmit}>
        <div className={classes.rectangle}>
          <p>
            <span
              style={{
                fontSize: 30,
              }}
            >
              {"  "} Let's get started{" "}
            </span>
            <br></br>Explore all features with 30 day free-trail
          </p>

          <TextField
            className={classes.margin}
            id="input-with-icon-textfield"
            placeholder="Company Name"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <DomainIcon />
                </InputAdornment>
              ),
            }}
            required
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />

          <TextField
            className={classes.margin}
            id="input-with-icon-textfield"
            placeholder="Email"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon />
                </InputAdornment>
              ),
            }}
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            className={classes.margin}
            id="input-with-icon-textfield"
            placeholder="Contact Number"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <CallIcon />
                </InputAdornment>
              ),
            }}
            //type="email"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <TextField
            className={classes.margin}
            id="input-with-icon-textfield"
            placeholder="Password"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <HttpsIcon />
                </InputAdornment>
              ),
            }}
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            className={classes.margin}
            id="input-with-icon-textfield"
            placeholder="India"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LanguageIcon />
                </InputAdornment>
              ),
            }}
            required
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />

          <span style={{ alignContent: "center" }}>
            <ThemeProvider theme={theme}>
              <Button
                variant="contained"
                color="primary"
                className={classes.margin}
                alignContent="center"
              >
                SignUpNow
              </Button>
            </ThemeProvider>
          </span>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
