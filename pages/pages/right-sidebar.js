import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import BodyContent from "../../components/pages/blogDetailPages";
import Breadcrumb from "../../layout/Breadcrumb/Breadcrumb";
import FooterOne from "../../layout/footers/FooterOne";
import NavbarTwo from "../../layout/headers/NavbarTwo";
import Img from "../../utils/BackgroundImageRatio";

export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });

const RightSidebar = () => {
  return (
    <>
      <NavbarTwo />
      <Breadcrumb />
      <BodyContent side={"right"}>
        <div className="blog-detail-image">
          <Img src="/assets/images/parallax/4.jpg" className="bg-img img-fluid" alt="" />
        </div>
      </BodyContent>
      <FooterOne />
    </>
  );
};
export default RightSidebar;
