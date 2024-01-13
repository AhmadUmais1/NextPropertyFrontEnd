import FooterOne from "./FooterOne";
import FooterTwo from "./FooterTwo";
import FooterThree from "./FooterThree";
import { Logo,Logo2,Logo3,Logo4,Logo5,Logo6,Logo7,Logo8,Logo9 } from "../../components/elements/Logo";
import FooterFour from "./FooterFour";
import axios from "axios";
import React from "react";
import { getFooterData } from "../../services/SiteInitService";
//import { useState,useEffect } from "react";
//import { getFooterAddress } from "../../services/SiteInitService";
function LoadFooter (props){
    const footerData = getFooterData(props.data);
    const footerLayout = footerData?.theme_footer_layout_id
    const footerLogo = footerData?.theme_footer_logo
    const footerAddress = footerData?.theme_address
    console.log(footerAddress)

/* function LoadFooter (){
    const [apiData,setApiData] = useState(null);
    useEffect(() => {
        axios
        .get("https://realtor.bh/api/v1/site/init")
        .then((res)=>{
            setApiData(res.data)
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
          });
    },[])  */
    //console.log(".....footerresponse",footerLayout)
    /* const footerData = apiData;
    const footerLayout = footerData?.theme_footer_layout_id */
    if (footerLayout === "footer-layout-1"){
        return(
            <FooterOne 
            Address={footerAddress}
            logo={<Logo logoPath = {footerLogo}/>}
            />
        )
    }
    if (footerLayout === "footer-layout-2"){
        return(
            <FooterTwo Address={footerAddress}
            logo={<Logo2 logoPath = {footerLogo}/>}
            />
        )
    }
    if(footerLayout === "footer-layout-3"){
        return(
            <FooterThree Address={footerAddress}
            logo={<Logo3 logoPath = {footerLogo}/>}

            />
        )
    }
    if(footerLayout === "footer-layout-4"){
        return(
            <FooterFour Address={footerAddress}
            logo={<Logo4 logoPath = {footerLogo}/>}
            />
        )
    }
    }

export default LoadFooter;