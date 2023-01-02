import { Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { experimentalStyled as styled } from "@mui/material/styles";
import product from "../../data/AboutData.json";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const useStyles = makeStyles({
  mainContainer: {
    width: "90%",
    margin: "3rem auto",
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
  mainGridContainer: {
    width: "100%",
    margin: "1rem 0",
  },
  Image: {
    width: "100%",
    height: "100%",
  },
  imageContainer: {
    width: "100%",
    height: "200px",
  },
  nameTextContainer: {
    width: "100%",
    margin: "1rem 0",
    "& h1": {
      fontWeight: 600,
      margin: "0.5rem",
    },
    "& h6": {
      fontWeight: 600,
      margin: "0.5rem",
    },
  },
  socialIconContainer: {
    margin: "auto",
    "& svg": {
      width: "1.5em",
      cursor: "pointer"
    },
  },
});

const MeetOurTeamSection = () => {
  const classes = useStyles();

  const getProducts = () =>
    product.map((prd) => (
      <Grid item xs={3} key={prd.id}>
        <Item>
          <div className={classes.imageContainer}>
            <img src={prd.image} alt="" className={classes.Image} />
          </div>
          <div className={classes.nameTextContainer}>
            <Typography variant="h5" component="h1">
              {prd.name}
            </Typography>
            <Typography variant="body1" component="h6">
              {prd.designation}
            </Typography>
          </div>
          <div className={classes.socialIconContainer}>
            <InstagramIcon />
            <FacebookIcon />
            <YouTubeIcon />
            <TwitterIcon />
          </div>
        </Item>
      </Grid>
    ));

  return (
    <div className={classes.mainContainer}>
      <div className={classes.HeaderContainer}>
        <Typography variant="h3" component="h1">
          Meet Our Team
        </Typography>
        <Typography variant="h5" component="h6">
          We provide the highest quality service to everyone.
        </Typography>
      </div>
      <div className={classes.mainGridContainer}>
        <Grid container spacing={2}>
          {getProducts()}
        </Grid>
      </div>
    </div>
  );
};

export default MeetOurTeamSection;
