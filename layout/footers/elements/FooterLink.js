import Link from "next/link";
import React, { Fragment } from "react";
import { ChevronRight } from "react-feather";
import { Col } from "reactstrap";

const FooterLink = ({ value, isActive, setIsActive, liteFooter }) => {
  /* if (!value || typeof value !== "object") {
    return null; 
  }
 */
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
          {value.title}
          <span className="according-menu">
            <i className="fas fa-chevron-down"></i>
          </span>
        </h5>
        <ul className={`footer-content ${isActive === value.title ? "d-block" : "d-none d-md-block"}`}>
          {value.children.map((childValue, i) => (
            <Fragment key={i}>
              {liteFooter === i ? (
                ""
              ) : (
                <li>
                  <Link href={childValue.link}>
                    {liteFooter && <ChevronRight />}
                    {childValue.title}
                  </Link>
                </li>
              )}
            </Fragment>
          ))}
        </ul>
      </div>
    </Col>
  );
};

export default FooterLink;
