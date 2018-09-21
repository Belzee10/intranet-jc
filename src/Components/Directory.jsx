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
        "https://randomuser.me/api/?results=40&inc=name,location,email,cell,picture&nat=us"
      )
      .then(response => {
        this.setState({
          members: response.data.results
        });
      });
  }

  handleOnChange(value) {
    this.setState({
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
        <Members members={this.state.members} term={this.state.term} />
      </React.Fragment>
    );
  }
}

export default Directory;
