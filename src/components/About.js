import UserClass from "./UserClass";
import {Component} from 'react';
import UserContext from '../utils/UserContext';

class About extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        return (
            <div>
                <h1>About</h1>
                <UserContext.Consumer>
                    {({loggedInUser}) => <h1 className="font-bold text-lg">User: {loggedInUser}</h1> }
                </UserContext.Consumer>
                <h2>Everyone likes our Foodieapp</h2>
                <UserClass user={"suhas (class)"} location={"Bengaluru (class)"}/>
            </div>
        )
    }
};

export default About;
