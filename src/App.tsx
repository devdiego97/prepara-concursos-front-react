import { useLocation } from "react-router-dom"
import { useContextData } from "./context/contextdata"
import Routes from "./Routes/routes"
import { useEffect } from "react"
import { CustomProvider } from "rsuite"
import { useContextUI } from "./context/contextcomponents"
import 'rsuite/dist/rsuite.min.css'



export const  App=()=>{
  const {theme}=useContextUI()
  const {user}=useContextData()
  const location=useLocation()
  useEffect(() => {
    window.scrollTo(0, 0);
  },[location.pathname])
  

   return <CustomProvider theme={theme}>
    <Routes />
   </CustomProvider>

   
  }



