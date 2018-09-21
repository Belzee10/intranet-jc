import React, { Component } from "react";
import axios from "axios";
import SearchBox from "./SearchBox";
import Members from "./Members";

class Directory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      members: [],
      term: ""
    };
  }

  componentDidMount() {
    this.getMembers();
  }

  getMembers() {
    axios
      .get(
        "https://randomuser.me/api/?results=10&inc=name,location,email,cell,picture&nat=us"
      )
      .then(response => {
        this.setState({
          members: response.data.results
        });
        console.log(this.state);
      });
  }

  handleOnChange(value) {
    let members = this.state.members.filter(
      member => member.name.first == value
    );
    console.log(members);
    this.setState({
      members: members,
      term: value
    });
  }

  render() {
    return (
      <React.Fragment>
        <SearchBox
          term={this.state.term}
          onChange={this.handleOnChange.bind(this)}
        />
        <Members members={this.state.members} />
      </React.Fragment>
    );
  }
}

export default Directory;
