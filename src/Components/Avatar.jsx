import React from "react";

const Avatar = props => {
  return (
    <div className="avatar">
      <img src={props.picture} alt={props.name} />
    </div>
  );
};

export default Avatar;
