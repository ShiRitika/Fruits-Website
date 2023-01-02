import { makeStyles } from "@material-ui/core/styles";
import Button from "@mui/material/Button";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, decreaseCart, getTotal } from "../store/index";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const useStyles = makeStyles({
  ButtonContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& button": {
      height: "2.8rem",
    },
    "& div": {
      "& div": {
        display: "flex",
        alignItems: "center",
        textAlign: "center",
        justifyContent: "center",
        padding: "1rem",
        "& div": {
          fontSize: "1.2rem",
          fontWeight: 700,
          padding: "0.3rem 1.5rem",
          borderBottom: "2px solid #dae3ed",
          "& span": {
            fontSize: "2rem",
          },
        },
      },
    },
  },
  mainButtonContainer: {
    "& button": {
      fontSize: "1.2rem",
      padding: "0rem 2rem",
    },
  },
});

type dataprops = { 
  id: number; image: string; name: string; price: number;
}[];

type productProps = {
  id: number; image: string; name: string; price: number;
}
type statetype = {
  counter: {
    cartItems:{
      findIndex(arg0: (item: { id: number; }) => boolean): unknown;
      filter(arg0: (object: { id: number; }) => boolean): unknown;
      id: number; 
      image: string; 
      name: string; 
      price: number;
      cartQuantity: number
    },
    cartTotalQuantity: number,
    cartTotalAmount: number
  }
};

type singleProductType = [{
  id: number;
  image: string;
  name: string;
  price: number;
  cartQuantity: number
}]
const CounterSection = (props: { data:dataprops }) => {
  const classes = useStyles();
  const storeData = props.data;
  const dispatch = useDispatch();
  const products = useSelector((state:statetype) => state.counter.cartItems);

  const params = useParams();
  const { id } = params;

  const filterProducts = (id: string): singleProductType => {
    const newID = parseInt(id, 10);
    const singleProduct: singleProductType = products.filter((object: { id: number; }) => object.id === newID) as singleProductType;
    return singleProduct;
  };
  const filterIndex = (id: string): number => {
    const newID = parseInt(id, 10);
    const itemIndex: number = products.findIndex((item: { id: number }) => item.id === newID) as number;
    return itemIndex;
  };
  const finalProduct = filterProducts(id!);
  const finalIndex = filterIndex(id!);
  let cartQuantityFinal: number;

  const final = uniqueCartQuantity(finalIndex, finalProduct);

function uniqueCartQuantity(finalIndex:number, finalProduct: singleProductType){
  if (finalIndex >= 0) {
    cartQuantityFinal = finalProduct[0].cartQuantity;
  } else {
    cartQuantityFinal = 0;
  }
  return cartQuantityFinal;
}

  useEffect(() => {
    dispatch(getTotal());
  }, [products, dispatch]);

  const handleAddToCart = (product:productProps ) => {
    dispatch(addToCart(product));
  };
  const handleDecreaseCart = (product:productProps ) => {
    dispatch(decreaseCart(product));
  };

  return (
    <>
      {storeData?.map((product: productProps ) => (
        <div className={classes.ButtonContainer} key={product.id}>
          <div className={classes.mainButtonContainer}>
            <div>
              <Button
                variant="contained"
                onClick={() => handleDecreaseCart(product)}>
                -
              </Button>
              <div>
                <span>{final}</span>&nbsp;in Cart
              </div>
              <Button
                variant="contained"
                onClick={() => handleAddToCart(product)}>
                +
              </Button>
            </div>
          </div>
        </div>
      ))};
    </>
  );
};

export default CounterSection;
