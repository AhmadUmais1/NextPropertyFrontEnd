import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import FooterOne from "../../layout/footers/FooterOne";
import LoadHeader from "../../layout/headers/LoadHeader";
export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });
import Breadcrumb from "../../layout/Breadcrumb/Breadcrumb";
import BodyContent from "../../components/modules/about";

const button = () => {
  return (
    <>
      <LoadHeader />
      <Breadcrumb />
      <BodyContent />
      <FooterOne />
    </>
  );
};

export default button;
