import { Container,Heading, Placeholder,Text} from "rsuite"
import GridContainer from "../../../components/GridContainer"
import CardConcurso from "../../../components/CardConcurso"
import Painel from "../../../components/Painel"
import { useEffect, useState } from "react"
import { IConcurso } from "../../../interfaces/concursos.interface"
import { concursos } from "../../../data/concursos"


export default ()=>{

      const [concursosList,setConcursosList]=useState<IConcurso[] | null>([])
     const [loading,setLoading]=useState(true)


       useEffect(()=>{
            setTimeout(()=>{
                setLoading(false)
                setConcursosList(concursos as IConcurso[])
            },1800)
        }) 

    return <Painel>
           <Container>
                  <Container >
                                 <Heading as='h3'>Concursos</Heading>
                                 <Container>
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
            
    </Painel>
}