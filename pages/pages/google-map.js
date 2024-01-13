/**
 * It fetches the translations from the server and passes them to the component as props
 * @returns The GoogleMap component is being returned.
 */
import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import LoadHeader from "../../layout/headers/LoadHeader";
import LoadFooter from "../../layout/footers/LoadFooter";
//export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });
import Breadcrumb from "../../layout/Breadcrumb/Breadcrumb";
import FooterOne from "../../layout/footers/FooterOne";
import { getSiteInitData } from "../../services/SiteInitService";
import MapView from "../../components/listing/gridView/map/MapView";
import Google from "../../components/listing/gridView/map/GoogleMap";

const GoogleMap = (props) => {
  return (
    <>
      <LoadHeader data={props.siteInitData}/>
      <Breadcrumb />
      <MapView gridType={"grid-view"} side={"right"}>
        <Google />
      </MapView>
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

export default GoogleMap;
