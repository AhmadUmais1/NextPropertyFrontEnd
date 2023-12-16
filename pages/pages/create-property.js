import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import NavbarTwo from "../../layout/headers/NavbarTwo";

export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });
import FooterOne from "../../layout/footers/FooterOne";
import Breadcrumb from "../../layout/Breadcrumb/Breadcrumb";
import BodyContent from "../../components/pages/userPanel";

const CreateProperty = () => {
  return (
    <>
      <NavbarTwo />
      <Breadcrumb />
      <BodyContent active={"CreateProperty"} />
      <FooterOne />
    </>
  );
};

export default CreateProperty;
