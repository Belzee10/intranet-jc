import React from "react";

const Intro = () => {
  return (
    <div className="container h-100 d-flex justify-content-center align-items-center">
      <div className="row">
        <div className="col-md-5 offset-md-1">
          <h1>Joven Club Intranet.</h1>
          <h6>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam et
            laboriosam dolores ratione sapiente, est, distinctio, officia
            voluptatum architecto accusamus amet! Sit sequi officiis praesentium
            alias nesciunt illum perferendis quaerat!
          </h6>
        </div>
        <div className="col-md-5 d-none d-md-block">
          <img src="img/intro-img.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
