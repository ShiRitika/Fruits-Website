import { makeStyles } from "@material-ui/core/styles";
import Button from "@mui/material/Button";
import SendIcon from "@material-ui/icons/Send";
import { useNavigate } from "react-router";
const mainImage = require("../assets/mainImage.png");
const LemonImage = require("../assets/LemonImage.png");

const useStyles = makeStyles({
  bigContainer: {
    width: "100%",
    minHeight: "500px",
  },
  greenBox: {
    background: "#396C05",
    width: "43%",
    height: "550px",
    zIndex: -1,
    position: "absolute",
    top: 0,
    right: 0,
    borderRadius: "40%/250px 0 30% 50%",
  },
  mainImage: {
    width: "100%",
    height: "100%",
  },
  mainImageContainer: {
    height: "550px",
    width: "40%",
    position: "absolute",
    right: "10.6rem",
    top: "4rem",
  },
  lemonImage: {
    width: "100%",
    height: "100%",
  },
  lemonContainer: {
    width: "30%",
    height: "300px",
    position: "absolute",
    top: "50%",
    left: "-8%",
  },
  textContainer: {
    width: "30%",
    marginLeft: "7.5rem",
    position: "absolute",
    top: "30%",
    "& h1": {
      margin: "0px",
      fontSize: "2.8rem",
      color: "#221c1c",
    },
    "& p": {
      color: "#423838",
      fontWeight: "600",
    },
    "& button": {
      marginTop: "1rem",
      fontSize: "1rem",
      fontWeight: 600,
      height: "45px",
      borderRadius: "10px",
      fontFamily: "cursive",
      letterSpacing: "1px",
    },
  },
});

const TopSection = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const navigateToStore = () => {
    navigate("/store");
  };

  return (
    <div className={classes.bigContainer}>
      <div className={classes.greenBox}></div>
      <div className={classes.mainImageContainer}>
        <img src={mainImage} alt="" className={classes.mainImage} />
      </div>
      <div className={classes.lemonContainer}>
        <img src={LemonImage} alt="lemonImage" className={classes.lemonImage} />
      </div>
      <div className={classes.textContainer}>
        <h1>Get Fresh Fruits Delivered Today</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti
          architecto sed numquam, et alias modi! Rerum perferendis magnam sit
          repellendus voluptatem.
        </p>
        <Button variant="contained" color="success" endIcon={<SendIcon />} onClick={navigateToStore}>
          Order Now
        </Button>
      </div>
    </div>
  );
};

export default TopSection;
