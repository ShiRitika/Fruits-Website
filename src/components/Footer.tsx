import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@mui/material/Typography";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PublicIcon from "@material-ui/icons/Public";
import EmailIcon from "@material-ui/icons/Email";
import LocalPhoneIcon from "@material-ui/icons/LocalPhone";
import FavoriteIcon from "@material-ui/icons/Favorite";
const FooterImage = require("../assets/footerImage.jpg");

const useStyle = makeStyles({
  bigContainer: {
    width: "100%",
    marginTop: "1rem"
  },
  blueContainer: {
    backgroundImage: `url(${FooterImage})`,
    display: "flex",
    minHeight: "250px",
    width: "100%",
    color: "white",
    padding: "4rem 6rem 4rem 6rem",
  },
  blueContent: {
    width: "33.3%",
    boxSizing: "border-box",
    padding: "1rem",
    "& h6": {
      fontWeight: "700",
      fontSize: "x-large",
      fontFamily: "ui-monospace",
    },
  },
  furnContainer: {
    border: "1px solid #fff",
    width: "100%",
    height: "100%",
    position: "relative",
  },
  secondContainer: {
    top: "5px",
    right: "5px",
    position: "absolute",
    outline: "2px solid white",
    width: "98%",
    height: "95%",
    color: "white",
    padding: "2rem",
    letterSpacing: "4px",
    fontWeight: "bold",
  },
  linkContent: {
    width: "34.3%",
    display: "flex",
    boxSizing: "border-box",
    padding: "1rem",
    "& h6": {
      fontWeight: "700",
      fontSize: "x-large",
      fontFamily: "ui-monospace",
    },
  },
  followMeContent: {
    width: "50%",
  },
  QuickLinkContent: {
    width: "50%",
  },
  text: {
    paddingBottom: "2rem",
  },
  Headtext: {
    paddingBottom: "1rem",
    fontSize: "5px",
  },
  Icon: {
    marginTop: "1rem",
    marginBottom: "2.5rem",
    margin: "3rem 0.5rem 0rem 0.5rem",
    cursor: "pointer",
  },
  linkItem: {
    paddingBottom: "0.6rem",
    cursor: "pointer",
    display: "block",
    "& a": {
      "& svg": {
        fontSize: "1rem",
        color: "#4c9912",
      },
    },
  },
  link: {
    textDecoration: "none",
    color: "white",
  },
  copyrightSection: {
    backgroundColor: "#131313",
    width: "100%",
    color: "white",
    textAlign: "center",
    padding: "1.5rem",
  },
  heart: {
    color: "#a91f1f",
    paddingTop: "13px",
  },
});

function Footer() {
  const classes = useStyle();
  return (
    <div className={classes.bigContainer}>
      <div className={classes.blueContainer}>
        <div className={classes.blueContent}>
          <div className={classes.furnContainer}>
          <div className={classes.secondContainer}>
            <Typography variant="body2" className={classes.text}>
              Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
              nibh, ut fermentum massa justo sit amet risus. Curabitur blandit
              tempusporttitor nullam quis.
            </Typography>
            </div>
          </div>
        </div>
        <div className={classes.linkContent}>
          <div className={classes.followMeContent}>
            <Typography variant="subtitle1" className={classes.Headtext}>
              Follow Me
            </Typography>
            <li className={classes.linkItem}>
              <a className={classes.link} href="/*">
                <KeyboardArrowRightIcon />
                Facebook
              </a>
            </li>
            <li className={classes.linkItem}>
              <a className={classes.link} href="/*">
                <KeyboardArrowRightIcon />
                Twitter
              </a>
            </li>
            <li className={classes.linkItem}>
              <a className={classes.link} href="/*">
                <KeyboardArrowRightIcon />
                Instagram
              </a>
            </li>
            <li className={classes.linkItem}>
              <a className={classes.link} href="/*">
                <KeyboardArrowRightIcon />
                Pinterest
              </a>
            </li>
            <li className={classes.linkItem}>
              <a className={classes.link} href="/*">
                <KeyboardArrowRightIcon /> Linkedln
              </a>
            </li>
          </div>
          <div className={classes.QuickLinkContent}>
            <Typography variant="subtitle1" className={classes.Headtext}>
              Quick Links
            </Typography>
            <li className={classes.linkItem}>
              <a className={classes.link} href="/*">
                <KeyboardArrowRightIcon /> About Us
              </a>
            </li>
            <li className={classes.linkItem}>
              <a className={classes.link} href="/*">
                <KeyboardArrowRightIcon /> Portfolio
              </a>
            </li>
            <li className={classes.linkItem}>
              <a className={classes.link} href="/*">
                <KeyboardArrowRightIcon /> Terms Of Service
              </a>
            </li>
            <li className={classes.linkItem}>
              <a className={classes.link} href="/*">
                <KeyboardArrowRightIcon /> Privacy Policy
              </a>
            </li>
            <li className={classes.linkItem}>
              <a className={classes.link} href="/*">
                <KeyboardArrowRightIcon /> Contact Us
              </a>
            </li>
          </div>
        </div>
        <div className={classes.blueContent}>
          <Typography variant="subtitle1" className={classes.Headtext}>
            Contact Our Farm
          </Typography>
          <li className={classes.linkItem}>
            <a className={classes.link} href="/*">
              <LocationOnIcon /> PO Box 16122 Collins Street West
            </a>
          </li>
          <li className={classes.linkItem}>
            <a className={classes.link} href="/*">
              <PublicIcon /> www.online-fruits.com
            </a>
          </li>
          <li className={classes.linkItem}>
            <a className={classes.link} href="/*">
              <EmailIcon /> ndhfit@gmail.com
            </a>
          </li>
          <li className={classes.linkItem}>
            <a className={classes.link} href="/*">
              <LocalPhoneIcon /> +(1100) 1989 1994 0901
            </a>
          </li>
        </div>
      </div>
      <div className={classes.copyrightSection}>
        <Typography variant="body2">
          Copyright &copy; 2022 All rights reserved | This template is made with{" "}
          <FavoriteIcon className={classes.heart} />
          by Ritika
        </Typography>
      </div>
    </div>
  );
}

export default Footer;
