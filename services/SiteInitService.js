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
        //  console.log(data,"........data");
       return data;
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
       console.log(res,"res")
      return res;
    } catch (error) {
      //console.error("Error: Get Header data");
      function defaultHeaderData (){
        const defaultHeaderData = {
          "headerLogo": "https://realtor.bh/modules/xts/themes/theme_1/assets/images/user_5/KLAKfqEPdWJ4oqOScWbuPMC6TgIwybeIkO0p4ex3.png",
          "headerLogoName": "",
          "isEnable": "on",
          "contactNo": "",
          "languages": "on",
          "wishlist": "on",
          "currency": "on",
          "account": "on",
          "headerLayoutId": "header-layout-1"
        }; 
      }
     }}
  // function defaultHeaderData (){
  //   const defaultHeaderData = {
  //     "headerLogo": "https://realtor.bh/modules/xts/themes/theme_1/assets/images/user_5/KLAKfqEPdWJ4oqOScWbuPMC6TgIwybeIkO0p4ex3.png",
  //     "headerLogoName": "",
  //     "isEnable": "on",
  //     "contactNo": "",
  //     "languages": "on",
  //     "wishlist": "on",
  //     "currency": "on",
  //     "account": "on",
  //     "headerLayoutId": "header-layout-1"
  //   }; 
  // }

  // export async function getHeaderData() {
  //   try {
  //       let data = {};
  //        await getSiteInitData().then((res) => {
  //           if(res.data.headerData !== undefined){
  //               data = res.data.headerData;
  //           }else{
  //               data = [];
  //           }
  //         });
  //         console.log(data,"jjhhjjk")
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
      console.error("Error: Get Footer data");
    }
  }

 /*  function defaultFooterData (){
    const defaultFooterData =
     */
   /*  {
      "footerLogo": "https://realtor.bh/modules/xts/themes/theme_1/assets/images/user_5/1ufZd0xjiZrXW0flEHFDvAdBmnEuiHpQ5Rh0tfkc.png",
      "footerLogoName": "",
      "aboutCompany": "About",
      "column1Label": "",
      "column1Links": [
        {
          "icon": "fas fa-map-marker-alt",
          "text": "Text"
        }
      ],
      "column2Label": "Col2",
      "column2Links": [
        {
          "text": "Col2",
          "url": "Link2"
        }
      ],
      "column3Label": "Col3",
      "column3Links": [],
      "mapLat": "28",
      "mapLong": "30",
      "mapZoom": "16",
      "column4Label": "Col4",
      "column4Links": [
        {
          "text": "Text4",
          "url": "Col4"
        }
      ],
      "column5Label": "Col5",
      "column5Links": [],
      "column5Description": "",
      "footerSliderLabel": "",
      "footerBgColor": "",
      "footerBarColor": "",
      "footerLayoutId": "footer-layout-1"
    }; 
  }
 */
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
   export function getThemeColor(data) {
      try {
        let res = {};
      if(data.data.colorData !== undefined){
        res = data.data.colorData;
      }
      return res;
    } catch (error) {
      console.error("Error: Theme Color");
    }
  } 
  
  /* export function getFooterAddress(data) {
    try {
        let res = {};
      if(data.data.footerData.theme_address !== undefined){
        res = data.data.footerData.theme_address;
      }
      return res;
    } catch (error) {
      console.error("Error: FooterAddress");
    }
  } */
  /* export function getFooterContactNo(data) {
    try {
        let res = {};
      if(data.data.footerData.theme_contact_no!== undefined){
        res = data.data.footerData.theme_contact_no;
      }
      return res;
    } catch (error) {
      console.error("Error: FooterContactNo");
    }
  } */
   export function getBottomFooter(data) {
    try {
        let res = {};
      if(data.data.bottomFooterData!== undefined){
        res = data.data.bottomFooterData;
      }
      return res;
    } catch (error) {
      console.error("Error: Get bottom footer");
    }
  }
  /* 
  function defaultBottomFooter(){
    const defaultBottomFooter =
   */
    /* {
      "themeCopyRights": "© 2024 All rights reserved.",
      "themeSocial": [
        {
          "themeSocialIcon": "fab fa-facebook-f",
          "themeSocialUrl": "https://www.facebook.com"
        },
        {
          "themeSocialIcon": "fa fa-instagram",
          "themeSocialUrl": "https://www.instagram.com"
        }
      ]
    };

  } */
  /* export function getCopyRights(data) {
    try {
        let res = {};
      if(data.data.bottomFooterData.themeCopyRights!== undefined){
        res = data.data.bottomFooterData.themeCopyRights;
      }
      return res;
    } catch (error) {
      console.error("Error: Get CopyRights");
    }
  } */
   export function getGoogleMaps(data) {
    try {
        let res = {};
      if(data.data.googleMapData!== undefined){
        res = data.data.googleMapData;
      }
      return res;
    } catch (error) {
      console.error("Error: Get GoogleMaps");
    }
  } 
  /* export function defaultGoogleMaps (){
    const defaultGoogleMaps =
    {
      "googleMapKey": 23,
      "googleMapLat": 24,
      "googleMapLong": 25,
      "googleZoom": 26
    }
  }
   */
  /* export function getFooterAboutCompany(data) {
    try {
        let res = {};
      if(data.data.footerData.theme_about_company!== undefined){
        res = data.data.footerData.theme_about_company;
      }
      return res;
    } catch (error) {
      console.error("Error: Get About company");
    }
  } */
  /* export function getFooterLogo(data) {
    try {
        let res = {};
      if(data.data.footerData.theme_footer_logo!== undefined){
        res = data.data.footerData.theme_footer_logo;
      }
      return res;
    } catch (error) {
      console.error("Error: Get Footer Logo");
    }
  } */
  export async function getBottomFooterIcon() {
    try {
        let data = {};
         await getSiteInitData().then((res) => {
            if(res.data.bottomFooterData.themeSocial !== undefined){
                data = res.data.bottomFooterData.themeSocial;
            }else{
                data = {};
            }
          });
      return data;
    } catch (error) {
      console.error("Error: BottomFooterIcon");
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
      console.error("Error: Get Header Logo");
    }
  }
  export async function getContactNumberData() {
    try {
        let data = "";
         await getSiteInitData().then((res) => {
            if(res.data.headerData.contactNo !== undefined){
                data = res.data.headerData.contactNo;
            }
          });
      return data;
    } catch (error) {
      console.error("Error: Get contact no ");
    }
  }  

