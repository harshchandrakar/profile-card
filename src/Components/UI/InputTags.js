import React from "react";
import classes from "./InputTags.module.css";
function InputTags({ onChange, value, tagname }) {
  return (
    <div className={classes.field}>
      <label htmlFor="Input">{tagname}:</label>
      <input
        className={classes.input}
        type="text"
        onChange={onChange}
        maxLength="25"
        value={value}
      />
    </div>
  );
}

export default InputTags;
