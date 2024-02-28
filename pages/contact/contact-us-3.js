/**
 * It takes a locale and an array of namespaces, and returns an object with the translations for those
 * namespaces
 * @returns The return value of the function is an object with a props property.
 */
import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import NavbarTwo from "../../layout/headers/NavbarTwo";
import LoadFooter from "../../layout/footers/LoadFooter";
export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });
import FooterOne from "../../layout/footers/FooterOne";
import Breadcrumb from "../../layout/Breadcrumb/Breadcrumb";
import BodyContent from "../../components/contact/contactUs3";
import LoadHeader from "../../layout/headers/LoadHeader";
const ContactUs3 = () => {
  return (
    <>
      <LoadHeader />
      <Breadcrumb />
      <BodyContent />
      <LoadFooter />
    </>
  );
};

export default ContactUs3;
