import { makeStyles } from "@material-ui/core/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Button, Typography } from "@material-ui/core";
import HomeData from "../data/storeData.json";
import { Link } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

type StoreItemProps = {
    id: number;
    name: string;
    price: number;
    image: string;
  };

const useStyles = makeStyles({
  mainConatiner: {
    marginTop: "1rem",
  },
  feacturedContent: {
    textAlign: "center",
  },
  gridContainer: {
    margin: " 0 7rem",
  },
  fruitsImage: {
    width: "100%",
    height: "100%"
  },
  fruitsImageContainer: {
    height: "210px",
    position: "relative"
  },
  redCircle: {
    backgroundColor: "#c71313",
    borderRadius: "0 0 0 100%",
    position: "absolute",
    width: "60px",
    height: "60px",
    top: 0,
    right: 0,
     "& svg": {
     top: 10,
     right: 15,
     position: "absolute",
     fill: "white",
     cursor: "pointer"
     },
  },
  TextContainer: {
    height: "210px",
    display: "contents",
    "& h2": {
        fontWeight: 700,
        color: "#403d3d",
        textAlign: "left",
        position :"absolute"
    },
    "& h1": {
      fontWeight: 700,
        color: "#403d3d",
        textAlign: "right",
    },
    "& button": {
      backgroundColor: "#086613",
      color: "white",
      fontFamily: "cursive",
      margin: "1rem",
    },
    "& button:hover": {
      backgroundColor: "#0b3410"
    },
    "& a": {
      textDecoration: "none"
    },
  },
});

const product = HomeData;

const StoreItemDataSection = ({ id, name, price, image }: StoreItemProps) => {
  const classes = useStyles();

  const getProducts = () => product.map((prd) => (
    <Grid item  xs={2} sm={4} md={3} key={prd.id}>
      <Item>
        <div className={classes.fruitsImageContainer} >
            <img src={prd.image} alt="" className={classes.fruitsImage} />
        </div>
        <div className={classes.TextContainer}>
        <Typography variant="h6" component="h2">{prd.name}</Typography>
        <Typography variant="h5" component="h1">{`$ ${prd.price}`}</Typography>
        <Link to={`/productDetails/${prd.id}`}>
          <Button variant="contained">Buy Now</Button>
        </Link>
        </div>
      </Item>
    </Grid>
  ));
  
  return (
    <div className={classes.mainConatiner}>
      <div className={classes.gridContainer}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 1, md: 1 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
                {getProducts()}
          </Grid>
        </Box>
      </div>
    </div>
  );
};

export default StoreItemDataSection;
