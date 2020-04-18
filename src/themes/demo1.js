export default {
  fontFamily:"Microsoft YaHei",
  theme: {
    dark:false,
    themes: {
      light: {
        primary: "#5d78ff",
      },
      dark: {
        primary: "#5d78ff",
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
    color: "#1b1b28",
    src:"",
    dark:true,
    light:false,
    model: null,
    type: 'default (no property)',
    clipped: false,
    floating: false,
    mini: false,
    miniVariantWidth: 70,
    expandOnHover:false,
    logo:{
      color: "#1a1a27",
      dark: false,
      flat: true,
      src:"",
      style:"border-bottom:#0e0e18 solid 1px;"
    },
    fontSize: "0.825rem",
  },
  appbar:{
    logoImage: false,
    logoText: false,
    dark: false,
    light: false,
    color: "#f4f5fa",
    src: "",
    flat:true,
    style:"border-bottom:#dbdfef solid 1px; box-shadow: 2px 2px 5px rgba(0,0,0,0.05);"
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
    color: "#ecebf2",
    src: "",
    flat: true,
    card:{
      color:"#f4f5fa",
      style:"box-shadow: 2px 2px 5px rgba(0,0,0,0.05);",
    },
    breadcurmbsImage:true,
  },
}