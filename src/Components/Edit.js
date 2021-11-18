import React from "react";
import classes from "./Edit.module.css";
import Card from "./UI/Card";
function Edit({ onSubmit, children }) {
  return (
    <Card>
      <form onSubmit={onSubmit}>
        <h1>Profile Card</h1>
        {children}
        <button type="submit" className={classes.save}>
          Save{" "}
        </button>
      </form>
    </Card>
  );
}

export default Edit;
