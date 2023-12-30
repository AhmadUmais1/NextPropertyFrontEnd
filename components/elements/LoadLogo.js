/* import { Logo,Logo2,Logo3,Logo4,Logo5,Logo6,Logo7,Logo8,Logo9 } from "./Logo";

import React from "react";
import axios from "axios";
import { useState, useEffect } from 'react';
import { Link } from "react-feather";
//import callApi from "../callApi";
function LoadLogo() {
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    axios
      .get("https://realtor.bh/api/v1/site/init")
      .then((res) => {
       
        setApiData(res.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  //let siteInitData = {};
  let LogoLayout = apiData?.data.headerData.theme_header_logo
console.log("------------------------------",LogoLayout)
  //siteInitData.theme_header_layout_id;
  if(LogoLayout == Logo){
    return (
        <Link href="/">
            <img src="/assets/images/logo/1.png" alt="" />
        </Link>
      );

  }
  if(LogoLayout == Logo2){
    return (
        <Link href="/">
            <img src= "/assets/images/logo/2.png" alt=""/>
        </Link>
      );
  }

  if(LogoLayout == Logo3){
    return (
        <Link href="/">
            <img src="/assets/images/logo/3.png"alt="" />
        </Link>
      );
  }
  if(LogoLayout == Logo4){
    return (
        <Link href="/">
            <img src="/assets/images/logo/4.png" alt=""/>
        </Link>
      );
  }
  if(LogoLayout == Logo5){
    return(
      <Link href="/">
            <img src="/assets/images/logo/5.png" alt =""/>
      </Link>
    );
  }
  if(LogoLayout == Logo6){
    return(
        <Link href="/">
            <img src="/assets/images/logo/6.png" alt =""/>
        </Link>
      
    )
  }

  
}

export default LoadHeader;
 */