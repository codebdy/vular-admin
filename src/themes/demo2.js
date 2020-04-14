export default {
  fontFamily:"Microsoft YaHei",
  theme: {
    dark:false,
    themes: {
      light: {
        primary: "#3f51b5",
      },
      dark: {
        primary: "#3f51b5",
      },
    },
  },
  logo: {
    src: "/images/logo.png",
    title:"Vular",
    alt: "An amazing framework",
  },
  drawer: {
    showLogo: true,
    src:"",
    dark:false,
    light:false,
    color:"",
    model: null,
    type: 'default (no property)',
    clipped: false,
    floating: false,
    mini: false,
    miniVariantWidth: 70,
    expandOnHover:false,
    logo:{
      color: "#193a9a",
      dark: true,
      flat: true,
      src:"",
      style:"border-bottom:rgba(0,0,0,0.1) solid 1px;"
    },
    fontSize: "0.825rem",
  },
  appbar:{
    logoImage: false,
    logoText: false,
    dark: true,
    light: false,
    color: "#3f51b5",
    src: "",
    flat:true,
      style:"border-bottom:rgba(0,0,0,0.1) solid 1px;"
  },
  footer: {
    inset: true,
    color:"",
    dark:false,
    light:false,
    src:"",
  },
  content:{
    fontFamily:"",
    color: "#ffffff",
    src: "",
    flat: false,
    cardColor:"#ffffff",
  },
}