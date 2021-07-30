import { makeStyles } from "@material-ui/core";

export default makeStyles({
  container: {
    padding: "0 5%",
    width: "100vw",
    margin: 0,
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "45vh",
    padding: "10%",
    borderRadius: 10,
    color: "white",
  },
  infoCard: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    padding: "5px",
  },
  topInstruction: {
    width: "100%",
    justifyContent: "center",
    alignContent: "center",
    display: "flex",
  },
});
