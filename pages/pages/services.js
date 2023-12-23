import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import BodyContent from "../../components/pages/otherPages/services";
import Breadcrumb from "../../layout/Breadcrumb/Breadcrumb";
import FooterOne from "../../layout/footers/FooterOne";
import LoadHeader from "../../layout/headers/LoadHeader";

export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });

const Services = () => {
  return (
    <>
      <LoadHeader />
      <Breadcrumb />
      <BodyContent />
      <FooterOne />
    </>
  );
};

export default Services;
