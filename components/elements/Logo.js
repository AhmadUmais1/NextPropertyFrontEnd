
import Link from "next/link";
import React from "react";
//import {getHeaderLogo } from "../../services/SiteInitService";
/*
import axios from "axios";
import { useState, useEffect } from 'react';
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
  let LogoLayout = apiData?.data.headerData.theme_header_logo
console.log("------------------------------",LogoLayout)
  if(LogoLayout == "https://realtor.bh/modules/xts/themes/theme_1/assets/images/theme_header_logo.jpg"){
    return (
      <div className="brand-logo">
        <Link href="/">
            <img src="/assets/images/logo/1.png" alt="" />
        </Link>
      </div>
      );

  }
  if(LogoLayout == "https://realtor.bh/modules/xts/themes/theme_1/assets/images/theme_header_logo.jpg"){
    return (
    <div className="brand-logo">
      <Link href="/">
        <img src= "/assets/images/logo/2.png" alt=""/>
      </Link>
    </div>
      );
  }

  if(LogoLayout == "https://realtor.bh/modules/xts/themes/theme_1/assets/images/theme_header_logo.jpg"){
    return (
    <div className="brand-logo">
      <Link href="/">
        <img src="/assets/images/logo/3.png"alt="" />
      </Link>
    </div>
      );
  }
  if(LogoLayout == "https://realtor.bh/modules/xts/themes/theme_1/assets/images/theme_header_logo.jpg"){
    return (
      <div className="brand-logo">
        <Link href="/">
          <img src="/assets/images/logo/4.png" alt=""/>
        </Link>
      </div>
      );
  }
  if(LogoLayout == "https://realtor.bh/modules/xts/themes/theme_1/assets/images/theme_header_logo.jpg"){
    return(
      <div className="brand-logo">
        <Link href="/">
          <img src="/assets/images/logo/5.png" alt =""/>
        </Link>
      </div>
    );
  }
  if(LogoLayout == "https://realtor.bh/modules/xts/themes/theme_1/assets/images/theme_header_logo.jpg"){
    return(
      <div className="brand-logo">
        <Link href="/">
          <img src="/assets/images/logo/6.png" alt =""/>
        </Link>
      </div>
      
    )}
  if(LogoLayout == "https://realtor.bh/modules/xts/themes/theme_1/assets/images/theme_header_logo.jpg"){
    return(
      <div className="brand-logo">
        <Link href = "/">
          <img src = "/assets/images/logo/7.png" alt=""/>
        </Link>
      </div>
        )}
    if(LogoLayout == "https://realtor.bh/modules/xts/themes/theme_1/assets/images/theme_header_logo.jpg"){
        return(
          <div className="brand-logo">
            <Link href = "/">
              <img src = "/assets/images/logo/8.png" alt =""/>
            </Link>
          </div>
        )}
    if(LogoLayout == "https://realtor.bh/modules/xts/themes/theme_1/assets/images/theme_header_logo.jpg"){
        return(
          <div className="brand-logo">
            <Link href = "/">
              <img src = "/assets/images/logo/9.png" alt =""/>
            </Link>
          </div>
            )}
    } */


    // let HeaderLogo = '';
    // await getHeaderLogo().then((res)=>{
    //   HeaderLogo = res;
    // });

    // console.log(HeaderLogo);
    
 const Logo = ({logoPath}) => {
  logoPath = (logoPath === undefined)?"/assets/images/logo/5.png":logoPath;
  return (
    <div className="brand-logo">
      <Link href="/">
        <img src={logoPath} alt="" className="img-fluid" />
      </Link>
    </div>
  );
};

const Logo2 = ({logoPath}) => {
  logoPath = (logoPath === undefined)?"/assets/images/logo/1.png":logoPath;
  return (
    <div className="brand-logo">
      <Link href="/">
        <img src={logoPath} alt="" className="img-fluid for-light" />
      </Link>
    </div>
  );
};

const Logo3 = ({logoPath}) => {
  logoPath = (logoPath === undefined)?"/assets/images/logo/2.png":logoPath;
  return (
    <div className="brand-logo">
      <Link href="/">
        <img src={logoPath} alt="" className="img-fluid" />
      </Link>
    </div>
  );
};

const Logo4 = ({logoPath}) => {
  logoPath = (logoPath === undefined)?"/assets/images/logo/3.png":logoPath;
  return (
    <div className="brand-logo">
      <Link href="/">
        <img src={logoPath} alt="" className="img-fluid" />
      </Link>
    </div>
  );
};

const Logo5 = ({logoPath}) => {
  logoPath = (logoPath === undefined)?"/assets/images/logo/4.png":logoPath;

  return (
    <div className="brand-logo">
      <Link href="/">
        <img src={logoPath} alt="" className="img-fluid for-light" />
      </Link>
    </div>
  );
};

const Logo6 = ({logoPath}) => {
  logoPath = (logoPath === undefined)?"/assets/images/logo/6.png":logoPath;

  return (
    <div className="brand-logo">
      <Link href="/">
        <img src={logoPath} alt="" className="img-fluid" />
      </Link>
    </div>
  );
};

const Logo7 = ({logoPath}) => {
  logoPath = (logoPath === undefined)?"/assets/images/logo/7.png":logoPath;

  return (
    <div className="brand-logo">
      <Link href="/">
        <img src={logoPath} alt="" className="img-fluid for-dark" />
      </Link>
    </div>
  );
};

const Logo8 = ({logoPath}) => {
  logoPath = (logoPath === undefined)?"/assets/images/logo/8.png":logoPath;
  return (
    <div className="logo">
      <Link href="/">
        <img src={logoPath} alt="" className="img-fluid" />
      </Link>
    </div>
  );
};
const Logo9 = ({logoPath}) => {
  logoPath = (logoPath === undefined)?"/assets/images/logo/9.png":logoPath;
  return (
    <div className="logo">
      <Link href="/">
        <img src={logoPath} alt="" className="img-fluid" />
      </Link>
    </div>
  );
};

export { Logo, Logo2, Logo3, Logo4, Logo5, Logo6, Logo7, Logo8, Logo9 }; 
