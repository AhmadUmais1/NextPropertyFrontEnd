import Link from "next/link";
import React, { Fragment, useEffect, useState } from "react";
import { ChevronRight } from "react-feather";
import { Col } from "reactstrap";
import { getBottomFooterIcon } from "../../services/SiteInitService";

const FooterLink = ({ value, isActive, setIsActive, liteFooter, columnTwo, columnTwoData, columnFourLabel, columnFourData }) => {
  const [bottomFooterDataIcons, setbottomFooterDataIcons] = useState([]);
  const [linksData, setLinksData] = useState([]);

  useEffect(() => {
    getBottomFooterIcon()
      .then((res) => {
        setbottomFooterDataIcons(res);
      })
      .catch((error) => console.log("Error", error));
  }, []);

  useEffect(() => {
    if (!linksData || linksData.length === 0) {
      setLinksData([{ text: 'Please enter data correctly', url: 'Please enter data correctly' }]);
    } else {
      setLinksData(value.title === "Tag" ? columnFourData : columnTwoData);
    }
  }, [value.title, columnTwoData, columnFourData]);


  const title = value.title === "Tag" ? columnFourLabel : columnTwo;

  return (
    <Col xl={value.title === "Useful Links" ? "3" : "2"} md="3" className={value.title === "Tag" ? "order-lg" : ""}>
      <div className="footer-links footer-left-space">
        <h5
          className="footer-title"
          onClick={(e) => {
            e.preventDefault();
            setIsActive(value.title);
            isActive === value.title && setIsActive();
          }}>
          {title}
          <span className="according-menu">
            <i className="fas fa-chevron-down"></i>
          </span>
        </h5>
        <ul className={`footer-content ${isActive === value.title ? "d-block" : "d-none d-md-block"}`}>
          {linksData.map((link, index) => (
            <Fragment key={index}>
              <li>
                <Link href={link.url}>
                  {liteFooter && <ChevronRight />}
                  {link.text}
                </Link>
              </li>
            </Fragment>
          ))}
        </ul>
      </div>
    </Col>
  );
};

export default FooterLink;
