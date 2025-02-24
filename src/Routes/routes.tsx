import { Routes as Router,Route, Routes, useLocation } from "react-router-dom"
import Home from "../Pages/Home"
import { useEffect} from "react"
import Concursos from "../Pages/Concursos"
import ConcursoId from "../Pages/ConcursoId"
import Conta from "../Pages/Conta"
import Cursos from "../Pages/Cursos"
import CursoId from "../Pages/CursoId"
import Apostilas from "../Pages/Apostilas"
import Login from "../Pages/Login"
import Cadastro from "../Pages/Cadastro"
import MeusCursos from "../Pages/MeusCursos"
import Plataforma from "../Pages/Plataforma"
import PConcursos from "../Pages/Admin/PConcursos"
import PCursos from "../Pages/Admin/PCursos"
import PConcursoId from "../Pages/Admin/PConcursoId"
import PCursoId from "../Pages/Admin/PCursoId"
import PNovoConcurso from "../Pages/Admin/PNovoConcurso"
import PNovoCurso from "../Pages/Admin/PNovoCurso"
import { useContextData } from "../context/contextdata"


export default ()=>{

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
const {user}=useContextData()


    return <Routes location={location} >
         {user?.type === 'user' || user === null ? <>
          <Route path="/" element={<Home />} />
          <Route path="/concursos" element={<Concursos />} />
          <Route path="concursos/:nome/:id" element={<ConcursoId />} />
          <Route path="/concursos/:nome/:id" element={<ConcursoId />} />
          <Route path="/cursos" element={<Cursos />} />
          <Route path="/cursos/:nome/:id" element={<CursoId />} />
          <Route path="/plataforma/:nome/:id" element={<Plataforma />} />
          <Route path="/entrar" element={<Login />} />
          <Route path="/apostilas" element={<Apostilas />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/meus-cursos" element={<MeusCursos />} />
          <Route path="/minha-conta" element={<Conta />} />
         
       </> : <>
          <Route path="/admin/concursos" element={<PConcursos />} />
          <Route path="/admin/concursos/:nome/:id" element={<PConcursoId />} />
          <Route path="/admin/novo-concurso" element={<PNovoConcurso />} />
          <Route path="/admin/novo-curso" element={<PNovoCurso />} />
          <Route path="/admin/cursos" element={<PCursos />} />
          <Route path="/admin/cursos/:nome/:id" element={<PCursoId />} />
       </>
}
      
       
      
     
</Routes>
        

       
       
      

}