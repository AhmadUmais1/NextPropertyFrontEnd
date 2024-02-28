import React, { useState } from "react";
import { Col, Container, Row } from "reactstrap";
import { FooterData } from "../../data/footerData";
import FooterBlog from "./elements/FooterBlog";
import { Logo2 } from "../../components/elements/Logo";
import FooterContactUsDetails from "./elements/FooterContactUsDetails";
// import FooterContactDetails from "./elements/FooterContactDetails";
import FooterMap from "./elements/FooterMap";
import FooterTwoLink from "./FooterTwoLink";
import SubFooter from "./elements/SubFooter";

const FooterTwo = ({logo,Address,contactNo,mail,copyRights,about,googleKey,Latitude,Longtitude,mapZoom, columnOneLinks,columnTwo,columnTwoData,columnFourLabel,columnFourData}) => {
  const [isActive, setIsActive] = useState();
  return (
    <footer className="footer-dark">
      <div className="footer footer-custom-col">
        <Container>
          <Row>
            <FooterContactUsDetails
              isActive={isActive}
              setIsActive={setIsActive}
              logo={logo || <Logo2 />}
              Address={Address}
              contactNo={contactNo}
              mail={mail}
              about={about}
              columnOneLinks={columnOneLinks}
            />
            <FooterTwoLink value={FooterData.about} isActive={isActive} setIsActive={setIsActive} columnTwo={columnTwo} columnTwoData={columnTwoData}/>
            <FooterMap isActive={isActive} setIsActive={setIsActive} googleKey={googleKey} Latitude={Latitude} Longtitude={Longtitude} mapZoom={mapZoom} />
            <FooterTwoLink value={FooterData.tag} isActive={isActive} setIsActive={setIsActive} columnFourLabel={columnFourLabel} columnFourData={columnFourData}/>
            <FooterBlog isActive={isActive} setIsActive={setIsActive} img={["/assets/images/footer/4.jpg", "/assets/images/footer/5.jpg"]} />
          </Row>
        </Container>
      </div>
      <SubFooter values={"sub-footer-dark"} 
       copyRights={copyRights}/>
    </footer>
  );
};
export default FooterTwo;
