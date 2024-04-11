import React from "react";
import ReactDOM from "react-dom/client";

// React Element

/*
const Title = (
  <h1 className="head" tabIndex="5">
    Namaste React using a React Element
  </h1>
);

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(Title);
*/




// React Functional Component


const Title = () => (
  <h1 className="head" tabIndex="5">
    This is Namaste React Title
  </h1>
);


const HeadingComponent = () => (
  <div id="container">
    <Title/>
    <h1 className="heading">
      Namaste React using Functional Component
    </h1>
  </div>
);


const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<HeadingComponent/>);

// Putting a Component inside another Component is called "Component Composition".

