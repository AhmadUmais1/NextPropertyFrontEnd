import Link from "next/link";
import React from "react";
import { Container, Row } from "reactstrap";
import { FooterData } from "../../data/footerData";
import FooterContactUsDetails from "./elements/FooterContactUsDetails";
import FooterFourLink from "./FooterFourLink";
import { useEffect,useState } from "react";
import { getBottomFooterIcon } from "../../services/SiteInitService";
import { Logo4 } from "../../components/elements/Logo";
import FooterLink from "./elements/FooterLink";
const FooterFour = ({logo,Address,contactNo,mail,copyRights,columnOneLinks,columnTwo, columnTwoData, columnFour, columnFourData,columnThree,columnThreeData,footerFourColFive,footerFourColFiveData}) => {
  const [bottomFooterDataIcons, setbottomFooterDataIcons] = useState([]);
  useEffect(() => {
    getBottomFooterIcon()
      .then((res) => {
        setbottomFooterDataIcons(res);
      })
      .catch(() => console.log("Error", error));
      
  }, []);
  const [isActive, setIsActive] = useState();
  return (
    <footer className="footer-light">
      <div className="footer">
        <Container>
          <Row>
            <FooterContactUsDetails
             logo={logo || <Logo4 />}
              isActive={isActive}
              setIsActive={setIsActive}
              liteFooter="true"
              Address={Address}
              contactNo={contactNo}
              mail={mail}
              columnOneLinks={columnOneLinks}
            />

            <FooterFourLink value={FooterData.about} isActive={isActive} setIsActive={setIsActive} liteFooter={6} columnTitle={columnTwo} columnData={columnTwoData}/>
            <FooterFourLink value={FooterData.buy} isActive={isActive} setIsActive={setIsActive} liteFooter={6} columnTitle={columnThree} columnData={columnThreeData}/>
            <FooterFourLink value={FooterData.sell} isActive={isActive} setIsActive={setIsActive} liteFooter={6} columnTitle={columnFour} columnData={columnFourData}/>
            <FooterFourLink value={FooterData.relandEstate} isActive={isActive} setIsActive={setIsActive} liteFooter={6} columnTitle={footerFourColFive} columnData={footerFourColFiveData}/>
          </Row>
        </Container>
      </div>
      <div className="sub-footer sub-footer-dark">
        <Container>
          <Row>
            <div className="col-xl-6 col-md-6">
              <div className="footer-social sub-footer-link">
                <ul>
                {bottomFooterDataIcons.map((value, index) => (
                <li key={index}>
                  <a href={value.themeSocialUrl}>
                    <i className={value.themeSocialIcon}></i>
                  </a>
                </li>
                ))}

                 {/*  <li>
                    <a href="https://www.facebook.com/">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://accounts.google.com/">
                      <i className="fab fa-google"></i>
                    </a>
                  </li> */}
                </ul>
              </div>
            </div>
            <div className="col-xl-6 col-md-6 text-end">
              <div className="copy-right">
                <p className="mb-0">
                {copyRights}
                </p>
              </div>
            </div>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default FooterFour;
