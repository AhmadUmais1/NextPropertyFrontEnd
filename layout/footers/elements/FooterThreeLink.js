import Link from "next/link";
import React, { Fragment } from "react";
import { ChevronRight } from "react-feather";
import { Col } from "reactstrap";

const FooterThreeLink = ({ value, isActive, setIsActive, liteFooter, colNum, columnTitle, columnData }) => {
  const defaultData = [{ text: 'Please enter data correctly', url: 'Please enter data correctly' }];
  const defaultTitle = 'Please enter title correctly';

  return (
    <Col xl={colNum} md="3" className={value.title === "Tag" ? "order-lg" : ""}>
      <div className="footer-links footer-left-space">
        <h5
          className="footer-title"
          onClick={(e) => {
            e.preventDefault();
            setIsActive(value.title);
            isActive === value.title && setIsActive();
          }}>
          {columnTitle ? String(columnTitle) : defaultTitle}
          <span className="according-menu">
            <i className="fas fa-chevron-down"></i>
          </span>
        </h5>
        <ul className={`footer-content ${isActive === value.title ? "d-block" : "d-none d-md-block"}`}>
          {(columnData && columnData.length > 0 ? columnData : defaultData).map((value, i) => (
            <Fragment key={i}>
              {value.url && ( 
                <li>
                  <Link href={value.url}>
                    {liteFooter && <ChevronRight />}
                    {value.text}
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

export default FooterThreeLink;
