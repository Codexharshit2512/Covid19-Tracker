import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = () => ({
  height: "300px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const colorLoader = makeStyles(() => ({
  colorPrimary: {
    color: "red",
  },
}));
export default function RightLoader() {
  const classes = colorLoader();

  return (
    <div className="right_loader_container" style={useStyles()}>
      <CircularProgress
        classes={{ colorPrimary: classes.colorPrimary }}
        size={50}
      />
    </div>
  );
}
