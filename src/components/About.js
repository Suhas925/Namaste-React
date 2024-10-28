import UserClass from "./UserClass";
import {Component} from 'react';

class About extends Component {
    constructor(props) {
        super(props);
        console.log("Parent Constructor");
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
                <UserClass user={"Kirtan (class)"} location={"Hyderabad (class)"}/>
            </div>
        )
    }
};

export default About;

// Here the life cylce of the 'About.js' class component will be:
/*
- Parent Construcotr
- Parent Render

    - suhas (class) - Child Constructor
    - suhas (class) - Child Render

    - Kirtan (class) - Child Constructor
    - Kirtan (class) - Child Render

    <DOM MANIPULATED/UPDATED - IN A SINGLE BATCH>
    - suhas (class) - Child Component Did Mount
    - Kirtan (class) - Child Component Did Mount

- Parent Component Did Mount
*/