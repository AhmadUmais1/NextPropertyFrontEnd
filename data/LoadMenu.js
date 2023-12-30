//import Home from "./pages./home"
import React from "react";
import axios from "axios";
import { useState, useEffect } from 'react';
import { getSiteInitData } from "../services/SiteInitService";
//import callApi from "../callApi";
function LoadMenu() {
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    axios
      .get("getSiteInitData")
      .then((res) => {
       
        setApiData(res.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  //let siteInitData = {};
  let Menu = apiData?.data?.mainMenuData
console.log("------------------------------",Menu)
  //siteInitData.theme_header_layout_id;
return(
    (Menu)
)
  
}

export default LoadMenu;
