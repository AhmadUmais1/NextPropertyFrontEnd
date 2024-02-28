import React, { useState } from "react";
import { Col, Container, Row } from "reactstrap";
import { FooterData } from "../../data/footerData";
import FooterThreeLink from "./elements/FooterThreeLink";
import FooterBlog from "./footerThreeElements/FooterBlog";
import FooterContactUsDetails from "./footerThreeElements/FooterContactUsDetails";
import SubFooterTwo from "./elements/SubFooterTwo";
import { Logo3 } from "../../components/elements/Logo";
const FooterThree = ({logo,Address,copyRights,columnFiveLabel,columnFiveData,about,slider,columnTwo, columnTwoData, columnFour, columnFourData,columnThree,columnThreeData}) => {
  const [isActive, setIsActive] = useState();
  return (
    <footer>
      <div className="footer footer-bg">
        <Container>
          <Row>
            <FooterContactUsDetails
             logo={logo || <Logo3 />}
             Address={Address}
             about={about}/>
            <Col xl="9">
              <Row>
                <FooterThreeLink value={FooterData.usefulLinks} isActive={isActive} setIsActive={setIsActive} colNum="3" columnTitle={columnTwo} columnData={columnTwoData}/>
                <FooterThreeLink value={FooterData.usefulLinks} isActive={isActive} setIsActive={setIsActive} colNum="2" columnTitle={columnThree} columnData={columnThreeData}/>
                <FooterThreeLink value={FooterData.usefulLinks} isActive={isActive} setIsActive={setIsActive} colNum="2" columnTitle={columnFour} columnData={columnFourData}/>
                <Col lg="3" xl="4">
                  <div className="footer-links">
                    <h5
                      className={`footer-title ${isActive === "subscribe" ? "active" : ""}`}
                      onClick={(e) => {
                        e.preventDefault();
                        setIsActive("subscribe");
                        isActive === "subscribe" && setIsActive();
                      }}>
                      {columnFiveLabel}
                      <span className="according-menu">
                        <i className="fas fa-chevron-down"></i>
                      </span>
                    </h5>
                    <div className={`footer-content ${isActive === "subscribe" ? "d-block" : "d-none d-md-block"}`}>
                      <p className="mb-0">{columnFiveData}</p>
                      <form>
                        <div className="input-group">
                          <input type="email" className="form-control" placeholder="Email Address" required />
                          <span className="input-group-apend">
                            <button type="submit" className="input-group-text" id="basic-addon2">
                              <i className="fas fa-paper-plane"></i>
                            </button>
                          </span>
                        </div>
                      </form>
                    </div>
                  </div>
                </Col>
              </Row>
              <FooterBlog slider={slider}/>
            </Col>
          </Row>
        </Container>
      </div>
      <SubFooterTwo copyRights={copyRights} />
    </footer>
  );
};

export default FooterThree;
