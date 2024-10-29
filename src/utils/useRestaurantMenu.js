import {useState, useEffect} from 'react';
import { MENU_API } from './constants.js';
import axios from 'axios';

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  
  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async() => {

    const response = await axios.get(MENU_API + resId);
    console.log(response);
    setResInfo(response?.data?.data);

  }

  return resInfo;
}
export default useRestaurantMenu;
