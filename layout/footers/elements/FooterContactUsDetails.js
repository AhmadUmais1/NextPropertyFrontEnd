import React from "react";
import { Col } from "reactstrap";

const FooterContactUsDetails = ({ isActive, setIsActive, logo, liteFooter, Address, contactNo, mail, about,columnOneLinks }) => {
  console.log(columnOneLinks,"columnOneLinks")
  const contactDetails = [
    { iconsClass: "fas fa-map-marker-alt", detail: ", Albany, Newyork." },
  ];
  const contact = [{ iconsClass: "fas fa-phone-alt", detail: " - 457 - 5181" }];
  const email = [{ iconsClass: "fas fa-envelope", detail: "Contact@gmail.com" }];
  const description = [{ iconsClass: "Fas Fa", detail: "This home provides entertaining spaces with a kitchen opening..." }];
  
  return (
    <Col xl={liteFooter ? "3" : "2"} md='6' className='order-xl'>
      <div className='footer-links footer-details'>
        <h5
          className='footer-title d-md-none'
          onClick={(e) => {
            e.preventDefault();
            setIsActive("ContactUs");
            isActive === "ContactUs" && setIsActive();
          }}>
          Contact us
          <span className='according-menu'>
            <i className='fas fa-chevron-down'></i>
          </span>
        </h5>
        <div className={`footer-content ${isActive === "ContactUs" ? "d-block" : "d-none d-md-block"}`}>
          {logo}
           {about && <p>{about}</p>}
           <div className='footer-contact'>
            <ul>
               {/* {Address
                ? (
                  <li>
                    <i className="fas fa-map-marker-alt"></i>
                    {Address}
                  </li>
                )
                :  */} {columnOneLinks.map((value, i) => (
                  <li key={i}>
                    <i className={value.icon}></i>
                    {value.text}
                  </li>
                ))}
            </ul>
            </div>
              <div/>
              {/* {contactNo
                ? (
                  <li>
                    <i className="fas fa-phone-alt"></i>
                    {contactNo}
                  </li>
                )
                :  */}{/* {columnOneLinks.map((value, i) => (
                  <li key={i}>
                    <i className={value.icon}></i>
                    {value.text}
                  </li>
                ))}
            </ul>
            <ul> */}
              {/* {mail
                ? (
                  <li>
                    <i className="fas fa-envelope"></i>
                    {mail}
                  </li>
                )
                : */} {/* {columnOneLinks.map((value, i) => (
                  <li key={i}>
                    <i className={value.icon}></i>
                    {value.text}
                  </li>
                ))}
            </ul>
          </div> */}
{/*           {about && <p>{about}</p>}
 */}         {/*  <ul>
            
              {about
                ? (
                  <li>
                    <i className="fas fa"></i>
                    {about}
                  </li>
                )
                : description.map((value, i) => (
                  <li key={i}>
                    <i className={value.iconsClass}></i>
                    {value.detail}
                  </li>
                ))}
            </ul> */}
          {/* <ul>
          {about && (
            <div className='footer-description'>
              {description.map((value, i) => (
                <p key={i}>
                  <i className={value.iconsClass}></i>
                  {value.detail}
                </p>
              ))}
            </div>
          )}
          </ul> */}
        </div>
      </div>
    </Col>
  );
};

export default FooterContactUsDetails;
