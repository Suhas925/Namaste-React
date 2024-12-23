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



# EP-06 Part-01:
----------------
# Monolith Architecture vs Microservices Architecture:
------------------------------------------------------

# Monolith : 
- When the webapps were developed traditionally, they were all developed using a Monolith Architecture.
- We used to have a big project, and in this project we used to have small pieces.
- The projects itself has code where API's were written, UI code inside the same project.
- We also have Authentication code, DataBase Connectivity code, sending sms code inside the project.
- Here if we have one big project of Java Application, then we have to do everything in Java.

# MicorServices Architecture:
-----------------------------
- Here we have different services for different jobs.
- The different services are like, Backend serivce, UI service, Authentication service, DataBase connectivity service, sms sending service, email notification service.
- Each one of the services are known as Micro Services.
- All theses services combined together forms a big App.
- For each and every small service there will be a different project.
- This is known as "Separation of Concerns", which follows "Single Responsibility Principle", where each and every service has its own job.

# How do these services interact with each other ?
--------------------------------------------------
- How are theses services deployed and how can we access these services.

- In the Microservices Architecture, our project comes under the UI Micro service written in React.
- In Monolith, suppose if we have one big project of Java Application, then we have to do everything in Java.
- But in Microservices, we can have UI written in React, backend written in Java, database written in python, sms service written in Golang.

- Just like our UI app is deployed on port 1234, similarly all those services will run on their own specific ports.
  :1234 -> UI service
  :1000 -> backend service
  :3000 -> sms service

- At the end of the day, all these ports can be mapped to Domain Name.
  UI -> ..../
  api -> ...../api
  sms -> ..../sms

- The services interact with each other by making a call to different url's
- If UI wants to connect to backend, they will make a call to /api or will call its specified port.


- Now we will see how do this React application talk to different micro services outside of its world.
- How will a React application make a backend api call and fetch the data.


# EP-06 Part-02:
----------------
- In the Body.js component, we were rendering the 'listOfRestaurants', which was comming from 'resList'.
- And this 'resList' comming from external mockData, which conatains dummy data which is comming from swiggy.
- The data we took from is a swiggy api. This api's data we copied into our code. But this is not a good way.
- Now we don't want to use this api/dummy data.

# How we can fetch data dynamically from a api and populate our page ?
----------------------------------------------------------------------
- Now all the restaurants will come on the fly from the api rather the hard coded data.
- Now we will see, how we can make the api call inside the react.


# 2 approaches how webapps or UI applications fetch the data from backend.
--------------------------------------------------------------------------

1) As soon as our page loads, we can make an api call and when we get the data, then we can render it on to the UI.
  page loads ----> api call ----> render the data

2) As soon as our page loads, we render whatever we have, then make an api call and then rerender the with the data.
  page loads ----> render (skeleton) ----> api call ---> re-render the data.
- It will give a better user experience.


# EP-06 Part-03:
----------------
- Here we use a React Hook called -> "useEffect()"
- useEffect() is also a normal js function which takes 2 arguments.
- First argument  is an Arrow Function which is a Calback Function.
- Second argument is a Dependency Array.

  useEffect( () => {}, [] );

# When will the Callback Function be called ?

- This Callback function will be called after our component 'Body' renders, which we have placed the useEffect() hook in.
- As soon as the 'Body' component's render cycle is finished, it will call the callback function which we have passsed into useEffect() function.
- When the Body component renders and as soon as the render cycle finished, it will just call the callback function.
- If we have to do something after rendering the component, we have to write it inside the useEffect().


- We were trying to fetche the swiggy.com data, and we encounterd an error.
- Basicaly, calling swiggy.com api from local host has been blocked due to cors policy.
- Actually, our browsers block us from calling api from one origin to different origin.
- If there is a origin mismatch, the browser blocks the api call. which is CORS policy.

# How do we bypass this CORS ?
- There is a way we can get rid of this CORS.
- install the cors chrome extension, "Allow CORS: Access-Control-Allow-Origin", toggle it ON.
- This extension will bypass our CORS error, as soon as you reload your page and you will get to see an object in the console. (console.log(json);)
- Now we have the json data which is comming directly from the swiggy.com api.

- Now we want to render our component once again with the loaded data.

# How do we re-render our component with the new data?
- Our actual page is rendered using the 'listOfRestaurants'.
- Since I got the new data, I will update the 'listOfRestaurants' with new data.
- Now React will re-render the component and our new data will be populated on the webpage.
- I will put the new data 'json' inside the 'setListOfRestaurants()' function.


- As soon as the page loads, the body component is rendered but empty till the data is fetched.
- Till then we can show a "Loading..." over there.
- But this is not a good practice.
- For this purpose, there is a concept called "Shimmer UI".


# What is Shimmer UI ?
----------------------
- A Shimmer UI Resembles the page's actual UI, so that the users will understand how quickly the webpage will load even before the content has shown up.
- It is like loading a fake page untill we get the data from the api.
- Instead of showing the 'Loading...', we can just show a skeleton of the actual UI.
# ===========================================================================================================



# EP-07 Part-01: useEffect() hook
---------------------------------
# useEffect(() => {callback function}, [dependency array])

-> useEffect(()=>{})
- If there is no dependency array, useEffect() will be called everytime the component is rendered.
- Here ()=>{} is the callback function.

-> useEffect(()=>{}, [])
- If the dependency array is empty [], useEffect will be called at the initial render only.
- Here [] is the dependency array.

- When we put something inside the dependencay array, useEffect will be called only when the dependency changes.

-> const [sign, setSign] = useState('Sign In');
-> useEffect(()=>{
  console.log("useEffect called");
},
[sign]);
- If the dependency array is [sign], then useEffect() is called everytime the 'sign' is updated.

# EP-07 Part-02 : useState() hook
---------------------------------
# Do's and Don'ts of useState() hook

# Do's:
-------
- Always use the useState() hook inside a component only.
- Best practice is to use it at the top/higer leve inside the component.
- useState() is used to create local state variables inside the functional component only.

# Don'ts:
---------
- Never create the local state variables and never use 'useState()' hook outside of the component.
- Don't use the useState() hook inside of 'if' block and 'for' loop.
- Don't create the state variables inside a function.

# EP-07 Part-03 :
-----------------

# React Routing
---------------
- Here we are gonna use a javascript library -> 'React Router DOM'
- To install it, run -> npm i react-router-dom
- Inside the package.json file we will get to see the dependency added -> "dependencies": {"react-router-dom": "^6.22.3"}
- And inside the package-lock.json file also, it is under the 'packages' object.

- Lets create a About Us page using routing.
- If we write 'localhost:1234/about' --> it should take us to 'About Us' page.
- For creating routing, we will have to go to our root level component which is 'App.js'
- Over here we will create the routing configuration.
- Whenever we have to develop routes, we have to create a Routing Configuration.

-> import { createBrowserRouter } from "react-router-dom";
- This 'createBrowserRouter' will create a routing configuration for us.

- Now we will create a routing configuration inside our 'appRouter', and we will pass the configuration inside the createBrowserRouter().
-> 'configuration' means an information that will tell the browserRouter, what will happen on a specific route/path.
- createBrowserRouter() takes a list of routes/paths.

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
  },
  {
    path: "/about",
    element: <AboutUs/>
  }
]);

- Now create the component 'AboutUs'.

- But just creating the configuration won't work.
- We will have to provide the configuration 'appRouter' to render it on to the page.
- For that we need to import 'RouterProvider' from 'react'.

-> import {createBrowserRouter, RouterProvider} from 'react';

- This 'RouterProvider' will actually provide this routing configuration to our app.

- Earlier we were rendering the 'AppLayout' directly -> root.render(<AppLayout/>)
- Now instead of 'AppLayout' we will have to provide the router configuration 'RouterProvider'.
- and provide the 'appRouter' configuration over there.

-> root.render(<RouterProvider router={appRouter} />)

- now run the app, and give localhost:1234/about -> it will redirect to 'About Us' page.


# ====================================================================================


- Earlier, If I go to about us page, I will be losing my 'Header'.
- Ideally, the header should always be intact and the about us page should load below the header.
- So as we move on to other pages, the header will stay there but only the body will change.

- To make this type of functionality, we have to create "Children Routes".

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    children: [
      {
        path: "/",
        element: <Body/>,
      },
      {
        path: "/about",
        element: <About/>,
      },
      {
        path: "/signin",
        element: <SignIn/>,
      }
    ],
    errorElement: <Error/>,
  },
]);

const AppLayout = () => {
  return (
    <Header/>

    {if path = "/"}
    <Body/>

    {if path = "/about"}
    <About/>

    {if path = "/signin"}
    <SignIn/>
  )
};

- For the above functionality to work, we should -> import {Outlet} from 'react-router-dom';

const AppLayout = () => {
  return (
     <div className="app">
      <Header/>
      <Outlet/>
     </div>
  )
};

- Whenever there is a change in the path, the <Outlet/> will be filled with the children according to the path on what page we are on.

- If I am on path "/", then the <Body/> component will be filled in the <Outet/>.
- If I am on path "/about", then the <About/> component will be filled in the <Outlet/>.

- Outlet is like a tunnel, and all the children according to the routes go inside the tunnel and come in the place of <Outlet/>.


- Now let us link it with the navigation list on the header.
- If I click on 'About Us' link it should take me to the About Us page.

- For that we need to link the nav-items on the header by using the anchor tags <a></a>.

<li>
  <a href="/about">About Us</a>
</li>

- Now when you click on the 'About Us' link it will redirect to About Us page.

- But, when you are using React and you want to route to some other page, never use a anchor tag.
- Because, whenever I click on the 'About Us' link, the whole page got refreshed.

- By using React, I don't want to refresh the whole page, but still I move to a new route.
- We can navigate to a new page, without reloading the whole page.

- There is an important trick inside 'react-router-dom' which will not even relaod our page.

- Instead of using <a href="/"> we will use something known as "link".
- "link" is a super power which is provided by the 'react-router-dom' which is "Link" Component.

-> import {Link} from 'react-router-dom';
- This Link component works exactly the same as anchor tag.

<!--
<li>
  <Link to="/about'>About Us</Link>
</li>
-->

- Now whenever you click on the navigation link 'About Us', only the <About/> will refresh, but it won't load the whole page.


- There are 2 types of Routings, that we can have inside our web application.
    1) Client-Side Routing      2) Server-Side Routing.


- In Server side routing, we make a network call and the page aboutus.html is comming from the server.

- In client side routing, we are not making any network calls while we are moving through the pages. Because all the components are already loaded into our app.
- When I load the app for the first time, it already has the code for all the pages. When I go to about us page, it just loads that component.
- The only network call in the client side routing is the making a network call in the api.
- Here we are not fetching any new pages, that's why this is known as client side routing.
- Single Page Applications are implemented via Client Side Routing.


EP-09 Part-01 : Introduction to Single Resoponsibility Principle and Custom Hooks
---------------------------------------------------------------------------------

- Suppose if we have a class or a function or any single identity of our code, that should have a single responsibility.
- At the end of the day, all the components we have created are functions.
- Each of the component is a different function.
- According to this principle, each of these components should have a single responsibility.

- The only job of 'RestaurantMenu' component should have to be displaying restaurant menu.
- The only single responsibility of 'RestaurantCard' should be displaying the restaurant card.

- We should not lot of things inside a component.
- If we want to do multiple things inside a single component, we should just break it down into different components.

- We could have wrote the whole code of 'RestaurantCard' inside the 'Body' component only.
- Rather, we extracted the code and put it inside the new component which is 'RestaurantCard'.
- This is the good way of maintaining the code in a 'Modular' fashion.

- Modularity -> means breaking down the code into different smaller modules.
- So that, the code becomes more maintainable and more testable.

- Since, the RestaurantCard is a single unit, wherever in my app I would need to show the RestaurantCard, I can just reuse it.
- Keep your components as lite as possible.

- How it will become more testable?

- When I have the single small unit of 'RestaurantCard', then I can write test cases just for this RestaurantCard.
- If there is a bug inside this RestaurantCard, then that test case will catch it.

- Therefore, If we follow "Single Responsibility Principle", our code becomes more readable, reusable, maintainable and testable.


INTRO TO CUSTOM HOOKS:
---------------------

- Hooks are basically normal javascript functions. But they are special functions which are give to us by react.
- We can also create our own hooks, which are "Custom Hooks".
- How we can use these custom hooks to make our code more modular, to abstract the extra responsibility of this component to a different hook.

- A Hook is just a utility function, a normal javascript function.
- we will just abstract some responsibility from a component and extract it inside a hook, so that our hook and our component becomes more modular and more readable.

- Now lets see, How our code will be more optimized when we write the custom hooks.



EP-09 Part-04:
--------------

- It is not mandatory to use 'use' keyword before creating a custom hook.
- I can replace 'useOnlineStatus()' hoot with 'getOnlineStatus()', and everything will work fine.
- But, it recommended by react that we use the 'use' keyword while creating the custom hooks.



EP-11 Part - 01:
---------------

Higher Order Components:
------------------------
-> Higher order component is a function that takes a component and returns a component.
-> At the end of the day, it is a normla javascript function.
-> The higher order component basically takes an existing component as an input and it enhances the component by adding few extra features to that component and returns the component as output.
-> They act like an enchancer kind of function.


EP -12: Let's build our store
-----------------------------
Part- 01: Intro to Redux library
--------------------------------

- In this section we will see how we can create our own Redux Store.
- How we can manage state/data of our application using Redux.
- Wkt, there is a UI layer and a Data layer, Redux works in the data layer of our application.
- These UI layer and Data layer works in sync and builds our own react app.

- Redux is not mandatory in our application, use it only when it is really needed.
- When we are building small-sized or mid-sized application we don't need redux.
- But if we are building a large-scale application where the data is heavily used and lots of write and read operations are happening in the application, there are lots of components and lots of data is being transfered between these components, the application has grown huge, only then using Redux makes sense.
- All the applications which are build using redux, can be built without using redux also.

- Redux and React both are different librarires.
- Redux is a seperate library which we import in our React project and then we use the Redux super powers.

- Redux is not the only library that is used for managing states.
- There is a library which is known as "Zustand".
- Redux is primarily used for managing state of our application.

# The advantage if using Redux:
- Redux offers easy debugging.
- Just like we have React Devtools, we also have Redux Devtools.
- Redux Devtools helps us debug our application when we are using our application.

# Part - 02 : What is Redux ?
-----------------------------

- Redux is a Predictable State container for JS apps.
- It is not something which is tied to react, it is not just used along with react.
- It is popularly used with react.
- Redux offers state management, it does not need to be in react application itself.
- Redux works with other libraries and frameworks as well.
- But it is heavily used with react.

- There are 2 libraries that redux team offers.
1) React-Redux
  - It is kind of like a bridge between react and redux.

2) Redux Toolkit:
  - The Redux Toolkit package is intended to be the standard way to write Redux logic.
  - It was orginally created to help address three common concerns about Redux.
    -> "Configuring a Redux store is too complicated"
    -> "I have to add a lot of packages to get redux to do anything useful"
    -> "Redux requires too much boilerplate code"

- Redux has a huge initial learning curve.
- Redux Toolkit offers a very less complicated version of redux





# Part - 03:
------------
- Now let us build the "Cart" in our application.
- Whenever I click on the "ADD" button of an item, it should go inside the cart.
- The cart in the header should show the no of items added.
- As soon as I click on the cart link, it should take me to the cart page.

- To store all the cart information, we will be using the "Redux Store".

# Redux Toolkit Architecture:
-----------------------------

# What is a Redux Store ?
-------------------------
- Reduxe Store is kind of like a very big javascript object with a lot of data inside it, and it is kept in a global central place.
- Assume it as a central place and any component inside our application can access the redux store.
- We keep most of the major data into this redux store.

- Is it a good practice to keep all the data inside a whole big object ? Yes, it is absolutely fine.
- But for our redux store not to become very big or very clumsy, we have "Slices" inside our redux store.
- Assume a "slice" is like a small portion of our redux store.
- We can create multiple slices inside our redux store.
- To keep data seperate, we make logical partitions and these logical partitions are slices.

- Suppose, if we want to add cart data into our redux store, we will create a seperate slice for our cart data in the redux store.
- If we want to keep logged in user info inside our redux store, we wil create a User slice.

- The cart slice will now hold all the data of the cart.
- Initially the cart can be an empty array.
- But later on, as we add items inside it, it can just modify the data inside the cart slice.

# When I click on ADD button, how does the data go inside the cart slice ?
----------------------------------------------------------------------------
# How to WRITE data inside the cart slice?

- We can't directly add data to the cart slice.
- Redux says, you cannot directly modify your cart slice. There is a seperate way to do that.

- When we click on the ADD button, it will dispatch an action, and then it call a function, and this function will modify the cart.

- When we click on the button, it will dispatch an action, this action will then call a function, and this function will actually modify the cart.


# ADD --> click --> dispatch(action) --> calls a function --> function modifies the cart
-----------------------------------------------------------------------------------------

# What is the function actually ?
---------------------------------
- This function is basically known as a "Reducer"

- When you click on the ADD button, it will dispatches and action, calls a reducer function, and this reduces function will internaly updates the cart slice of our redux store.

- Now the cart slice will have some data inside it.


# How to READ data from the cart slice ?
----------------------------------------

- The items quantiy number should reflect in the cart of header.
- How can we get data from the cart and display it in the cart of header.

- For that we use something known as "Selector"

- we will use the selector to read the data from our store, and this selector will modify our header component.
- This phenomenon of using selector is known as "Subscribing to the Store".
- Now we can say that, the header component is subscribed to our store.
- Subscribing means, the header component is in sync with the store.
- If the data inside my store changes, my header component will update it automagically.
- That's why we call it as, subscribing to the store. And the subscribing is done using a selector.

# ADD(click) --> dispatch(action) --> calls a reducer function --> updates the cart slice of store.
# header(cart) component --> subscribed(selector) ---> cart slice.

==================================================

# Part - 04 : lets build our store:
-----------------------------------

# Redux Toolkit:
  - Install @reduxjs/toolkit and react-redux
  - Build our store.
  - Connect our store to our application.
  - create a slice (cartSlice).
  - dispatch(action)
  - read data using selector.

- Now creating our store --> appStore.js

//
import {configureStore} from '@reduxjs/toolkit';
const appStore = configureStore({});
export default appStore;
//

- Now lets provide this store to our application.
- For that add few lines in App.js

//
import {Provider} from 'react-redux';
import appStore form './utils/appStore.js';

return (
  <Provider store={appStore}>
    // remaing code
  </Provider>
)
//


- Now lets create a cartSlice -> cartSlice.js
//
import {createSlice} from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: []
  },
  reducers: {
    addItems: (state, action) => {
      state.items.push(action.payload);
    },
    removeLastItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items.length = 0;  // Here, state = [] will not work.
    }
  }
});

export const {addItems, removeLastItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;

//
- Here, "addItems" is the dispatch action, and the "() => {}" is the reducer function.

- The "cartSlice" will be like a object which contains the actions and reducer.

cartSlice = {
  actions: {addItems, removeLastItem, clearCart},
  reducer
};


- Now we will add this slice(cartSlice) to our store. Add few more lines in appStore.js

//
import {configureStore} from '@reduxjs/toolkit';
import cartReducer from './cartSlice';

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
export default appStore;
//
















