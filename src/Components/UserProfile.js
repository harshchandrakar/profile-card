import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import Edit from "./Edit";
import ImgUpload from "./ImageUpload";
import Profile from "./Profile";
import InputTags from "./UI/InputTags";
import { userAction } from "../Store/Slices/user-slice";

function UserProfile({ onChange, src }) {
  const userdata = useSelector((state) => state.userDetail);
  const dispatch = useDispatch();
  const photoUpload = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      dispatch(
        userAction.setProfile({
          file: e.target.files[0],
          imageUrl: URL.createObjectURL(e.target.files[0]),
        })
      );
    }
  };
  const editName = (e) => {
    const name = e.target.value;
    dispatch(
      userAction.setName({
        name,
      })
    );
  };

  const editDob = (e) => {
    const Dob = e.target.value;
    dispatch(
      userAction.setDob({
        Dob,
      })
    );
  };
  const editHeight = (e) => {
    const height = e.target.value;
    dispatch(
      userAction.setHeight({
        height,
      })
    );
  };
  const editReligion = (e) => {
    const religion = e.target.value;
    dispatch(
      userAction.setReligion({
        religion,
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let activeP = userdata.active === "edit" ? "profile" : "edit";
    dispatch(
      userAction.setActive({
        active: activeP,
      })
    );
  };

  return (
    <Fragment>
      <div>
        {userdata.active === "edit" ? (
          <Edit onSubmit={handleSubmit}>
            <ImgUpload onChange={photoUpload} src={userdata.imageUrl} />
            <InputTags
              onChange={editName}
              tagname="Name"
              value={userdata.name}
            />
            <InputTags onChange={editDob} tagname="Dob." value={userdata.Dob} />
            <InputTags
              onChange={editHeight}
              tagname="Height"
              value={userdata.height}
            />
            <InputTags
              onChange={editReligion}
              tagname="Religion"
              value={userdata.religion}
            />
          </Edit>
        ) : (
          <Profile
            onSubmit={handleSubmit}
            src={userdata.imageUrl}
            name={userdata.name}
            Dob={userdata.Dob}
            religion={userdata.religion}
            height={userdata.height}
          />
        )}
      </div>
    </Fragment>
  );
}

export default UserProfile;
