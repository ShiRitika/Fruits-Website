import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { styled } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import { clearCart, getTotal, removeFromCart } from "../store";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "60%",
  maxHeight: "50%",
});

const useStyles = makeStyles({
  cartContainer: {
    padding: "0.5rem 4rem 2rem 4rem",
    "& h2": {
      fontWeight: 600,
      fontSize: "30px",
      textAlign: "center",
      margin: "auto",
    },
  },
  backButton: {
    textAlign: "left",
    textDecoration: "none",
    width: "50%",
    color: "black",
  },
  titles: {
    margin: "1rem 0 1rem 0",
    display: "grid",
    alignItems: "center",
    gridTemplateColumns: "3fr 1fr 1fr 1fr",
    columnGap: "0.5rem",
    "& h3": {
      fontSize: "14px",
      textTransform: "uppercase",
    },
  },
  productTitle: { paddingLeft: "0.5rem" },
  total: {
    paddingRight: "0.5rem",
    justifySelf: "right",
  },
  cartItem: {
    display: "grid",
    alignItems: "center",
    gridTemplateColumns: "3fr 1fr 1fr 1fr",
    columnGap: "0.5rem",
    borderTop: "1px solid rgb(187 187 187)",
    padding: "1rem 0",
  },
  cartProduct: {
    display: "flex",
    justifySelf: "left",
    paddingLeft: "0.5rem",
    "& img": {
      width: "140px",
      maxWidth: "100%",
    },
    "& div": {
      "& h3": {
        margin: "auto",
        textAlign: "center",
      },
      "& button": {
        border: "none",
        outline: "none",
        margin: "auto",
        cursor: "pointer",
        background: "none",
        fontSize: "small",
      },
      "& button:hover": {
        color: "grey",
        borderColor: "grey",
      },
    },
  },
  cartProductQuantity: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    width: "130px",
    maxWidth: "100%",
  },
  cartProductTotalPrice: {
    justifySelf: "right",
    paddingRight: "0.5rem",
    fontyWeight: 700,
  },
  cartSummary: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    borderTop: "1px solid rgb(187, 187, 187)",
    paddingTop: "2rem",
  },
  clearCart: {
    width: "130px",
    maxWidth: "100%",
    height: "40px",
    borderRadius: "5px",
    fontWeight: 400,
    letterSpacing: "1.15px",
    border: "0.5px solid rgb(177, 177, 177)",
    color: "grey",
    background: "none",
    outline: "none",
    cursor: "pointer",
    "&:hover":{
      color: "black",
      backgroundColor: "#bf0f0f"
    },
  },
  cartCheckout: {
    width: "270px",
    maxWidth: "100%",
  },
  subtotal: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "20px",
    fontWeight: 700,
  },
  amount: {
    fontWeight: 700,
  },
});

type stateType = {
  counter: {
    cartItems:{
      map(arg0: (cartItem: { image: string; id: React.Key; name: string; price: number; cartQuantity: number; }) => JSX.Element): React.ReactNode;
      cartItems: any;
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
type propductType = {
  image: string;
  id: React.Key;
  name: string;
  price: number;
  cartQuantity: number;
}

const MyCart = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const products = useSelector((state:stateType) => state.counter.cartItems);
  const cart = useSelector((state: stateType ) => state.counter);

  useEffect(() => {
    dispatch(getTotal());
  }, [cart, dispatch]);

  const handleRemoveFromCart = (product:propductType) => {
    dispatch(removeFromCart(product));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className={classes.cartContainer}>
      <h2>Shopping Cart</h2>
      {products.cartItems?.length === 0 ? (
        <div>
          <p>Your Cart is Currently Empty</p>
          <div>
            <Link to="/store">
              <span>Start Shopping</span>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <div className={classes.titles}>
            <h3 className={classes.productTitle}>Product</h3>
            <h3>Price</h3>
            <h3>Quantity</h3>
            <h3 className={classes.total}>Total</h3>
          </div>
          <div>
            {products.map(
              (cartItem: {
                image: string;
                id: React.Key;
                name: string;
                price: number;
                cartQuantity: number;
              }) => (
                <div className={classes.cartItem} key={cartItem.id}>
                  <div className={classes.cartProduct}>
                    <Img alt="complex" src={cartItem.image} />
                    <div>
                      <h3>{cartItem.name}</h3>
                      <Button
                        variant="outlined"
                        color="error"
                        onClick={() => handleRemoveFromCart(cartItem)}
                        startIcon={<DeleteIcon />}>
                        Remove
                      </Button>
                    </div>
                  </div>
                  <div>${cartItem.price}</div>
                  <div className={classes.cartProductQuantity}>
                    {cartItem.cartQuantity}
                  </div>
                  <div className={classes.cartProductTotalPrice}>
                    ${cartItem.price * cartItem.cartQuantity}
                  </div>
                </div>
              )
            )}
          </div>
          <div className={classes.cartSummary}>
            <button
              className={classes.clearCart}
              onClick={() => handleClearCart()}>
              Clear Cart
            </button>
            <div className={classes.cartCheckout}>
              <div className={classes.subtotal}>
                <span>SubTotal</span>
                <span className={classes.amount}>${cart.cartTotalAmount}</span>
              </div>
              <Link to={"/store"} className={classes.backButton}>
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyCart;
