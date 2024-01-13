/**
 * It renders a dropdown menu with nested submenus
 * @returns A dropdown menu with a title and a list of items.
 */
import React from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import parse from "html-react-parser"

import useMobileSize from "../../../../utils/useMobileSize";
import { useRouter } from "next/router";
import { Clipboard, Home, Layers, MapPin, User, Zap } from "react-feather";

const DropdownMenus = ({ navTitle, isOpen, setIsOpen, isOpenChild, setIsOpenChild, isOpenNestedChild, setIsOpenNestedChild, icon }) => {
  const { t } = useTranslation("common");
  const router = useRouter();
  // get window width
  const mobileSize = useMobileSize();
  const options = {
    htmlparser2: {
      lowerCaseTags: false,
    },
  };
  const parsedIcon = navTitle.icon ? parse("<Home>",options) : null;
  //console.log(parsedIcon);
  //console.log(navTitle.icon);

  // const getNodes = (str) => new DOMParser().parseFromString(str, "text/html").body.childNodes;
   
  //  const createJSX = (str) => {
  //    const nodes = getNodes(str);
  //    return Array.from(nodes).map((node, index) => <React.Fragment key={index}>{node}</React.Fragment>);
  //  };

  //  if(navTitle.icon != ''){
  //   console.log(createJSX(navTitle.icon));
  //   //navTitle.icon = createJSX(navTitle.icon);
  //  }

  //navTitle.icon  = React.createElement('Home');
  return (
    <li className="dropdown">
      
      {/* menuItems : HOME, LISTING, PROPERTY, MODULES, AGENT, CONTACT */}
      
      {(navTitle.path !== undefined) ? (
        <Link href={navTitle.path}>
          {!mobileSize && icon && parsedIcon}
          
        
        {navTitle.title}
        {navTitle.tag && <span className="label">{navTitle.tag}</span>}
        </Link>
      // <a href={(navTitle.path !== undefined)?navTitle.path.path:""}
      //   className={`nav-link menu-title ${isOpen === navTitle.title ? "active" : ""}`}
      //   >
      //   {/* {!mobileSize && icon && navTitle.icon} */}
      //   {t(navTitle.title)}
      //   <span className="according-menu">{isOpen === navTitle.title ? "-" : "+"}</span>if
      // </a>
    

      

      ):(
        <a
        className={`nav-link menu-title ${isOpen === navTitle.title ? "active" : ""}`}
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(navTitle.title);
          isOpen === navTitle.title && setIsOpen();
        }}>
        {!mobileSize && icon && parsedIcon}
        {t(navTitle.title)}
        <span className="according-menu">{isOpen === navTitle.title ? "-" : "+"}</span>
      </a>        
      )}
      
      {navTitle.children.length > 0 ? (
      <ul className={`nav-submenu menu-content ${mobileSize && isOpen === navTitle.title ? "d-block" : "d-none d-xl-block"}`}>
        {navTitle.children.map((navList, index) => (
          <li key={index}>
            {navList.type === "link" ? (
              <>
                {navList.path !== router.pathname ? (
                  <Link href={navList.path}>
                    {navList.title}
                    {navList.tag && <span className="label">{navList.tag}</span>}
                    {navList.icon && (
                      <span className="icon-trend label">
                        <i className="fas fa-bolt"></i>
                      </span>
                    )}
                  </Link>
                ) : (
                  <a>
                    {navList.title}
                    {navList.tag && <span className="label">{navList.tag}</span>}
                    {navList.icon && (
                      <span className="icon-trend label">
                        <i className="fas fa-bolt"></i>
                      </span>
                    )}
                  </a>
                )}
              </>
            ) : (
              <>
                <a
                  className="submenu-title"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsOpenChild(navList.title);
                    isOpenChild === navList.title && setIsOpenChild();
                  }}>
                  {navList.title}
                  <span className="according-menu">{navList.type === "sub" && (isOpenChild === navList.title ? "-" : "+")}</span>
                </a>
                <ul className={`nav-sub-childmenu level1 ${mobileSize && isOpenChild === navList.title ? "d-block" : ""}`}>
                  {navList.type === "sub" &&
                    navList.children.map((childNavList, index) => (
                      <li key={index}>
                        {childNavList.path ? (
                          <Link
                            href={childNavList.path}
                            className={childNavList.type === "sub" ? "submenu-title" : ""}
                            onClick={() => {
                              setIsOpenNestedChild(childNavList.title);
                              isOpenNestedChild === childNavList.title && setIsOpenNestedChild();
                            }}>
                            {childNavList.title}
                            <span className="according-menu">{childNavList.type === "sub" && (isOpenNestedChild === childNavList.title ? "-" : "+")}</span>
                          </Link>
                        ) : (
                          <a
                            className={childNavList.type === "sub" ? "submenu-title" : ""}
                            onClick={() => {
                              setIsOpenNestedChild(childNavList.title);
                              isOpenNestedChild === childNavList.title && setIsOpenNestedChild();
                            }}>
                            {childNavList.title}
                            <span className="according-menu">{childNavList.type === "sub" && (isOpenNestedChild === childNavList.title ? "-" : "+")}</span>
                          </a>
                        )}
                        {childNavList.type === "sub" && (
                          <ul className={`nav-sub-childmenu submenu-content level2  ${mobileSize && isOpenNestedChild === childNavList.title ? "d-block" : ""}`}>
                            {childNavList.type === "sub" &&
                              childNavList.children.map((nestedChildNavList, index) => (
                                <li key={index}>
                                  <Link href={nestedChildNavList.path}>{nestedChildNavList.title}</Link>
                                </li>
                              ))}
                          </ul>
                        )}
                      </li>
                    ))}
                </ul>
              </>
            )}
          </li>
        ))}
      </ul>
      ):""}
    </li>
  );
};

export default DropdownMenus;
