import NavbarTwo from "./NavbarTwo";
import NavbarThree from "./NavbarThree";
import NavbarFour from "./NavbarFour";
import NavbarFive from "./NavbarFive";
import NavbarSix from "./NavbarSix";
import NavbarOne from "./NavbarOne";
import React from "react";
import axios from "axios";
import { useState, useEffect } from 'react';
function LoadHeader() {
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    axios
      .get('https://realtor.bh/api/v1/site/init')
      .then((res) => {
       
        setApiData(res.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  //let siteInitData = {};
  let headerLayout = apiData?.data.headerData.theme_header_layout_id
console.log("------------------------------",headerLayout)
  //siteInitData.theme_header_layout_id;
  if(headerLayout == "header-layout-1"){
    return (
        <NavbarOne/>
      );

  }
  if(headerLayout == "header-layout-2"){
    return (
        <NavbarTwo/>
      );
  }

  if(headerLayout == "header-layout-3"){
    return (
        <NavbarThree/>
      );
  }
  if(headerLayout == "header-layout-4"){
    return (
        <NavbarFour/>
      );
  }
  if(headerLayout == "header-layout-5"){
    return(
      <NavbarFive/>
    );
  }
  if(headerLayout == "header-layout-6"){
    return(
      <NavbarSix/>
    )
  }

  
}

export default LoadHeader;
