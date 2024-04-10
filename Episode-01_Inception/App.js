/*
<div id="parent">
  <div id="child">
    <h1 id="heading">
      I'm an h1 tag
    </h1>
  </div>
</div>
*/

/*
const parent = React.createElement(
  'div', {id:"parent"},
  React.createElement(
    'div', {id:"child"},
    React.createElement('h1', {id:"heading"}, "I'm an h1 tag")
  )
);
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(parent);
*/

// ______________________________________________________________________


/*
<div id="parent">
  <div id="child">
    <h1 id="heading-1">I'm an h1 tag</h1>
    <h2 id="heading-2">I'm an h2 tag</h2>
  </div>
</div>
*/


/*
const parent = React.createElement(
  'div', {id:"parent"},
  React.createElement(
    'div', {id:"child"},
    [React.createElement('h1', {id:"heading-1"}, "I'm an h1 tag"),
     React.createElement('h2', {id:"heading-2"}, "I'm an h2 tag")]
  )
);
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(parent);
*/

// ____________________________________________________________________________


/*
<div id="parent">
  <div id="child-1">
    <h1 id="heading-1">I'm an h1 tag</h1>
    <h2 id="heading-2">I'm an h2 tag</h2>
  </div>
  <div id="child-2">
    <h3 id="heading-1">I'm an h3 tag</h3>
    <h4 id="heading-2">I'm an h4 tag</h4>
  </div>
</div>
*/

const parent = React.createElement(
  'div', {id:"parent"},
  [React.createElement(
    'div', {id:"child-1"},
    [React.createElement('h1', {id:"heading-1"}, "I'm an h1 tag"),
     React.createElement('h2', {id:"heading-2"}, "I'm an h2 tag")]
  ),
  React.createElement(
    'div', {id:"child-2"},
    [React.createElement('h3', {id:"heading-3"}, "I'm an h3 tag"),
     React.createElement('h4', {id:"heading-4"}, "I'm an h4 tag")]
  )]
);
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(parent);

// Now the code looks complex, than the html.
// If we have even more complex nested structure, the code will become even more complex.
// This is why there is something known as JSX.