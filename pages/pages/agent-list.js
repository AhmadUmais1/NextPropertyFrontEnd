/**
 * It fetches data from the API and then passes it to the BodyContent component
 * @returns The data is being returned from the API.
 */
import React, { useEffect, useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import BodyContent from "../../components/pages/agency/agencyGrid";
import Breadcrumb from "../../layout/Breadcrumb/Breadcrumb";
import LoadHeader from "../../layout/headers/LoadHeader";
import LoadFooter from "../../layout/footers/LoadFooter";
//import FooterOne from "../../layout/footers/FooterOne";
export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });
import { getData } from "../../utils/getData";

const AgentList = () => {
  const [clientData, setClientData] = useState();

  useEffect(() => {
    getData(`${process.env.API_URL}/client-agent`)
      .then((res) => {
        setClientData(res.data.agentList);
      })
      .catch((error) => console.log("Error", error));
  }, []);
  return (
    <>
      <LoadHeader />
      <Breadcrumb />
      <BodyContent clientData={clientData} style={"list-view"} listSize={2} size={3} />
      <LoadFooter />
    </>
  );
};

export default AgentList;
