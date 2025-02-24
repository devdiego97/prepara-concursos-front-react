import { ReactNode } from "react"
import { Container } from "./style"
import { Image, IconButton} from "rsuite"
import { Link } from "react-router-dom"
import { useContextUI } from "../../context/contextcomponents"
import { HiOutlineMenu as MenuIcon} from "react-icons/hi"
import { GrClose as CloseIcon} from "react-icons/gr"

type Props={
    children:ReactNode
}

export default ({children}:Props)=>{
    const {onMenuMobile,handleOnMobile}=useContextUI()


    return <Container onMobile={onMenuMobile} >
               <div className="left">
                 <div className="cx-img">
                   <Image src={'/logo.png'} alt='logo do site' />
                 </div>
                  <div className="btn-open-mobile">
                        <IconButton size="lg" onClick={()=>handleOnMobile(true)}  icon={<MenuIcon color="red"/>} />
                  </div>
                <div className="nav" >
                    <ul className="links">
                       <div className="links-menu">
                           <div className="btn-close-mobile">
                             <IconButton size="lg" onClick={()=>handleOnMobile(false)} icon={<CloseIcon color="red" />}  />
                          </div>
                        
                           <ul>
                                <li><Link to='/admin/concursos'>Concursos</Link></li>
                                <li><Link to='/admin/novo-concurso'>Novo Concurso</Link></li>
                                <li><Link to='/admin/cursos'>Cursos</Link></li>
                                <li><Link to='/admin/novo-curso'>Novo Curso</Link></li>
                                <li><Link to='/admin/conta'>Meus Dados</Link></li>
                           </ul>
                       </div>
                    </ul>
                    
                </div>
                
          </div>
        <div className="right">
            {children}
        </div>  
    </Container>
}