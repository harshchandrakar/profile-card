import React from "react";
import classes from "./ImageUpload.module.css";
function ImageUpload({ onChange, src }) {
  return (
    <div>
      <label htmlFor="photo-upload">
        <div className={`${classes.imgwrap} ${classes.imgupload}`}>
          <img alt="profile upload" for="photo-upload" src={src} />
        </div>
        <input id="photo-upload" type="file" onChange={onChange} />
      </label>
    </div>
  );
}

export default ImageUpload;
