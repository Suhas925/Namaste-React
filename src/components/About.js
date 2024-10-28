import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return (
        <div>
            <h1>About</h1>
            <h2>Everyone likes our Foodieapp</h2>
            {/* <User username={"Suhas Sai (functional)"}/> */}
            <UserClass user={"suhas (class)"} location={"Bengaluru (class)"}/>
        </div>
    )
};

export default About;