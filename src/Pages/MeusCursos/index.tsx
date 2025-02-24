import { Container, Heading, Placeholder } from "rsuite"
import Layout from "../../components/Layout"
import GridContainer from "../../components/GridContainer"
import MyCourse from "../../components/MyCourse"
import { useEffect, useState } from "react"
import { courses } from "../../data/courses"
import { ICurso } from "../../interfaces/cursos.interface"


export default ()=>{

     const [cursosList,setCursosList]=useState<ICurso[] | null>(null)
        const [loading,setLoading]=useState(true)
    
    
        useEffect(()=>{
            setTimeout(()=>{
                setLoading(false)
                setCursosList(courses)
            },1500)
        })
        
    return <Layout>
        <Container>
            <Heading>Meus Cursos</Heading>
            <Container style={{margin:'50px 0'}}>
                {loading && <>
                    <Placeholder.Grid rowSpacing={15} rows={4} columns={4} active />
                    <Placeholder.Grid rowSpacing={15} rows={4} columns={4} active />
                    <Placeholder.Grid rowSpacing={15} rows={4} columns={4} active />
                    <Placeholder.Grid rowSpacing={15} rows={4} columns={4} active />
                    </> } 
                {!loading && cursosList !== null &&  <GridContainer m={'100px 0'} fr={1}  gap={'20px'} cols={3}>
                    {cursosList.map((c,k)=><MyCourse key={k} course={c} />) }
                </GridContainer> 
                } 
            </Container>
        </Container>
    </Layout>
}