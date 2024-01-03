import Link from "next/link";
import React from "react";
import { Col, Row, Container } from "reactstrap";
import { Logo4 } from "../../components/elements/Logo";
import MainNav from "./elements/MainNav";
import RightNavTwo from "./elements/RightNavTwo";

const NavbarFour = ({logo}) => {
  return (
    <header className="header-4">
      <Container>
        <Row>
          <div className="col">
            <div className="menu">
              <div className="brand-logo">
                
              </div>
              {logo || <Logo4/>}
              <MainNav />
              <RightNavTwo />
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default NavbarFour;
