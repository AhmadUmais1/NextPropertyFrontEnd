/**
 * It maps through the RightNavMenuItem array and returns the appropriate component based on the title
 * of the object
 * @returns A list of items that are being mapped over.
 */
import Link from "next/link";
import React, { Fragment } from "react";
import { User } from "react-feather";
import { useState,useEffect } from "react";
import Cart from "./rightNavComponents/Cart";
import Currency from "./rightNavComponents/Currency";
import Language from "./rightNavComponents/Language";
import { getRightNavData } from "../../../services/SiteInitService";
const RightNav = () =>{
  const [rightNavItems, setRightNavItems] = useState([]);
  useEffect(() => {
    getRightNavData()
      .then((res) => {
        setRightNavItems(res);
      })
      .catch((error) => console.log("Error", error));
}, []);

  return (
    <ul className="header-right">
      <li className="right-menu">
        <ul className="nav-menu">
          {rightNavItems.map((value, i) => (
            <Fragment key={i}>
              {value.title === "language" && <Language value={value} />}
              {value.title === "cart" && <Cart />}
              {value.title === "currency" && <Currency value={value} />}
              {value.title === "user" && (
                <li className="dropdown">
                  <Link href="/pages/other-pages/login">
                    <User />
                  </Link>
                </li>
              )}
            </Fragment>
          ))}
        </ul>
      </li>
    </ul>
  );
};

export default RightNav;
