import React from "react";

function Avatar() {
  const style = { width: "100%", height: "500px" };
  return (
    <img
      className="avatar"
      style={style}
      src="src\IMG_20190316_102253.jpg"
      alt="profile"
    />
  );
}

export default Avatar;
