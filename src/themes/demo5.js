export default {
  fontFamily:"Microsoft YaHei",
  theme: {
    dark:true,
    themes: {
      light: {
        primary: "#0078d4",
      },
      dark: {
        primary: "#0078d4",
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
    model: false,
    type: 'permanent',
    clipped: true,
    floating: false,
    mini: false,
    miniVariantWidth: 70,
    expandOnHover:true,
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
    logoImage: true,
    logoText: true,
    dark: false,
    light: false,
    src: "",
    flat:true,
    style:""
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
    color: "#121212",
    src: "",
    //flat: true,
    //cardColor:"#f4f5fa",
    card:{
      color:"",
      style:"",
    }
  },
}