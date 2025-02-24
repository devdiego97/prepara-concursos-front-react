import { Button, Card, Container, Heading, HStack, Tag,Image,Text, VStack, Divider} from "rsuite"
import Layout from "../../components/Layout"
import { useParams } from "react-router-dom"
import FlexContainer from "../../components/FlexContainer"
import { GiClick  as ClickIcon} from "react-icons/gi"
import { HiOutlineStatusOnline as StatausIcon } from "react-icons/hi"
import { BsCalendarDate as DateIcon} from "react-icons/bs"
import { BiLayer as LevelIcon } from "react-icons/bi"
import { concursos } from "../../data/concursos"


export default ()=>{
    const params=useParams()
    const concursoId=concursos.find(i=>i.id === parseInt(params.id as string))


    return <Layout>
        <Container>
            <FlexContainer m={'100px 0'} JC="space-around" AI="flex-start" flexR={1}  >
               <Container className="children-left" >
                        <Heading as='h2'>{concursoId?.name}</Heading>
                        <Card style={{padding:'12px',margin:'30px 0'}}>
                           <Text className="text" weight="bold">Resumo</Text>
                            <Divider />
                            <HStack style={{margin:'8px 0'}}>
                              <StatausIcon color="red"  size={30}/>
                              <Text weight="semibold">Status:{concursoId?.status}</Text>
                            </HStack>
                           <HStack style={{margin:'8px 0'}}>
                              <DateIcon color="red" size={30} />
                              <Text weight="bold">Inicio  de inscrição : {concursoId?.dataRegitrationStart.toString()}</Text>
                           </HStack>
                           <HStack style={{margin:'8px 0'}}>
                              <DateIcon color="red" size={30} />
                              <Text weight="bold">Inicio  de inscrição : {concursoId?.dataRegitrationSEnd.toString()}</Text>
                           </HStack>
                           <HStack style={{margin:'8px 0'}} >
                              <ClickIcon color="red" size={30} />
                              <Text weight="bold">link de inscrição:</Text>
                              <Text weight="bold" as='a' target="_blank" href={concursoId?.urlResgistration}>{concursoId?.urlResgistration}</Text>
                           </HStack>
                           <HStack style={{margin:'8px 0'}} >
                            <LevelIcon color="red" size={30} />
                            <Text weight="bold">Nivel:{concursoId?.levelRequired}</Text>
                           </HStack>
                        </Card>
                        <VStack>
                            <Heading>Sobre</Heading>
                            <Text className="text" weight="medium">{concursoId?.about}</Text>
                        </VStack>
                </Container>
               
                <Container className="children-right"  >
                    <HStack justifyContent="center">
                        <Card width={'70%'}>
                            <Image height={250}  src={concursoId?.cover} alt="imagem da capa" />
                            <Card.Header>
                                <Text>{concursoId?.name}</Text>
                            </Card.Header>
                            <Card.Body style={{margin:'30px 0'}}>
                                <HStack justifyContent="space-around">
                                    <Tag color="blue" size="lg">{concursoId?.status}</Tag>
                                    <Tag color="green" size="lg">{concursoId?.abrangency}</Tag>
                                </HStack>
                            </Card.Body>
                            <Card.Footer style={{padding:'50px'}}>
                                <Button onClick={()=>{}} size="lg" block appearance="primary">Quero me preparar</Button>
                            </Card.Footer>
                        </Card>
                    </HStack>
                </Container>
            </FlexContainer>
        </Container>
    </Layout>
}