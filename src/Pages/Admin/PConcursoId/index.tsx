import { Button, Card, Container, Heading, HStack, Tag,Image,Text, VStack} from "rsuite"
import { useParams } from "react-router-dom"
import FlexContainer from "../../../components/FlexContainer"
import { GiClick  as ClickIcon} from "react-icons/gi"
import { HiOutlineStatusOnline as StatausIcon } from "react-icons/hi"
import { BsCalendarDate as DateIcon} from "react-icons/bs"
import { BiLayer as LevelIcon } from "react-icons/bi"
import Painel from "../../../components/Painel"
import { concursos } from "../../../data/concursos"

export default ()=>{
    const params=useParams()
    const concursoId=concursos.find(c=>c.id === parseInt(params.id as string))


    return <Painel>
        <Container>
            <FlexContainer m={'100px 0'} JC="space-around" AI="flex-start"
                flexR={1}
                p={30}  
            >
              
                <Container className="children-left" style={{margin:'12px'}}>
                        <Heading as='h2'>{concursoId?.name}</Heading>
                        <Card style={{padding:'12px',margin:'30px 0'}}>
                           <Text>Resumo</Text>
                            <HStack>
                            <StatausIcon/>
                              <Text>Status:</Text>
                            </HStack>
                           <HStack>
                            <DateIcon />
                            <Text>Data de inscrição</Text>
                           </HStack>
                           <HStack>
                            <ClickIcon />
                            <Text>link de inscrição: </Text>
                           </HStack>
                           <HStack>
                            <LevelIcon />
                            <Text>Nivel:</Text>
                           </HStack>
                        </Card>
                        <VStack>
                            <Heading>Sobre</Heading>
                            <Text>{concursoId?.about}</Text>
                        </VStack>
                    </Container>
               
                <Container className="children-right" >
                <Card>
                    <Image height={250}  src={concursoId?.cover} alt="imagem da capa" />
                    <Card.Header>
                        <Text>{concursoId?.name}</Text>
                    </Card.Header>
                    <Card.Body style={{margin:'30px 0'}}>
                        <HStack justifyContent="space-around">
                            <Tag size="lg">status</Tag>
                            <Tag size="lg">banca</Tag>
                        </HStack>
                    </Card.Body>
                    <Card.Footer style={{padding:'50px'}}>
                        <Button onClick={()=>{}} size="lg" block appearance="primary">Quero me preparar</Button>
                    </Card.Footer>
                </Card>
                </Container>
            </FlexContainer>
        </Container>
    </Painel>
}