import { Container,Heading,Placeholder,Text } from "rsuite"
import Layout from "../../components/Layout"
import GridContainer from "../../components/GridContainer"
import CardConcurso from "../../components/CardConcurso"
import { IConcurso } from "../../interfaces/concursos.interface"
import { useEffect, useState } from "react"
import { concursos } from "../../data/concursos"


export default ()=>{
    const [concursosList,setConcursosList]=useState<IConcurso[] | null>([])
    const [loading,setLoading]=useState(true)

    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false)
            setConcursosList(concursos as IConcurso[])
        },1500)
    })
    return <Layout>
        <Container>

            <Container >
                <Heading as='h3'>Concursos</Heading>
                <Container style={{margin:'100px 0'}}>
                {loading  ? <>
                    <Placeholder.Grid rowSpacing={15} rows={4} columns={4} active />
                    <Placeholder.Grid rowSpacing={15} rows={4} columns={4} active />
                    <Placeholder.Grid rowSpacing={15} rows={4} columns={4} active />
                    <Placeholder.Grid rowSpacing={15} rows={4} columns={4} active />
                    </>
                  : concursosList !== null && <GridContainer m={'100px 0'} cols={4} fr={1} gap={'30px 10px'}>
                    {concursosList.map((i,k)=><CardConcurso key={k} concurso={i} />)}
                  </GridContainer> 
               }
                </Container>
              
            </Container>
        </Container>
    </Layout>
}