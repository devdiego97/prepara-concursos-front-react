import { Container, Heading, List, VStack,Text, Card } from "rsuite"
import { useParams } from "react-router-dom"
import FlexContainer from "../../../components/FlexContainer"
import Painel from "../../../components/Painel"
import { courses } from "../../../data/courses"


export default ()=>{
    const params=useParams()
    const courseId=courses.find(i=>i.id === parseInt(params.id as string))


    return <Painel>
        <Container style={{margin:'50px 0'}}>
            <Heading>
                {courseId?.name}
            </Heading>
          <FlexContainer WidhtLeft={'30%'} flexR={1}>
                <Container className="children-left" >
                    <VStack style={{margin:'100px 0'}}>
                    <Heading>Sobre</Heading>
                    <Text >{courseId?.objective}</Text>
                </VStack>
                <List>  
                    {courseId!.content.map(i=><List.Item>{i}</List.Item>)}
                </List>
            </Container>
            <Container className="children-right">
               
                    <Card>
                        hh
                    </Card>
              

            </Container>
          </FlexContainer>
            
        </Container>
    </Painel>
}