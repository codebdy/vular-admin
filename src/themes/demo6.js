export default {
  fontFamily:"Microsoft YaHei",
  theme: {
    dark:false,
    themes: {
      light: {
        primary: "#9764fd",
      },
      dark: {
        primary: "#9764fd",
      },
    },
  },
  logo: {
    src: "/images/logo-w.png",
    title:"Vular",
    alt: "An amazing framework",
  },
  drawer: {
    showLogo: false,
    src:"",
    dark:false,
    light:false,
    model: null,
    type: 'default (no property)',
    clipped: true,
    floating: false,
    mini: false,
    miniVariantWidth: 70,
    expandOnHover:false,
    logo:{
      color: "#0bb883",
      dark: false,
      flat: true,
      src:"",
      style:"border-bottom:rgba(0,0,0,0.1) solid 1px;"
    },
    fontSize: "0.825rem",
  },
  appbar:{
    logoImage: true,
    logoText: true,
    dark: true,
    light: false,
    color: "#0bb883",
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
    color: "#fbf6f0",
    src: "",
    flat: true,
    cardColor:"#ffffff",
  },
}