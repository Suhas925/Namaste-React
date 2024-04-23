import "../styles/SignIn.css";

const SignIn = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your Details are saved successfully!");
  };

  return (
    <div className="main">
      <div className="container">
        <h1> Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="inputs">
            <input type="text" placeholder="email"/>
            <input type="password" placeholder="password"/>
            <input type="confirmpassword" placeholder="confirm your password"/>
            <input type="submit" value="Submit"/>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
