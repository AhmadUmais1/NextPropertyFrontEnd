import FooterOne from "./FooterOne";
import FooterTwo from "./FooterTwo";
import FooterThree from "./FooterThree";
import { Logo,Logo2,Logo3,Logo4,Logo5,Logo6,Logo7,Logo8,Logo9 } from "../../components/elements/Logo";
import FooterFour from "./FooterFour";
import { getGoogleMaps } from "../../services/SiteInitService";
import React from "react";
import { getFooterData } from "../../services/SiteInitService";
import { getBottomFooter } from "../../services/SiteInitService";
function LoadFooter (props){
    const footerData = getFooterData(props.data);
    const footerContactNo = footerData?.theme_contact_no
    const column2 = footerData?.column2Label
    const column1Links = footerData?.column1Links     
    const column1LinksIcon = column1Links?.icon 
    const column2Data = footerData?.column2Links
    const column3 = footerData?.column3Label
    const column3Data = footerData?.column3Links
    const column4 = footerData?.column4Label
    const column4Data = footerData?.column4Links
    const footerLayout = footerData?.footerLayoutId
    const footerLogo = footerData?.footerLogo
    const Lat = footerData?.mapLat
    const Long = footerData?.mapLong
    const Zoom = footerData?.mapZoom
    const footerAddress = footerData?.theme_address
    const emailAddress = footerData?.theme_email
    const aboutCompany = footerData?.aboutCompany
    const column5Label = footerData?.column5Label
    const column5Data = footerData?.column5Description
    const col5Footer4 = footerData?.column5Label
    const col5Footer4Data = footerData?.column5Links
    const footerSlider = footerData?.footerSliderLabel
    const bottomFooterData = getBottomFooter(props.data)
    const bottomFooterCopyRights = bottomFooterData?.themeCopyRights
    const Map = getGoogleMaps(props.data)
    const mapKey = Map?.googleMapKey
    console.log(Zoom)
    if (footerLayout === "footer-layout-1"){
        return(
            <FooterOne 
            Address={footerAddress}
            logo={<Logo logoPath = {footerLogo}/>}
            contactNo = {footerContactNo}
            mail = {emailAddress}
            about = {aboutCompany}
            copyRights = {bottomFooterCopyRights}
            googleKey = {mapKey}
            Latitude = {Lat}
            Longtitude = {Long}
            mapZoom = {Zoom}
            columnTwo = {column2}
            columnTwoData = {column2Data}
            columnFiveLabel = {column5Label}
            slider = {footerSlider}
            columnFourLabel = {column4}
            columnFourData = {column4Data}
            columnOneLinks = {column1Links}
            />
        )
    }
    if (footerLayout === "footer-layout-2"){
        return(
            <FooterTwo Address={footerAddress}
            logo={<Logo2 logoPath = {footerLogo}/>}
            contactNo = {footerContactNo}
            mail = {emailAddress}
            about = {aboutCompany}
            copyRights = {bottomFooterCopyRights}
            googleKey = {mapKey}
            Latitude = {Lat}
            Longtitude = {Long}
            mapZoom = {Zoom}
            columnTwo = {column2}
            columnTwoData = {column2Data}
            columnFiveLabel = {column5Label}
            columnFourLabel = {column4}
            columnFourData = {column4Data}
            slider = {footerSlider}
            columnOneLinks={column1Links}
            />
        )
    }
    if(footerLayout === "footer-layout-3"){
        return(
            <FooterThree Address={footerAddress}
            logo={<Logo3 logoPath = {footerLogo}/>}
            about = {aboutCompany}
            copyRights = {bottomFooterCopyRights}
            googleKey = {mapKey}
            Latitude = {Lat}
            Longtitude = {Long}
            mapZoom = {Zoom}
            columnTwo = {column2}
            columnTwoData = {column2Data}
            columnFiveLabel = {column5Label}
            columnFiveData = {column5Data}
            slider = {footerSlider}
            columnThree = {column3} 
            columnThreeData = {column3Data}
            columnFour = {column4}
            columnFourData = {column4Data}
            columnOneLinks = {column1Links}
            />
        )
    }
    if(footerLayout === "footer-layout-4"){
        return(
            <FooterFour Address={footerAddress}
            logo={<Logo4 logoPath = {footerLogo}/>}
            contactNo = {footerContactNo}
            mail = {emailAddress}
            about = {aboutCompany}
            copyRights = {bottomFooterCopyRights}
            googleKey = {mapKey}
            Latitude = {Lat}
            Longtitude = {Long}
            mapZoom = {Zoom}
            columnTwo = {column2}
            columnTwoData = {column2Data}
            footerFourColFive = {col5Footer4}
            footerFourColFiveData = {col5Footer4Data}
            columnThree = {column3} 
            columnThreeData = {column3Data}
            columnFour = {column4}
            columnFourData = {column4Data}
            slider = {footerSlider}
            columnOneLinks = {column1Links}
            />
        )
    }
    }

export default LoadFooter;