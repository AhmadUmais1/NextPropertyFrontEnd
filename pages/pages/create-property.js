import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import LoadHeader from "../../layout/headers/LoadHeader";
export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });
import FooterOne from "../../layout/footers/FooterOne";
import Breadcrumb from "../../layout/Breadcrumb/Breadcrumb";
import BodyContent from "../../components/pages/userPanel";

const CreateProperty = () => {
  return (
    <>
      <LoadHeader />
      <Breadcrumb />
      <BodyContent active={"CreateProperty"} />
      <FooterOne />
    </>
  );
};

export default CreateProperty;
