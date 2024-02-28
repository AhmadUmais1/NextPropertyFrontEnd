import React, { useState,useEffect } from "react";
import { Container, Row } from "reactstrap";
import { Logo } from "../../components/elements/Logo";
import { FooterData } from "../../data/footerData";
import FooterBlog from "./elements/FooterBlog";
import FooterContactUsDetails from "./elements/FooterContactUsDetails";
import FooterLink from "./elements/FooterLink";
import FooterMap from "./elements/FooterMap";
import SubFooter from "./elements/SubFooter";
const FooterOne = ({logo,Address,contactNo,about,mail,copyRights,googleKey,Latitude,Longtitude,mapZoom,columnOneLinks,columnTwo,columnTwoData,columnFourData,columnFourLabel}) => {
  const [isActive, setIsActive] = useState();
  
  return (
    <footer className='footer-brown'>
      <div className='footer footer-custom-col'>
        <Container>
          <Row className='row'>
            <FooterContactUsDetails Address={Address} contactNo={contactNo} mail={mail} about={about} setIsActive={setIsActive} logo={logo || <Logo />} columnOneLinks={columnOneLinks}/>
            <FooterLink value={FooterData.about} isActive={isActive} setIsActive={setIsActive} columnTwo={columnTwo} columnTwoData={columnTwoData}/>
            <FooterMap isActive={isActive} setIsActive={setIsActive} googleKey={googleKey} Latitude={Latitude} Longtitude={Longtitude} mapZoom={mapZoom} />
            <FooterLink value={FooterData.tag} isActive={isActive} setIsActive={setIsActive} columnFourData={columnFourData} columnFourLabel={columnFourLabel}/>
            <FooterBlog isActive={isActive} setIsActive={setIsActive} img={["/assets/images/footer/1.jpg", "/assets/images/footer/2.jpg"]} />
          </Row>
        </Container>
      </div>
      <SubFooter 
      copyRights={copyRights}
      />
    </footer>
  );
};
export default FooterOne;
