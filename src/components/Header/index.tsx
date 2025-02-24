import { HStack,IconButton,Image, Toggle } from "rsuite"
import { GlobalStyle } from "../../App.style"
import { Nav } from "./style"
import { RoutesLink } from "../../utils/links"
import { Link } from "react-router-dom"
import { HiOutlineMenu as MenuIcon} from "react-icons/hi";
import { GrClose as CloseIcon} from "react-icons/gr";
import { useContextUI } from "../../context/contextcomponents"
import { useContextData } from "../../context/contextdata"


export const Header=()=>{
    const {onMenuMobile, handleOnMobile}=useContextUI()
    const {user}=useContextData()


    return <HStack justifyContent="space-between"  style={{padding:'20px',height:'120px',background:`${GlobalStyle.BgPrimary}`}}>
            <div>
                <img width={200} height={100} src='/logo.png' alt="logo do site"/>
            </div>
            <Nav onMobile={onMenuMobile}>
                <div className="btn-open-mobile">
                    <IconButton size="lg" onClick={()=>handleOnMobile(true)}  icon={<MenuIcon color="red"/>} />
                </div>
                <div className="links-menu">
                    <div className="btn-close-mobile">
                        <IconButton size="lg" onClick={()=>handleOnMobile(false)} icon={<CloseIcon color="red" />}  />
                    </div>
                    <div className="links">
                      {user && RoutesLink.filter(i=>i.isUser ).map(i=><Link to={i.path}>{i.name}</Link>)}
                     {!user && RoutesLink.filter(i=>!i.isUser || i.doubleCondidition).map(i=><Link to={i.path}>{i.name}</Link>)}
                    </div>
                </div>
            </Nav>
    
        </HStack>
    
}