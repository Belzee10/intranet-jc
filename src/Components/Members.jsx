import React from "react";
import Member from "./Member";

const Members = props => {
  let rows = [];

  props.members.forEach((member, index) => {
    let fullName = `${member.name.first} ${member.name.last}`;
    if (fullName.indexOf(props.term) === -1) {
      return;
    }
    rows.push(<Member member={member} key={index} />);
  });

  return (
    <section id="workers">
      <div className="container workers">
        {rows.length !== 0 ? rows : <span>No members found :(</span>}
      </div>
    </section>
  );
};

export default Members;
