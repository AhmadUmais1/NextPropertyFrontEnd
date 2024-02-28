import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import NavbarThree from "../../layout/headers/NavbarOne";
//export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });
import FooterThree from "../../layout/footers/FooterThree";
import LoadFooter from "../../layout/footers/LoadFooter";
import Breadcrumb from "../../layout/Breadcrumb/Breadcrumb";
import BodyContent from "../../components/pages/otherPages/aboutUs1";
import LoadHeader from "../../layout/headers/LoadHeader";
import { getSiteInitData } from "../../services/SiteInitService";
const AboutUs1 = (props) => {
  return (
    <>
      <LoadHeader data={props.siteInitData}/>
      <Breadcrumb />
      <BodyContent />
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

export default AboutUs1;
