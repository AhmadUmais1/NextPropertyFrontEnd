import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import LoadHeader from "../../layout/headers/LoadHeader";
import LoadFooter from "../../layout/footers/LoadFooter";
//export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });
import FooterOne from "../../layout/footers/FooterOne";
import Breadcrumb from "../../layout/Breadcrumb/Breadcrumb";
import PropertyCompare from "../../components/pages/userPanel/compareproperty";
import { getSiteInitData } from "../../services/SiteInitService";
const CompareProperty = (props) => {
  return (
    <>
      <LoadHeader data={props.siteInitData}/>
      <Breadcrumb />
      <PropertyCompare />
      {/*<FooterOne />*/}
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
export default CompareProperty;
