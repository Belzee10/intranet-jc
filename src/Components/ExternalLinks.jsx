import React from "react";
import Link from "./Link";

const ExternalLinks = props => {
  const links = [
    {
      name: "Ecured",
      img: "ecured.png"
    },
    {
      name: "Mochila",
      img: "mochila.png"
    },
    {
      name: "Reflejos",
      img: "reflejos.png"
    },
    {
      name: "Tendedera",
      img: "tendedera.png"
    },
    {
      name: "Ludox",
      img: "ludox.png"
    }
  ];
  return (
    <div className="container text-center">
      <h2>External links</h2>
      <div className="links d-flex justify-content-around flex-wrap">
        {links.map(link => (
          <Link link={link} key={link.name} />
        ))}
      </div>
    </div>
  );
};

export default ExternalLinks;
