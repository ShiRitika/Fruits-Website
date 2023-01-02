import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SpaIcon from "@material-ui/icons/Spa";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import PublicIcon from "@material-ui/icons/Public";
const AboutFruitBasketImage = require("../../assets/AboutFruitBasket.png");

const useStyles = makeStyles({
  mainContainer: {
    width: "90%",
    margin: "0 auto",
  },
  HeaderContainer: {
    textAlign: "center",
    margin: "auto",
    width: "70%",
    "& h1": {
      color: "#24560b",
      fontFamily: "'Times New Roman', Georgia,serif",
      margin: "1rem",
      fontWeight: 600,
    },
    "& h6": {
      color: "#6a5757",
      fontSize: "1.3rem",
      letterSpacing: "-0.01rem",
    },
  },
  mainImageContainerFlex: {
    display: "flex",
    width: "100%",
    margin: "1rem 0",
    height: "500px",
  },
  leftTextContainer: {
    width: "33.34%",
  },
  leftHeadContent: {
    display: "flex",
    "& svg": {
      textAlign: "center",
      fontSize: "30px",
      height: "1.4em",
      fill: "#24560b",
    },
    "& h1": {
      fontFamily: "'Times New Roman', Georgia,serif",
      fontWeight: "600",
      margin: "0 1rem",
    },
  },
  leftTextContent: {
    width: "100%",
    margin: "2rem 0",
    "& h6": {
      margin: "1rem 0",
      color: "#978787",
      fontSize: "0.98rem",
      fontWeight: "600",
    },
  },
  middleImageContainer: {
    width: "33.34%",
    position: "relative",
  },
  middleGreenContainer: {
    width: "80%",
    borderRadius: "0.2rem",
    height: "450px",
    margin: "auto",
    backgroundColor: "#a0c930",
    backgroundImage: "linear-gradient(#a0c930, white)",
  },
  textInsideGreenContainer: {
    padding: "2rem",
    fontSize: "20px",
    fontWeight: 600,
    color: "#706464",
    textAlign: "center",
    fontFamily: "system-ui",
    "& h1": {
        margin: "2rem 0",
    fontFamily: "cursive",
    transform: "rotate(-8deg)"
    },
  },
  fruitsImage: {
    width: "100%",
    height: "100%",
  },
  fruitsImageContainer: {
    width: "102%",
    position: "absolute",
    bottom: 0,
  },
  rightTextContainer: {
    textAlign: "end",
    width: "33.34%",
  },
  rightHeadContent: {
    display: "inline-flex",
    "& svg": {
      textAlign: "center",
      fontSize: "30px",
      height: "1.4em",
      fill: "#24560b",
    },
    "& h1": {
      fontFamily: "'Times New Roman', Georgia,serif",
      fontWeight: "600",
      margin: "0 1rem",
    },
  },
  rightTextContent: {
    width: "100%",
    margin: "2rem 0",
    "& h6": {
      margin: "1rem 0",
      color: "#978787",
      fontSize: "0.98rem",
      fontWeight: "600",
    },
  },
});

const BestFruitSection = () => {
  const classes = useStyles();
  return (
    <div className={classes.mainContainer}>
      <div className={classes.HeaderContainer}>
        <Typography variant="h3" component="h1">
          We Have Best Fruits
        </Typography>
        <Typography variant="h5" component="h6">
          Taste every fruit of every tree in the garden at least once. It is an
          insult to creation not to experience it fully. Temperance is
          wickedness.
        </Typography>
      </div>
      <div className={classes.mainImageContainerFlex}>
        <div className={classes.leftTextContainer}>
          <div className={classes.leftTextContent}>
            <div className={classes.leftHeadContent}>
              <SpaIcon />
              <Typography variant="h4" component="h1">
                Fresh
              </Typography>
            </div>
            <Typography variant="body1" component="h6">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores
              distinctio quibusdam quae, eaque
            </Typography>
          </div>
          <div className={classes.leftTextContent}>
            <div className={classes.leftHeadContent}>
              <LocalHospitalIcon />
              <Typography variant="h4" component="h1">
                Healthy
              </Typography>
            </div>
            <Typography variant="body1" component="h6">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores
              distinctio quibusdam quae, eaque
            </Typography>
          </div>
          <div className={classes.leftTextContent}>
            <div className={classes.leftHeadContent}>
              <PublicIcon />
              <Typography variant="h4" component="h1">
                Eco
              </Typography>
            </div>
            <Typography variant="body1" component="h6">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores
              distinctio quibusdam quae, eaque
            </Typography>
          </div>
        </div>
        <div className={classes.middleImageContainer}>
          <div className={classes.fruitsImageContainer}>
            <img
              src={AboutFruitBasketImage}
              alt=""
              className={classes.fruitsImage}
            />
          </div>
          <div className={classes.middleGreenContainer}>
            <div className={classes.textInsideGreenContainer}>
              Personal Recommandation of General Medical Association
              <Typography variant="h4" component="h1">
                M.George_
              </Typography>
            </div>
          </div>
        </div>
        <div className={classes.rightTextContainer}>
          <div className={classes.rightTextContent}>
            <div className={classes.rightHeadContent}>
              <Typography variant="h4" component="h1">
                Tasty
              </Typography>
              <ThumbUpAltIcon />
            </div>
            <Typography variant="body1" component="h6">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores
              distinctio quibusdam quae, eaque
            </Typography>
          </div>
          <div className={classes.rightTextContent}>
            <div className={classes.rightHeadContent}>
              <Typography variant="h4" component="h1">
                Yammy
              </Typography>
              <FavoriteIcon />
            </div>
            <Typography variant="body1" component="h6">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores
              distinctio quibusdam quae, eaque
            </Typography>
          </div>
          <div className={classes.rightTextContent}>
            <div className={classes.rightHeadContent}>
              <Typography variant="h4" component="h1">
                Premium
              </Typography>
              <CardGiftcardIcon />
            </div>
            <Typography variant="body1" component="h6">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores
              distinctio quibusdam quae, eaque
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestFruitSection;
