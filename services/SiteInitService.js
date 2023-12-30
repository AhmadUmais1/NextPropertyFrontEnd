import { getData } from "../utils/getData";

export async function getSiteInitData() {
    try {
        const url = `${process.env.PanelApiUrl}site/init`;
        let data = await getData(url);
        if(data.data !== undefined){
            data = data.data;
        }else{
            data = {};
        }
/*         console.log(data,"........data");
 */      return data;
    } catch (error) {
      console.error("Error", error);
    
    }
  }

  export async function getHeaderData() {
    try {
        let data = [];
         await getSiteInitData().then((res) => {
            if(res.data.headerData !== undefined){
                data = res.data.headerData;
            }else{
                data = [];
            }
          });
      return data;
    } catch (error) {
      console.error("Error: Get Header");
    }
  }

  export async function getFooterData() {
    try {
        let data = [];
         await getSiteInitData().then((res) => {
            if(res.data.footerData !== undefined){
                data = res.data.footerData;
            }else{
                data = [];
            }
          });
      return data;
    } catch (error) {
      console.error("Error: Get Footer");
    }
  }

  export async function getMainMenuData() {
    try {
        let data = [];
         await getSiteInitData().then((res) => {
            if(res.data.mainMenuData !== undefined){
                data = res.data.mainMenuData;
            }else{
                data = [];
            }
          });
      return data;
    } catch (error) {
      console.error("Error: Get Main Menu");
    }
  }
  export async function getRightNavData() {
    try {
        let data = [];
         await getSiteInitData().then((res) => {
            if(res.data.rightMenuData !== undefined){
                data = res.data.rightMenuData;
            }else{
                data = [];
            }
          });
      return data;
    } catch (error) {
      console.error("Error: Get Right Nav");
    }
  }

