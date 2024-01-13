import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import BodyContent from "../../components/pages/blogDetailPages";
import Breadcrumb from "../../layout/Breadcrumb/Breadcrumb";
import FooterOne from "../../layout/footers/FooterOne";
import LoadHeader from "../../layout/headers/LoadHeader";
import Img from "../../utils/BackgroundImageRatio";
import { getSiteInitData } from "../../services/SiteInitService";
import LoadFooter from "../../layout/footers/LoadFooter";
//export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });

const RightSidebar = (props) => {
  return (
    <>
      <LoadHeader data={props.siteInitData}/>
      <Breadcrumb />
      <BodyContent side={"right"}>
        <div className="blog-detail-image">
          <Img src="/assets/images/parallax/4.jpg" className="bg-img img-fluid" alt="" />
        </div>
      </BodyContent>
{/*       <FooterOne />
 */}  <LoadFooter data={props.siteInitData}/>
    </>
  );
};
export async function getStaticProps({ locale }) {

  const siteInitData = await getSiteInitData();

  return {
    props: { 
      ...(await serverSideTranslations(locale, ["common"])),
      siteInitData
  } 
  }
}
export default RightSidebar;
