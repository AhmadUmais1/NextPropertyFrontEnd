/**
 * It returns a TopBar component and a header component with a MainNav component inside
 * @returns The NavbarTwo component is being returned.
 */
import React, { useState, useEffect } from "react";
import { Container, Row } from "reactstrap";
import useStickyBar from "../../utils/useStickyBar";
import MainNav from "./elements/MainNav";
import TopBar from "./elements/TopBar";
import { getContactNumberData } from "../../services/SiteInitService";

const NavbarTwo = ({ logo }) => {
  const [contactNo, setContactNo] = useState("");
  const [fix, setFix] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const contactNumber = await getContactNumberData();
        setContactNo(contactNumber);
      } catch (error) {
        console.error("Error fetching contact number:", error);
      }
    };

    fetchData();
  }, []);

  const handleStickyBar = () => {
    setFix();
  };

  return (
    <>
      <TopBar logo={logo} />
      <header className={`header-3 fixed-header ${fix ? "fixed" : ""}`}>
        <Container>
          <Row>
            <div className="col-12">
              <div className="header-layout-3">
                <MainNav icon={false} />
                <div className="contact-number">
                  <i className="fas fa-phone-alt"></i>
                  <span className="font-roboto">{contactNo}</span>
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </header>
    </>
  );
};

export default NavbarTwo;
