import React from "react";
import axios from 'axios';

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Namaste React",
        location: "VS code",
        avatar_url: "",
      },
      userConfig: {
        url: "http://github.com/Suhas925",
        method: "Post",
      }
    };
  }


  async componentDidMount() {
    const response = await axios.get("https://api.github.com/users/akshaymarch7");
    console.log("response: ", response);

    // console.log(this.state.userInfo);

    this.setState({
      userInfo: response.data,
      userConfig: response.config,
    });

    console.log('Component Did Mount');
    
  }

  componentDidUpdate() {
    // console.log(this.state.userInfo);
    console.log('Component Did Update');
  }

  componentWillUnmount() {
    // this will be called when the component is gone from the page.
    // Whenever I go to the new page or next page, this component will be unmounted from the current page.
    console.log('Component Will Unmount');
  }

  render() {
    const {name, location, avatar_url} = this.state.userInfo;
    const {method, url} = this.state.userConfig;

    return (
      <div className="user-card">
        <img style={{height:'250px'}} src={avatar_url}/>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Email: suhassaibadam@gmail.com</h4>
        <p>{url} - {method}</p>
      </div>
    );
  }
}

export default UserClass;

// Class Component is a class which has a render() methods which return some piece of jsx.
// React.Component is basically a class which is given to us by React, and 'UserClass' is inheriting some properties from it.
/*
 * ------ MOUNTING LIFE CYCLE --------------------
 * Constructor called -> this constructor updates the state with dummy data. 
 * Render is called -> render happens with the dummy data. 
 *    <HTML/> loaded -> the component has the dummy data for few milliseconds.
 * Component Did Mount is called
 *    <API CALL> is happened
 *    <this.setState> is called -> here the state variable is updated.
 * -------- MOUNTING CYCLE FINISHED -------------------
 * 
 * setState() is called -> it triggers the Reconciliation process in the update cycle.
 * Now the update cycle is called.
 * 
 *  ---------- UPDATE LIFE CYCLE STARTED --------------------
 * Render is called -> now the render happens with the new data i.e., API data.
 *    <HTML/> is loaded with the new API data. At this point the user will see the newly added data on the html.
 * Now the "componentDidUpdate" is called.
 * ----------- UPDATE LIFE CYCLE FINISHED ------------------
 */