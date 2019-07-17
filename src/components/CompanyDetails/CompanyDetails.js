import React, { Component } from "react";


class CompanyDetails extends Component {

  
  render() {
      console.log(this.props.location.state);
    return (
      <div>Details</div>
    );
  }
}

export default CompanyDetails;
