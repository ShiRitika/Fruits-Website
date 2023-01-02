import { styled } from "@mui/material/styles";
import { useParams } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import CounterSection from "./CounterSection";
import StoreItems from "../data/storeData.json";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const data = StoreItems;

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

const useStyles = makeStyles({
  mainContainer: {
    display: "flex",
    width: "90%",
    margin: "0 5%"
  },
  navigateButtonContainer: {
    width: "33.3%",
    margin: "1rem",
    fontWeight: "bold",
    fontSize: "1.2rem",
    color: "grey"
  },
  backButtonContainer: {
    width: "33.3%",
    fontWeight: "bold",
    fontSize: "1.2rem",
    textAlign: "right",
    margin: "1rem",
    "& a": {
      textDecoration:"none",
      color:"black",
      "& svg": {
        fontSize: "1.1rem"
      },
    },
  },
  imageContainer: {
    height: "200px"
  },
  mainImageContainer: {
    width: "33.3%",
    margin: "1rem"
  },
  textContainer: {
    width: "100%",
    padding: "2rem 2rem 0 2rem",
    display: "flex",
    "& div": {
      width: "50%",
      color: "#346c34",
    },
  },
  leftContent: {
    textAlign: "right",
  },
});

function ProductDetails() {
  const classes = useStyles();
  const params = useParams();
  const { id } = params;

  const filterProducts = (id: string) => {
    const newID = parseInt(id, 10);
    const singleProduct = data.filter((object) => object.id === newID);
    return singleProduct;
  };
  const finalProduct = filterProducts(id!);

  const getProducts = () =>
    finalProduct.map((prd) => (
      <div className={classes.mainContainer} key={prd.id}>
        <div className={classes.navigateButtonContainer}>
          <span> Store / Product Details </span>
        </div>
        <div className={classes.mainImageContainer}>
          <Grid item xs={4} className={classes.imageContainer}>
            <Img alt="complex" src={prd.image} />
          </Grid>
          <Grid item className={classes.textContainer}>
            <Typography gutterBottom variant="h5" component="div">
              {prd.name}
            </Typography>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              className={classes.leftContent}
            >
              $ {prd.price} / KG
            </Typography>
          </Grid>
        </div>
        <div className={classes.backButtonContainer}>
          <Link to={"/store"}>
            <ArrowBackIcon />
            Back
          </Link>
        </div>
      </div>
    ));

  return (
    <div>
      <Grid item>
        {getProducts()}
      </Grid>
      <CounterSection data={finalProduct} />
    </div>
  );
}

export default ProductDetails;
