
import { Container, Heading, Text } from "rsuite"
import GridContainer from "../../../components/GridContainer"
import CardCurso from "../../../components/CardCurso"
import Painel from "../../../components/Painel"
import { useEffect, useState } from "react"
import { courses } from "../../../data/courses"
import { ICurso } from "../../../interfaces/cursos.interface"
import PlaceholderGrid from "rsuite/esm/Placeholder/PlaceholderGrid"


export default ()=>{
       const [cursosList,setCursosList]=useState<ICurso[] | null>(null)
        const [loading,setLoading]=useState(true)
    
    
        useEffect(()=>{
            setTimeout(()=>{
                setLoading(false)
                setCursosList(courses)
            },1500)
        })
        
    return <Painel>
       <Container>
            <Heading>Cursos</Heading>
            <Container style={{margin:'50px 0'}}>
                {loading && <PlaceholderGrid columns={4} active rows={6} /> } 
                {!loading && cursosList !== null &&  <GridContainer m={'100px 0'} fr={1}  gap={'20px'} cols={4}>
                    {cursosList.map((c,k)=><CardCurso key={k} course={c} />) }
                </GridContainer> 
                } 
            </Container>
            
        </Container>
    </Painel>
}