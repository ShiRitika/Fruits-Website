import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Badge } from "@mui/material";
import { NavLink } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useSelector } from "react-redux";
const Logo  =  require("../assets/Logo.JPG");

const useStyles = makeStyles({
  navContainer: {
    position: "relative",
  },
  LogoContainer:{
    margin: "1rem 1rem 0 4rem",
  },
  navContent: {
    position: "relative",
    color: "black",
    display: "flex",
    "& ul": {
      marginLeft: "auto"
    }
  },
  navItem: {
    display: "inline-block",
    margin: "1rem 1rem",
    fontSize: "1.5rem",
    cursor: "pointer",
    "& a.active": {
      color: "#ef5350",
    },
  },
  navLink: {
    textDecoration: "none",
    color: "black",
  },
  rightConatiner: {
    display: "flex",
    padding: "0 2rem",
    "& span": {
      "& span": {
        backgroundColor: "#d10c2b",
        position: "absolute",
        transform: "translate(-150%, 120%)",
      },
      "& a.active": {
        "& div": {
          "& svg": {
            color: "#ef5350",
          },
        },
      },
    },
  },
  shopingIcon: {
    cursor: "pointer",
    margin: "auto",
  },
  shopingIconContainer: {
    borderRadius: "50%",
    border: "1px solid black",
    padding: "0.5rem",
    width: "2.6rem",
    height: "2.6rem",
  },
});

type stateType = {
  counter: {
    cartItems:{
      id: number; 
      image: string; 
      name: string; 
      price: number;
      cartQuantity: number
    },
    cartTotalQuantity: number,
    cartTotalAmount: number
  }
}

const NavBar = () => {
  const classes = useStyles();
  const { cartTotalQuantity } = useSelector((state: stateType) => state.counter);

  return (
    <nav className={classes.navContainer}>
      <div className={classes.navContent}>
        <div className={classes.LogoContainer}><img src={Logo} alt="" /></div>
        <ul>
          <li className={classes.navItem}>
            <NavLink className={classes.navLink} to="/">
              Home
            </NavLink>
          </li>
          <li className={classes.navItem}>
            <NavLink className={classes.navLink} to="/about">
              About
            </NavLink>
          </li>
          <li className={classes.navItem}>
            <NavLink className={classes.navLink} to="/store">
              Store
            </NavLink>
          </li>
        </ul>
        <div className={classes.rightConatiner}>
          <Badge
            className={classes.shopingIcon}
            badgeContent={ cartTotalQuantity }
            color="secondary">
            <NavLink className={classes.navLink} to="/MyCart">
              <div className={classes.shopingIconContainer}>
                <ShoppingCartIcon className={classes.shopingIcon} />
              </div>
            </NavLink>
          </Badge>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
