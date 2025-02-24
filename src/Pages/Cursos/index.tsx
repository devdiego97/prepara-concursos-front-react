import { Container, Heading,Placeholder,Text } from "rsuite"
import Layout from "../../components/Layout"
import GridContainer from "../../components/GridContainer"
import CardCurso from "../../components/CardCurso"
import { useEffect, useState } from "react"
import { ICurso } from "../../interfaces/cursos.interface"
import { courses } from "../../data/courses"
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
    return <Layout>
        <Container>
            <Heading>Cursos</Heading>
            <Container style={{margin:'50px 0'}}>
                {loading && <>
                    <Placeholder.Grid rowSpacing={15} rows={4} columns={4} active />
                    <Placeholder.Grid rowSpacing={15} rows={4} columns={4} active />
                    <Placeholder.Grid rowSpacing={15} rows={4} columns={4} active />
                    <Placeholder.Grid rowSpacing={15} rows={4} columns={4} active />
                    </> } 
                {!loading && cursosList !== null &&  <GridContainer m={'100px 0'} fr={1}  gap={'20px'} cols={4}>
                    {cursosList.map((c,k)=><CardCurso key={k} course={c} />) }
                </GridContainer> 
                } 
            </Container>
            
        </Container>
    
    </Layout>
}