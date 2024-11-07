import React, {lazy, Suspense, useState, useEffect} from "react";
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

import UserContext from './utils/UserContext.js';

const Grocery = lazy(() => import("./components/Grocery"));


const AppLayout = () => {

  const [userName, setUserName] = useState();

  // Authentication Logic
  useEffect(() => {
    // Make an API call and send Username and Password
    const data = { name: "Kirtan Badam"};
    setUserName(data.name);
  }, [])

  return (

    // outside it will use the 'Default User';
    // <UserContext.Provider value={{loggedInUser: userName}}>
    //   {/*Here it will be userName = Kirtan Badam */}
    //   <div className="app">
    //     <UserContext.Provider value={{loggedInUser: "Shiva"}}>
    //       {/*Here it will be "Shiva" */}
    //       <Header/>
    //     </UserContext.Provider>
    //   <Outlet/>
    // </div>
    // </UserContext.Provider>

    <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
      <div className="app">
        <Header/>
        <Outlet/>
      </div>
    </UserContext.Provider>
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