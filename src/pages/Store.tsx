import { makeStyles } from "@material-ui/core/styles";
import StoreItemDataSection from "../components/StoreItemData";

const useStyles = makeStyles({
  BigContainer: {
    margin: "0",
  },
  storeContainer: {
    textAlign: "center",
    margin: "auto"
  },
});

const Store = () => {
  const classes = useStyles();
  return (
    <>
      <h1 className={classes.storeContainer}>Store</h1>
      <div className={classes.BigContainer}>
        <StoreItemDataSection id={0} name={""} price={0} image={""} />
      </div>
    </>
  );
};

export default Store;
