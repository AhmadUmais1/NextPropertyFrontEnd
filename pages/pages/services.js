import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import BodyContent from "../../components/pages/otherPages/services";
import Breadcrumb from "../../layout/Breadcrumb/Breadcrumb";
import FooterThree from "../../layout/footers/FooterThree";
import NavbarTwo from "../../layout/headers/NavbarTwo";

export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });

const Services = () => {
  return (
    <>
      <NavbarTwo />
      <Breadcrumb />
      <BodyContent />
      <FooterThree />
    </>
  );
};

export default Services;
