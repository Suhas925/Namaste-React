# Namaste React 


# Plan for Food Ordering App:

/**
 * "Header" Component
 *  -> Logo
 *  -> Nav Items
 *    -> Home, AboutUs, Cart
 * 
 * "Body" Component
 *  -> Search Bar
 *  -> RestaurantContainer
 *    -> "RestaurantCard" Component
 * 
 * "RestaurantCard" Component
 *  -> FoodImage
 *  -> Info
 *    ->Name of the Reataurant, Cuisine, Ratings, Stars, Delivery Time etc..
 * 
 * "Footer" Component
 *  -> CopyRights
 *  -> Links
 *  -> Contact
 *  -> Address
 **/

# Two types of Export/Import:

- Default Export/Import

export default Component;
import Component from "path";


- Named Export/Import

export const Component;
import { Component } from "path";