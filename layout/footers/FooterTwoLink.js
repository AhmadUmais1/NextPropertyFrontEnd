import Link from "next/link";
import React, { Fragment, useEffect, useState } from "react";
import { ChevronRight } from "react-feather";
import { Col } from "reactstrap";
import { getBottomFooterIcon } from "../../services/SiteInitService";
const FooterTwoLink = ({ value, isActive, setIsActive, liteFooter, columnTwo, columnTwoData, columnFourLabel, columnFourData }) => {
  const [bottomFooterDataIcons, setbottomFooterDataIcons] = useState([]);
  
  useEffect(() => {
    getBottomFooterIcon()
      .then((res) => {
        setbottomFooterDataIcons(res);
      })
      .catch(() => console.log("Error", error));
  }, []);

  console.log(columnTwo, "columnTwo");

  const linksData = value.title === "Tag" ? columnFourData : columnTwoData;
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

export default FooterTwoLink;