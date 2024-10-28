import React from 'react';

class UserClass extends React.Component {

  constructor(props) {
    super(props);
    console.log(props);
  }
  
  render() {
    const {location} = this.props;
    return (
      <div className="user-card">
        <h2>Name: {this.props.user}</h2>
        <h3>Location: {location}</h3>
        <h4>Email: suhassaibadam@gmail.com</h4>
      </div>
    )
  }
}

export default UserClass;

// Class Component is a class which has a render() methods which return some piece of jsx.
// React.Component is basically a class which is given to us by React, and 'UserClass' is inheriting some properties from it.