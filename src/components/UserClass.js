import React from "react";
import '../css/User.css';

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    // creating state variables inside a class based component.
    this.state = {
      count: 22,
      id: "SSB9125",
    };
    console.log(this.props.user +" - "+ "Child Constructor");
  }

  // when the class component is loaded, first of all, the constructor is called, then the render() method is called.
  // Once this class based component is mounted on to the dom, then this 'componentDidMount()' is called.

  componentDidMount() {
    console.log(this.props.user +" - "+ "Child Component Did Mount");
  }

  render() {
    const { location } = this.props;
    const { id } = this.state;

    console.log(this.props.user +" - "+ "Child Render");

    return (
      <div className="user-card">
        <h1>Count: {this.state.count}</h1>
        <button
          onClick={() => {
            // NEVER UPDATE STATE VARIABLES DIRECTLY LIKE:  this.state.count = this.state.count + 1;

            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Up Count
        </button>
        <p>ID: {id}</p>
        <h2>Name: {this.props.user}</h2>
        <h3>Location: {location}</h3>
        <h4>Email: suhassaibadam@gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;

// Class Component is a class which has a render() methods which return some piece of jsx.
// React.Component is basically a class which is given to us by React, and 'UserClass' is inheriting some properties from it.
