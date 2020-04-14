export default {
  fontFamily:"Microsoft YaHei",
  theme: {
    dark:false,
    themes: {
      light: {
        primary: "#22b9ff",
      },
      dark: {
        primary: "#22b9ff",
      },
    },
  },
  logo: {
    src: "/images/logo-4.png",
    title:"Vular",
    alt: "An amazing framework",
  },
  drawer: {
    showLogo: true,
    src:"",
    dark:false,
    light:false,
    model: null,
    type: 'permanent',
    clipped: false,
    floating: false,
    mini: false,
    miniVariantWidth: 70,
    expandOnHover:true,
    logo:{
      color: "#fbce44",
      dark: false,
      flat: true,
      src:"",
      style:"border-bottom:rgba(0,0,0,0.1) solid 1px;"
    },
    fontSize: "0.825rem",
  },
  appbar:{
    logoImage: false,
    logoText: true,
    dark: false,
    light: false,
    color: "#ffffff",
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
    color: "#f3f3f7",
    src: "",
    flat: true,
    cardColor:"#ffffff",
  },
}