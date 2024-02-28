import Link from "next/link";
import React, { Fragment, useEffect, useState } from "react";
import { ChevronRight } from "react-feather";
import { Col } from "reactstrap";

const FooterThreeLink = ({ value, isActive, setIsActive, liteFooter, columnTitle, columnLinks }) => {
  const linksData = [];
  const title = columnTitle;

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
          {linksData && linksData.map((link, index) => (
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

export default FooterThreeLink;
