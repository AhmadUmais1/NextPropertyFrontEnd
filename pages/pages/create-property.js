import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import NavbarTwo from "../../layout/headers/NavbarTwo";

export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });
import FooterThree from "../../layout/footers/FooterThree";
import Breadcrumb from "../../layout/Breadcrumb/Breadcrumb";
import BodyContent from "../../components/pages/userPanel";

const CreateProperty = () => {
  return (
    <>
      <NavbarTwo />
      <Breadcrumb />
      <BodyContent active={"CreateProperty"} />
      <FooterThree />
    </>
  );
};

export default CreateProperty;
