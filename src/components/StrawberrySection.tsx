import { Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useNavigate } from "react-router";
const StrawberryImage = require("../assets/strawberry.jpg");

const useStyles = makeStyles({
  mainContainer: {
    margin: "4rem 0",
    width: "100%",
    height: "400px",
    display: "flex",
  },
  textContainer: {
    width: "40%",
    backgroundColor: "#000000",
    color: "white",
    padding: "4rem 0 2rem 7rem",
    "& h1": {
        fontFamily: "Georgia, serif",
    },
    "& h6": {
        margin: "1.5rem 0",
        color: "grey"
    },
    "& button": {
        borderRadius: "2rem",
        backgroundColor: "#000000",
        color: "white",
        border: "1px solid white"
    },
    "& button:hover": {
        color: "#000000",
        fontWeight: 700
    },
  },
  imageContainer: {
    width: "60%",
  },
  StrawberryImage: {
    width: "100%",
    height: "100%",
  },
});

const StrawberrySection = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const navigateToStore = () => {
    navigate("/store");
  }
  return (
    <div className={classes.mainContainer}>
      <div className={classes.textContainer}>
        <Typography variant="h4" component="h1">
          FRUIT BOXES DIRECT TO YOUR DOOR
        </Typography>
        <Typography variant="body1" component="h6">
          Our widest office variety of fresh fruit. Mix may contain both
          conventional and organically grown fruit to insure the maximum variety
          we can provide.
        </Typography>
        <Button variant="contained" onClick={navigateToStore}>
          Shop Now
        </Button>
      </div>
      <div className={classes.imageContainer}>
        <img src={StrawberryImage} alt="" className={classes.StrawberryImage} />
      </div>
    </div>
  );
};

export default StrawberrySection;
