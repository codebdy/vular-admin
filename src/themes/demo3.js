export default {
  fontFamily:"Microsoft YaHei",
  theme: {
    dark:false,
    themes: {
      light: {
        primary: "#fbce44",
      },
      dark: {
        primary: "#fbce44",
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
    model: false,
    type: 'permanent',
    clipped: false,
    floating: false,
    mini: false,
    miniVariantWidth: 70,
    expandOnHover:true,
    logo:{
      color: "#fbce44",
      dark: true,
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
    card:{
      color:"#ffffff",
      style:"box-shadow: 2px 2px 5px rgba(0,0,0,0.05);",
    }
  },
}