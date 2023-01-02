import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const Glass = require("../../assets/BlackImageGlass.jpg");
const Fruits = require("../../assets/BlackImageFruits.jpg");

const useStyles = makeStyles({
  bigContainer: {
    margin: "1rem 0",
    width: "100%",
    position: "relative",
  },
  mainContainer: {
    width: "100%",
    height: "500px",
    display: "flex",
  },
  leftFruitContainer: {
    width: "30%",
  },
  textContainer: {
    color: "white",
    width: "50%",
    position: "absolute",
    top: "1%",
    right: "27%",
    "& h1": {
      margin: "1rem  0 1rem 1rem",
    },
    "& h6": {
      margin: "0  0 1rem 1rem",
    },
  },
  rightImageContainer: {
    width: "70%",
  },
  Image: {
    width: "100%",
    height: "100%",
  },
});

const BlackThemeSection = () => {
  const classes = useStyles();
  return (
    <div className={classes.bigContainer}>
      <div className={classes.textContainer}>
        <Typography variant="h4" component="h1">
          We Grow or Sell Organic Fruits
        </Typography>
        <Typography variant="body1" component="h6">
          KNOW US-
          <p>
            The whole Fruit Wala team is characterized by a common goal Respect
            the reeds of our customers so that they can make their fire
            consumers happy. Those who value the quality and especially the
            flavor of the Spanish products. Why? Its the knowledge of the
            European market after years of buying in Usa UK from Spain France,
            italy and the Netherlands for distribution to the best wholesalers
            in UK Besoe we love Maditerranean products because we got deep
            knowledge the land and very el becouse ww.gat det end clene contact
            with it produces who love the work Undentend goes agrauture<br></br>{" "}
            bead on being experimce and respectful ovation <br></br>with e
            single purpose Export the<br></br> Best Quatry, Discover our
            <br></br>team of professionals
          </p>
        </Typography>
      </div>
      <div className={classes.mainContainer}>
        <div className={classes.leftFruitContainer}>
          <img src={Glass} alt="" className={classes.Image} />
        </div>
        <div className={classes.rightImageContainer}>
          <img src={Fruits} alt="" className={classes.Image} />
        </div>
      </div>
    </div>
  );
};

export default BlackThemeSection;
