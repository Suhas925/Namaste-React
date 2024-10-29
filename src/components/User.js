import {useState} from 'react';

const User = (props) => {
  const [count] = useState(111);
  return (
    <div className="user-card">
      <h1>Count : {count}</h1>
      <h2>Name: {props.username}</h2>
      <h3>Location: Hyderabad, India.</h3>
      <h4>Email: suhassaibadam@gmail.com</h4>
    </div>
  )
}

export default User;

// Functional Component is a function which returns some piece of jsx.
