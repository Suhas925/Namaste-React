import {useRouteError} from 'react-router-dom';
// Here useRouteError() is a hook which is a normal JS function a specific purpose.
// This hook gives more information about the error.


const Error = () => {

    const error = useRouteError();
    console.log(error);

    return (
        <div>
            <h1>Oops!!!</h1>
            <h2>something went wrong!</h2>
            <h3>{error.status} : {error.statusText}</h3>
        </div>
    )
};

export default Error;