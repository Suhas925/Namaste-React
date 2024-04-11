import React from "react";
import ReactDOM from "react-dom/client";


// Just like we have DOM(html) elements, we also have React Elements.
// React Elements are kind of equivalent to DOM Elements.

const heading = React.createElement('h1', {id:"heading"}, "Hello World From React");
// This is a React Element, NOT a html Element.
// React Element at the end of the day is a normal JavaScript Object.
// React.createElement() -> basically creates an object.
// When we render this react element on to the DOM, then it becomes an html element.

// ReactElement(Object) ----->>rendering----->> HTML element.


// creating a root to render.
const root = ReactDOM.createRoot(document.querySelector('#root'));
// This root will now become the root of our React App.
// Whatever happens inside the react will happen inside this root.


// rendering the heading on to the DOM.
root.render(heading);
// Here 'heading' is a normal javaScript object created by React.createElement();
// Now the powerfull library ReactDOM, takes this object and converts it into html and puts it on the browser.
// root.render(heading) -> will replace everthing present inside the root element with the heading.
