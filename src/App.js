import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import About from "./components/About.js";
import SignIn from "./components/SignIn.js";
import Contact from './components/Contact.js';
import Error from "./components/Error.js";
import {Outlet} from 'react-router-dom';
import RestaurantMenu from "./components/RestaurantMenu.js";

// Parcel bundles all the components into a sinlge js file, whose size may increase as the no of components increases.
// We can do something, where the application is just one js file, but, smaller js files.
// Whenever we are building large scale production ready application, we have to break down our app into smaller pieces.

// Should we do bundling ? Yes, we have to.
// Suppose, there are 1000 components in our app, and we don't need 1000 files loading into our webpage.
// This will be a lot of work for browsers to do, for making 1000 calls.
// We don't want to put the 1000 files into one js file.

// We will try to make smaller bundles of these files, this process is known as:

// Chunking
// Code Splitting
// Dynamic Bundling
// Lazy Loading
// Dynamic Import.
// On-Demand Loading.

// I will not import <Grocery/> directly like this.
// import Grocery from "./components/Grocery.js";

// But, I will import <Grocery/> using "Lazy Loading".
const Grocery = lazy(() => import("./components/Grocery"));


const AppLayout = () => {
  return (
    <div className="app">
      <Header/>
      <Outlet/>
    </div>
  )
};

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
        path: '/contact',
        element: <Contact/>
      },
      {
        path: '/grocery',
        element: <Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>,
      },
      {
        path: "/signin",
        element: <SignIn/>,
      },
      {
        path:"/restaurants/:resId",
        element: <RestaurantMenu/>,
      }
    ],
    errorElement: <Error/>,
  },
]);

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<RouterProvider router={appRouter}/>);