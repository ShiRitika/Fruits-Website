import { Avatar, Box, Paper, Typography } from "@material-ui/core";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { experimentalStyled as styled } from "@mui/material/styles";
import peopleData from "../data/peopleData.json";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

const useStyles = makeStyles({
  mainContainer: {
    "& h1": {
        textTransform: "uppercase",
        textAlign: "center",
        fontWeight: "700",
        margin: "1rem 0 2rem 0"
    },
  },
  smallContainer: {
    margin: "0 7rem"
  },

  AvtarContainer: {
    "& div": {
      "& div": {
        width: "5rem",
        height: "5rem",
        marginRight: "1rem",
      },
    },
  },
  AvtarContent: {
    display: "flex",
    width: "100%",
  },
  AvtarImage: {
    width: "50%",
    position: "relative",
    "& div": {
        width: "80px",
        height: "80px",
        position: "absolute",
        top: 0,
        right: 0,
    }
  },
  StarReview: {
    width: "50%",
    textAlign: "initial",
    "& h2": {
        color: "black",
        fontWeight: "700"
    },
    "& h3": {
        color: "grey"
    },
  },
  TextContent: {
    margin: "1.4rem",
    "& p": {
        fontSize: "0.99rem",
        fontWeight: "700"
    },
  },
});

const TestmonialsSection = () => {
  const classes = useStyles();

  const getProducts = () => peopleData.map((data) => (
    <Grid item xs={6} key={data.id}>
      <Item>
      <div className={classes.AvtarContent}>
            <div className={classes.AvtarImage}>
              <Avatar alt="Cindy Baker" src={data.image} />
            </div>
            <div className={classes.StarReview}>
            <Typography variant="h5" component="h2">{data.name}</Typography>
            <Typography variant="h6" component="h3">{data.designation}</Typography>
            </div>
        </div>
          <div className={classes.TextContent}>
            <Typography variant="body2">
            {data.description}
            </Typography>
            </div>
      </Item>
    </Grid>
  ));

  return (
    <div className={classes.mainContainer}>
      <Typography variant="h4" component="h1">
        Our Testimonials
      </Typography>
      <div className={classes.smallContainer}>
        <Box sx={{ flexGrow: 2 }}>
          <Grid
            container
            spacing={3}
          >
                {getProducts()}
          </Grid>
        </Box>
      </div>
    </div>
  );
};

export default TestmonialsSection;
