/* A code snippet. */
import React from "react";
import dynamic from "next/dynamic";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import LoadHeader from "../../layout/headers/LoadHeader";
import LoadFooter from "../../layout/footers/LoadFooter";
//export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });
import { getSiteInitData } from "../../services/SiteInitService";
import Breadcrumb from "../../layout/Breadcrumb/Breadcrumb";
const DynamicBodyContent = dynamic(() => import("../../components/pages/portfolio/Masonry/index"), {
  ssr: false,
});
const Masonry3 = (props) => {
  return (
    <>
      <LoadHeader data={props.siteInitData} />
      <Breadcrumb />
      <DynamicBodyContent masonryGrid={3} />
      <LoadFooter data={props.siteInitData}/>
{/*       <FooterOne />

 */}    </>
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
export default Masonry3;
