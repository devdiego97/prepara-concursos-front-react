import { Container, Heading, List, VStack,Text, Card,Image, Tag, Button, HStack, useToaster, Message } from "rsuite"
import Layout from "../../components/Layout"
import { useParams } from "react-router-dom"
import FlexContainer from "../../components/FlexContainer"
import { ICurso } from "../../interfaces/cursos.interface"
import { useState } from "react"
import { courses } from "../../data/courses"
import { useContextData } from "../../context/contextdata"

export default ()=>{
    const params=useParams()
    const course=courses.find(i=>i.id === parseInt(params.id as string))
    const [cursoId,setCursoId]=useState<ICurso>(course as ICurso)
    const {user}=useContextData()
    const toaster = useToaster()

    const registrationFromCourse=()=>{
        if(user){
            toaster.push(
                 <Message style={{margin:'32px 0'}}  closable  bordered type="success" showIcon  header="Tudo certo">
                   <strong>perfeito! </strong>Agora você está matriculado no curso
                 </Message>
            )
        }else{
            toaster.push(
                <Message style={{margin:'32px 0'}}  closable  bordered type="error" showIcon  header="algo deu errado">
                <strong>Ops! </strong>Você ainda não tem uma conta.Crie a sua agora
              </Message>
            )
        }
    }
    return <Layout>
        <Container style={{margin:'50px 0'}}>
            <Heading>
                <Text>{course?.name}</Text>
            </Heading>
          <FlexContainer WidhtLeft={'30%'} flexR={1}>
                <Container className="children-left" >
                    <VStack style={{margin:'100px 0',padding:'0 12px'}}>
                    <Heading>Sobre</Heading>
                    <Text weight="regular" className="text" as={'p'}>{cursoId?.objective}</Text>
                </VStack>
                <Heading>Conteúdo</Heading>
                <List style={{padding:'12px'}}>  
                    {cursoId!.content.map(i=><List.Item className="text">{i}</List.Item>)}
                </List>
            </Container>
            <Container className="children-right">
                <Card >
                    <Image src={course?.cover} alt='cover do curso' />
                    <FlexContainer direction="column">
                        <Card.Header>
                            <Text as={'h4'}>{course?.name}</Text>
                        </Card.Header>
                        <Card.Body>
                           {cursoId.free ? <Tag size="lg" color="blue">Gratuito</Tag> : <Tag size="lg" color="yellow">R$ {cursoId.price.toFixed(2).replace('.',',')}</Tag>}
                               <Tag size="lg" color="green">{cursoId.category}</Tag>
                        </Card.Body>
                    </FlexContainer>
                     <FlexContainer m={'50px 0'} p={'0 12px'} JC="center">
                            {
                                cursoId.free ? <Button block size="lg" onClick={registrationFromCourse} color="blue" appearance="primary">matricular</Button> :
                                <Button block color="blue" size="lg" appearance="primary">comprar</Button>
                            }
                      </FlexContainer>
                </Card>
            </Container>
          </FlexContainer>
            
        </Container>
    </Layout>
}