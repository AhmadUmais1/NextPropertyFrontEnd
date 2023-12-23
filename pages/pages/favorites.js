import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import LoadHeader from "../../layout/headers/LoadHeader";
export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });
import FooterOne from "../../layout/footers/FooterOne";
import Breadcrumb from "../../layout/Breadcrumb/Breadcrumb";
import BodyContent from "../../components/pages/userPanel";

const Favorites = () => {
  return (
    <>
      <LoadHeader />
      <Breadcrumb />
      <BodyContent active={"Favorites"} />
      <FooterOne />
    </>
  );
};

export default Favorites;
