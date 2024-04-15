# Namaste React

# Plan for Food Ordering App:

/\*\*

- "Header" Component
- -> Logo
- -> Nav Items
- -> Home, AboutUs, Cart
-
- "Body" Component
- -> Search Bar
- -> RestaurantContainer
- -> "RestaurantCard" Component
-
- "RestaurantCard" Component
- -> FoodImage
- -> Info
- ->Name of the Reataurant, Cuisine, Ratings, Stars, Delivery Time etc..
-
- "Footer" Component
- -> CopyRights
- -> Links
- -> Contact
- -> Address
  \*\*/

# Two types of Export/Import:

- Default Export/Import

export default Component;
import Component from "path";

- Named Export/Import

export const Component;
import { Component } from "path";

# React Hooks

- They are normal JavaScript Utility Functions.
- The Most Important Hooks are:
- 1. useState()
- 2. useEffect()

1. useState() -> used to generate superpowerful State Variables in React.

- Whenever a state variable updates, react re-renders the component.

# "Reconciliation Algorithm" also known as "React Fiber"

---

<div>
  <div>
    <div></div>
  </div>
</div>
- This is Real/Actual DOM.

- React basically creates a "Virtual DOM".
- Virtual DOM is a representation of Actual DOM.
- Virtual DOM is nothing but a JavaScript Object.

# Diff Algorithm

---

- Diff Algorithm basically finds out the difference between the previous(old) Virtual DOM and updated(new) Virtual DOM.
- In React-16, a new alogrithm came out to update the DOM.
- This algorithm is known as "React Fiber".
- This React Fiber is a new way of finding the difference between the old virtual dom and new virtual dom and updating the actual dom.

- Ultimately 'virtual dom' is an object.

Link for React-Fiber-Architecture
https://github.com/acdlite/react-fiber-architecture

const [cardsList, setCardsList] = useState(list);
- The above statement can also be written as 

const arr = useState(list);
cosnt [cardsList, setCardsList] = arr;
- The above code is similar to 

const cardsList = arr[0];
const setCardsList = arr[1];


