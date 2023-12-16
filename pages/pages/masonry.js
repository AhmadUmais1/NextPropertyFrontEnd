/* A code snippet. */
import React from "react";
import dynamic from "next/dynamic";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import NavbarTwo from "../../layout/headers/NavbarTwo";

export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });
import FooterOne from "../../layout/footers/FooterOne";
import Breadcrumb from "../../layout/Breadcrumb/Breadcrumb";
const DynamicBodyContent = dynamic(() => import("../../components/pages/portfolio/Masonry/index"), {
  ssr: false,
});
const Masonry3 = () => {
  return (
    <>
      <NavbarTwo />
      <Breadcrumb />
      <DynamicBodyContent masonryGrid={3} />
      <FooterOne />
    </>
  );
};

export default Masonry3;
