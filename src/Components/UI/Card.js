import React from "react";
import classes from "./card.module.css";
function Card({ children }) {
  return <div className={classes.card}>{children}
  <h1>HIIIII </h1></div>;
}

export default Card;
