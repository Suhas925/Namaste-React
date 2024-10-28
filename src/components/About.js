import UserClass from "./UserClass";
import {Component} from 'react';

class About extends Component {
    constructor(props) {
        super(props);
        console.log("Parent Construcotr");
    }

    componentDidMount() {
        console.log("Parent Component Did Mount");
    }

    render() {
        console.log("Parent Render");
        return (
            <div>
                <h1>About</h1>
                <h2>Everyone likes our Foodieapp</h2>
                <UserClass user={"suhas (class)"} location={"Bengaluru (class)"}/>
            </div>
        )
    }
};

export default About;