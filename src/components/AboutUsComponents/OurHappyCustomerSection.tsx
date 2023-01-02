import { Avatar, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
const DoubleQuoteIcon = require("../../assets/DoubleQuoteIcon.png");

const useStyles = makeStyles({
  mainContainer: {
    width: "100%",
  },
  horizontalLineContainer: {
    display: "flex",
    alignItems: "center",
  },
  horizontalLine: {
    flex: 1,
    backgroundColor: "#7b7585",
    height: "3px",
  },
  centerIcon: {
    margin: "0 10px",
  },
  mainSectionContainer: {
    width: "100%",
    textAlign: "center",
    margin: "1.5rem 0",
    "& h1": {
      color: "#706969",
      fontWeight: 600,
      fontFamily: "sans-serif",
    },
  },
  mainAvatarContainer: {
    width: "50%",
    margin: "3rem auto",
    display: "flex",
    "& div": {
      width: "100%",
      height: "80%",
      cursor: "pointer",
      "& div": {
        width: "100%",
        "& div": {
            height:"13rem",
        },
      },
    },
    "& div:hover":{
        transform: "scale(1.1)",
        zIndex: 2
    },
  },
  AvtarDetailsContainer: {
    display: "none",
  },
  AvtarDetailsMainContainer: {
    width: "60%",
    margin: "0 auto",
    "& h2": {
        fontFamily: "initial",
        fontWeight: 600
    },
    "& h3": {
        fontWeight: 600,
    color: "#ad2b2b",
    margin: "1rem 0 1.5rem 0",
    },
    "& h6": {
        fontSize: "0.90rem",
        fontWeight: 600,
        color: "#625a5a"
    }
}
});

const HappyCustomerData = [
  {
    id: 1,
    image:
      "https://www.rri.res.in/sites/default/files/2022-09/Abhisek%20Tamang.jpg",
      name: "John gyllle",
      description: "My favourite fruit shop!! Been shoping there almost every week and they always keep the fruit fresh.. Reasonable price plus super friendly customer service. Highly recommended!!"
  },
  {
    id: 2,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNAvfyGsidomXsk3WyIQ1_Vw3V2OAiRRlr8IXz3L6EeSInt10Gld33EboICqVtVrjHgww&usqp=CAU",
      name: "kirti Saxena",
      description: "The strawberries and blueberries are suprisingly really sweet! And the price is good too, really worth it!"
  },
  {
    id: 3,
    image: "https://www.rri.res.in/sites/default/files/2022-05/agniba.jpg",
    name: "Harsh Malhotra",
    description: "Good quality and reasonable price. Most importantly, hand picked the freshest fruits and delivered to doorstep. Thank you!"
  },
];

type dataType = {
    id: number;
    image: string;
    name: string;
    description: string
}

const OurHappyCustomerSection = () => {
  const classes = useStyles();
  const [mainData, setMainData] = useState(HappyCustomerData[1]);

  const handleClickEvent = (data:dataType) => {
    setMainData(data);
  };

  const getDataFromHappyCustomers = () =>
    HappyCustomerData.map((data) => (
      <Grid spacing={0} container key={data.id}>
        <Grid onClick={() => handleClickEvent(data)} 
        >
          <Avatar src={data.image} />
        </Grid>
        <div className={classes.AvtarDetailsContainer}>
          <Typography variant="h4" component="h2">
            {data.name}
          </Typography>
          <Typography variant="body1" component="h3">
            Our Happy Customer
          </Typography>
          <Typography variant="body2" component="h6">
          {data.description}
          </Typography>
        </div>
      </Grid>
    ));

  return (
    <div className={classes.mainContainer}>
      <div className={classes.horizontalLineContainer}>
        <div className={classes.horizontalLine} />
        <div className={classes.centerIcon}>
          <img src={DoubleQuoteIcon} alt="DoubleQuoteIcon" />
        </div>
        <div className={classes.horizontalLine} />
      </div>
      <div className={classes.mainSectionContainer}>
        <Typography variant="h5" component="h1">
          What our Client says about us
        </Typography>
        <div className={classes.mainAvatarContainer}>
          {getDataFromHappyCustomers()}
        </div>
        <div className={classes.AvtarDetailsMainContainer}>
          <Typography variant="h4" component="h2">
          {mainData.name}
          </Typography>
          <Typography variant="body1" component="h3">
            Our Happy Customer
          </Typography>
          <Typography variant="body2" component="h6">
            {mainData.description}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default OurHappyCustomerSection;
