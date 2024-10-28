import '../css/User.css';

const User = (props) => {
  return (
    <div className="user-card">
      <h2>Name: {props.username}</h2>
      <h3>Location: Hyderabad, India.</h3>
      <h4>Email: suhassaibadam@gmail.com</h4>
    </div>
  )
}

export default User;

// Functional Component is a function which returns some piece of jsx.
