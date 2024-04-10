const heading = React.createElement('h1', {id:"heading", name:"greeting"}, "Hello World From React 🚀");
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(heading);

/*
# React.createElement() -> It creates a React Element. Its not an actual 'h1' tag.
# 'heading' is basically a react element, which is a normal JavaScript object.
# The object has something known as 'props'. props are the children and the attributes that we pass in.
# Here the attributes are {id:"heading", name:"greeting"}.
# The children is "Hello World From React".


# render(heading) -> here we are passing a react element, a javascript object 'heading' to render() function.
# root.render(heading) function's job is basically to take the object 'heading', create the 'h1' tag which the browser understands, and puts it inside the root element.
# The render() function is responsible for taking the object 'heading', converts it into the 'h1' tag and put it up on to the DOM.
*/