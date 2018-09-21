import React from "react";
import Avatar from "./Avatar";

const Member = props => {
  let { cell, email, location, name, picture } = props.member;

  function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div className="card">
      <div className="card-body">
        <Avatar picture={picture.large} name={name.first} />
        <div className="info">
          <h5>{`${capitalize(name.first)} ${capitalize(name.last)}`}</h5>
          <span>
            <i className="jam jam-envelope-f" />
            {email.replace("example.com", "email.com")}
          </span>
          <span>
            <i className="jam jam-map-marker-f" />
            {`${capitalize(location.city)}, ${capitalize(location.state)}`}
          </span>
          <span>
            <i className="jam jam-phone-f" />
            {cell}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Member;
