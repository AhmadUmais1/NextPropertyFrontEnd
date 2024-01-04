import NavbarTwo from "./NavbarTwo";
import NavbarThree from "./NavbarThree";
import NavbarFour from "./NavbarFour";
import NavbarFive from "./NavbarFive";
import NavbarSix from "./NavbarSix";
import NavbarOne from "./NavbarOne";
import React from "react";
import { Logo,Logo2,Logo3,Logo4,Logo5,Logo6 } from "../../components/elements/Logo";
import {getHeaderData } from "../../services/SiteInitService";
function LoadHeader(props) {

  const headerData = getHeaderData(props.data);
  const headerLayout = headerData?.theme_header_layout_id
  const headerLogo = headerData?.theme_header_logo
  if(headerLayout == "header-layout-1"){
    return (
        <NavbarOne logo={<Logo logoPath={headerLogo}/>}/>
      );

  }
  if(headerLayout == "header-layout-2"){
    return (
        <NavbarTwo logo={<Logo2 logoPath={headerLogo}/>}/>
      );
  }

  if(headerLayout == "header-layout-3"){
    return (
        <NavbarThree logo={<Logo3 logoPath={headerLogo}/>}/>
      );
  }
  if(headerLayout == "header-layout-4"){
    return (
        <NavbarFour logo={<Logo4 logoPath={headerLogo}/>}/>
      );
  }
  if(headerLayout == "header-layout-5"){
    return(
      <NavbarFive logo={<Logo5 logoPath={headerLogo}/>} />
    );
  }
  if(headerLayout == "header-layout-6"){
    return(
      <NavbarSix logo={<Logo6 logoPath={headerLogo}/>}/>
    )
  }

  
}

export default LoadHeader;
