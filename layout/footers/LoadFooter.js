import FooterOne from "./FooterOne";
import FooterTwo from "./FooterTwo";
import FooterThree from "./FooterThree";
import FooterFour from "./FooterFour";
import axios from "axios";
import React from "react";
import { useState,useEffect } from "react";
function LoadFooter (){
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
    },[])
    let footerLayout = apiData?.data.footerData.theme_footer_layout_id
    console.log(".....footerresponse",footerLayout)
    if(footerLayout == "footer-layout-1"){
        return(
            <FooterOne/>
        )
    }
    if (footerLayout == "footer-layout-2"){
        return(
            <FooterTwo/>
        )
    }
    if(footerLayout == "footer-layout-3"){
        return(
            <FooterThree/>
        )
    }
    if(footerLayout == "footer-layout-4"){
        return(
            <FooterFour/>
        )
    }
    
}
export default LoadFooter;