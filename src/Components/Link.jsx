import React from "react";

const Link = props => {
  return (
    <a href="">
      <div className="card">
        <div className="card-body">
          <img src={"img/" + props.link.img} alt="" width="100" />
          <span className="d-block">{props.link.name}</span>
        </div>
      </div>
    </a>
  );
};

export default Link;
