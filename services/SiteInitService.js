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
/*   export function getFooter(data) {
    try {
        let res = [];
      if(data.data.footerData !== undefined){
        res = data.data.footerData;
      }
      return res;
    } catch (error) {
      console.error("Error: Get footer");
    }
  } */
  export function getHeaderData(data) {
    try {
        let res = {};
      if(data.data.headerData !== undefined){
        res = data.data.headerData;
      }
      return res;
    } catch (error) {
      console.error("Error: Get Header");
    }
  }

  // export async function getHeaderData() {
  //   try {
  //       let data = [];
  //        await getSiteInitData().then((res) => {
  //           if(res.data.headerData !== undefined){
  //               data = res.data.headerData;
  //           }else{
  //               data = [];
  //           }
  //         });
  //     return data;
  //   } catch (error) {
  //     console.error("Error: Get Header");
  //   }
  // }

  export function getFooterData(data) {
    try {
        let res = {};
      if(data.data.footerData !== undefined){
        res = data.data.footerData;
      }
      return res;
    } catch (error) {
      console.error("Error: Get Footer");
    }
  }

  // export async function getFooterData() {
  //   try {
  //       let data = [];
  //        await getSiteInitData().then((res) => {
  //           if(res.data.footerData !== undefined){
  //               data = res.data.footerData;
  //           }else{
  //               data = [];
  //           }
  //         });
  //     return data;
  //   } catch (error) {
  //     console.error("Error: Get Footer");
  //   }
  // }
  export function getFooterAddress(data) {
    try {
        let res = {};
      if(data.data.footerData.theme_address !== undefined){
        res = data.data.footerData.theme_address;
      }
      return res;
    } catch (error) {
      console.error("Error: Get Footer");
    }
  }
  export function getFooterLogo(data) {
    try {
        let res = {};
      if(data.data.footerData.theme_footer_logo!== undefined){
        res = data.data.footerData.theme_footer_logo;
      }
      return res;
    } catch (error) {
      console.error("Error: Get Footer Logo");
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

  export async function getHeaderLogo() {
    try {
        let data = "/assets/images/logo/6.png";
        //  await getSiteInitData().then((res) => {
        //     if(res.data.headerData.theme_header_logo !== undefined){
        //         data = res.data.headerData.theme_header_logo;
        //     }else{
        //         data = "";
        //     }
        //   });
      return data;
    } catch (error) {
      console.error("Error: Get Right Nav");
    }
  }
  export async function getContactNumberData() {
    try {
        let data = "";
         await getSiteInitData().then((res) => {
            if(res.data.headerData.theme_contact_no !== undefined){
                data = res.data.headerData.theme_contact_no;
            }
          });
      return data;
    } catch (error) {
      console.error("Error: Get contact no ");
    }
  }  

