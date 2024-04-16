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

