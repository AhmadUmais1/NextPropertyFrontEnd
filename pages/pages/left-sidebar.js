

/**
 * It takes a locale and an array of namespaces and returns an object with the translations for those
 * namespaces
 * @returns an object with a property of props. The props property is an object with a property of
 * ...(await serverSideTranslations(locale, ['common']))
 */
import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Breadcrumb from "../../layout/Breadcrumb/Breadcrumb";
import BodyContent from "../../components/pages/blogPage/sidebarPage";
//import FooterOne from "../../layout/footers/FooterOne";
import LoadHeader from "../../layout/headers/LoadHeader";
import LoadFooter from "../../layout/footers/LoadFooter";
import { getSiteInitData } from "../../services/SiteInitService";
//export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });

const LeftSidebar = (props) => {
  return (
    <>
      <LoadHeader data={props.siteInitData}/>
      <Breadcrumb />
      <BodyContent side={"left"} />
{/*       <FooterOne />*/}
      <LoadFooter data={props.siteInitData}/>
    </>
  );
};
export async function getStaticProps({ locale }) {

  const siteInitData = await getSiteInitData();

  return {
    props: { 
      ...(await serverSideTranslations(locale, ["common"])),
      siteInitData
  } 
  }
}

export default LeftSidebar;
