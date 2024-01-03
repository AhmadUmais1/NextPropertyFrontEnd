/**
 * `getStaticProps` is a Next.js function that fetches data at build time
 * @returns an object with a property of props. The props property is an object with a property of
 * ...(await serverSideTranslations(locale, ['common']))
 */
import React, { useEffect } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import NavbarOne from "../../layout/headers/NavbarOne";

export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });
import FooterOne from "../../layout/footers/FooterOne";
import BodyContent from "../../components/home/image-with-content";
import { ConfigDB } from "../../config/themeCustomizerConfig";

const ImageWithContent = () => {
  useEffect(() => {
    setTimeout(() => {
      !ConfigDB.PrimaryColor && document.documentElement.style.setProperty("--theme-default", "#6432b8");
      !ConfigDB.SecondaryColor && document.documentElement.style.setProperty("--theme-default2", "#9516d7");
    }, 0.1);
  }, []);
  return (
    <>
      <NavbarOne fixed={true} />
      <BodyContent />
      <FooterOne />
    </>
  );
};

export default ImageWithContent;
