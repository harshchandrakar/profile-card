import React from "react";
import Card from "./UI/Card";
import classes from "./Profile.module.css";
import Logout from "./Authentication/Logout";

function Profile({ onSubmit, src, name, Dob, religion, height }) {
  return (
    <Card>
      <form onSubmit={onSubmit}>
        <br></br>
        <h1>Profile Card</h1>
        <br></br>
        <label className="custom-file-upload fas">
          <div className={classes.imgwrap}>
            <img alt="profile" for="photo-upload" src={src} />
          </div>
        </label>
        <label>
          <br></br>
          <div className={classes.detail}>Name: {name}</div>
          <br></br>
          <div className={classes.detail}>Dob: {Dob}</div>
          <br></br>
          <div className={classes.detail}>Religion: {religion}</div>
          <br></br>
          <div className={classes.detail}>Height: {height}'</div>
        </label>
        <br></br>
        <button type="submit" className={classes.edit}>
          Edit Profile{" "}
        </button>
        <br></br>
        <Logout />
      </form>
    </Card>
  );
}

export default Profile;
