import React, { Component } from "react";

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onChange(e) {
    this.props.onChange(e.target.value);
  }

  render() {
    return (
      <section id="search-box">
        <div className="container search-box">
          <div className="title">
            <h2>Type for any of our members!</h2>
          </div>
          <div className="form">
            <div className="form-group">
              <input
                type="search"
                placeholder="Ej: John Doe"
                className="form-control"
                value={this.props.term}
                onChange={this.onChange.bind(this)}
              />
              <i className="jam jam-search" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SearchBox;
