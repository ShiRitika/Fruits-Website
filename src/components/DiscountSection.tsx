import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@mui/material/Button";
const Kiwi = require("../assets/Kiwi.jpg");
const Strawberries = require("../assets/Strawberries.jpg");

const useStyles = makeStyles({
  mainContainer: {
    marginTop: "2rem",
    width: "100%",
    display: "flex",
  },
  leftImageContainer: {
    position: "relative",
    overflow: "hidden",
    margin: "1rem 0.8rem 1rem 7rem",
    width: "50%",
    height: "300px",
  },
  whiteContainer: {
    backgroundColor: "rgba(225, 225, 225, 0.8)",
    position: "absolute",
    width: "65%",
    height: "300px",
    top: 0,
    transformOrigin: "100% 0",
    transform: "skew(-25deg)",
  },
  whiteContainerText: {
    minHeight: "400px",
    margin: "2rem 3rem 1rem 0.5rem",
    width: "45%",
    zIndex: 2,
    position: "absolute",
    top: 0,
    "& h2": {
      fontSize: "40px",
      fontWeight: "500",
      color: "#cf1b3a",
      fontFamily: "cursive",
      lineHeight: 1,
    },
    "& h3": {
      fontSize: "18px",
      fontWeight: "600",
      marginTop: "0.5rem",
    },
    "& span": {
      fontSize: "12px",
      fontWeight: "600",
      marginTop: "0.5rem",
      lineHeight: 0.5,
      color: "#302b2b",
    },
    "& button": {
      marginTop: "1rem",
      inlineHeight: "0.5",
      backgroundColor: "#cf1b3a",
      display: "block",
    },
    "& button:hover": {
        backgroundColor: "#8f0c23",
      },
  },
  rightImageContainer: {
    position: "relative",
    overflow: "hidden",
    margin: "1rem 7rem 1rem 0.8rem",
    width: "50%",
    height: "300px",
  },
  whiteContainerText2: {
    minHeight: "400px",
    margin: "2rem 3rem 1rem 0.5rem",
    width: "45%",
    zIndex: 2,
    position: "absolute",
    top: 0,
    "& h2": {
      fontSize: "40px",
      fontWeight: "500",
      color: "#4c9912",
      fontFamily: "cursive",
      lineHeight: 1,
    },
    "& h3": {
      fontSize: "18px",
      fontWeight: "600",
      marginTop: "0.5rem",
    },
    "& span": {
      fontSize: "12px",
      fontWeight: "600",
      marginTop: "0.5rem",
      lineHeight: 0.5,
      color: "#302b2b",
    },
    "& button": {
      marginTop: "3.5rem",
      inlineHeight: "0.5",
      backgroundColor: "#4c9912",
      display: "block",
    },
    "& button:hover":{
        backgroundColor: "#224406"
    },
  },
  strawberriesImage: {
    width: "100%",
    height: "100%",
  },
  kiwiImage: {
    width: "100%",
    height: "100%",
  },
});

const DiscountSection = () => {
  const classes = useStyles();
  return (
    <div className={classes.mainContainer}>
      <div className={classes.leftImageContainer}>
        <img
          alt="strwaberry"
          src={Strawberries}
          className={classes.strawberriesImage}
        ></img>
        <div className={classes.whiteContainer}></div>
        <div className={classes.whiteContainerText}>
          <Typography variant="h1" component="h2">
            Strawberry Discount
          </Typography>
          <Typography variant="h5" component="h3">
            UP TO 50% OFF
          </Typography>
          <Typography variant="body1" component="span">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            expedita harum itaque quos fugit praesentium, consectetur suscipit
            nam quisquam.
          </Typography>
          <Button variant="contained">BUY Now</Button>
        </div>
      </div>
      <div className={classes.rightImageContainer}>
        <img alt="kiwi" src={Kiwi} className={classes.kiwiImage}></img>
        <div className={classes.whiteContainer}></div>
        <div className={classes.whiteContainerText2}>
          <Typography variant="h1" component="h2">
            Fresh Kiwi
          </Typography>
          <Typography variant="h5" component="h3">
            UP TO 70% OFF
          </Typography>
          <Typography variant="body1" component="span">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            expedita harum itaque quos fugit praesentium, consectetur suscipit
            nam quisquam.
          </Typography>
          <Button variant="contained">BUY Now</Button>
        </div>
      </div>
    </div>
  );
};

export default DiscountSection;
