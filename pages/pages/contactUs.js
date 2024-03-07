import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import LoadHeader from "../../layout/headers/LoadHeader";
import LoadFooter from "../../layout/footers/LoadFooter";
import FooterOne from "../../layout/footers/FooterOne";
import Breadcrumb from "../../layout/Breadcrumb/Breadcrumb";
import BodyContent from "../../components/contact/contactUs1";
/* import { fetchContactUsData } from "../../contact-us-data/apidata";  
 */import { getSiteInitData } from "../../services/SiteInitService";
const ContactUs1 = ({ siteInitData/* , contactUsData */ }) => {
/*   console.log(contactUsData,"siteinit")
 */  return (
    <>
      <LoadHeader data={siteInitData} />
      <Breadcrumb /* contactUsData={contactUsData} */ /> 
      <BodyContent /* contactUsData={contactUsData} */ /> 
      {/*<FooterOne />*/}
      <LoadFooter data={siteInitData} />
    </>
  );
};

export async function getStaticProps({ locale }) {
  const [siteInitData/* , contactUsData */] = await Promise.all([
    getSiteInitData(),
/*     fetchContactUsData()
 */  ]);

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      siteInitData,
      /* contactUsData */
    }
  };
}

export default ContactUs1;
