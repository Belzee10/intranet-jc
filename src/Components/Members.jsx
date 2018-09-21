import React from "react";
import Member from "./Member";

const Members = props => {
  return (
    <section id="workers">
      <div className="container workers">
        {props.members.map((member, index) => (
          <Member member={member} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Members;
