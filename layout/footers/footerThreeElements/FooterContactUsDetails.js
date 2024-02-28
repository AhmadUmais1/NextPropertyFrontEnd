import Link from "next/link";
import React from "react";
import { Col } from "reactstrap";
import { Logo3 } from "../../../components/elements/Logo";

const FooterContactUsDetails = ({logo,about}) => {
  return (
    <Col xl="3">
      <div className="footer-details text-center">
        {logo || <Logo3 />}
        <p>{about}</p>
        <ul className="icon-list">
          <li>
            <Link href="/contact/contact-us-3">
              <i className="fas fa-map-marker-alt"></i>
            </Link>
          </li>
          <li>
            <Link href="/contact/contact-us-3">
              <i className="fas fa-phone-alt"></i>
            </Link>
          </li>
          <li>
            <Link href="/pages/other-pages/signup">
              <i className="fas fa-envelope"></i>
            </Link>
          </li>
          <li>
            <Link href="/contact/contact-us-3">
              <i className="fas fa-globe"></i>
            </Link>
          </li>
          <li>
            <Link href="/contact/contact-us-3">
              <i className="fas fa-wifi"></i>
            </Link>
          </li>
        </ul>
      </div>
    </Col>
  );
};

export default FooterContactUsDetails;
