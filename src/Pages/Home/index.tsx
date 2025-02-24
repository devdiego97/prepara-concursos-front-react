import { Button,Heading, HStack, VStack,Text, Card, Avatar, Divider} from "rsuite"
import FlexContainer from "../../components/FlexContainer"
import Layout from "../../components/Layout"
import GridContainer from "../../components/GridContainer"
import { useNavigate } from "react-router-dom"
import { courses } from "../../data/courses"
import CardCurso from "../../components/CardCurso"
import { Slide } from "react-slideshow-image"
import './style.css'


export default ()=>{
    const nav=useNavigate()


    return <Layout>
            <FlexContainer className="box-page"  m={'100px 0'} >
                <div className="children-left" >
                    <Heading as='h1'>Que se destarcar no mundo dos concursos em 2025?</Heading> 
                     <Text style={{margin:'20px 0'}}>Junte-se a nós na maior comunidade de concurseiros no Brasil.
                        Somos uma comunidade que auxilia você concurseiro na sua jornada,coma  gente você fica não só atento 
                        á novos concursos como também se mantém preparados para eles
                    </Text> 
                    <p>Não está convencido de que concurso público ainda é uma boa ? Veja as vantagens :</p>
                    <ul>
                        <li>
                            <strong>Estabilidade no Emprego</strong>
                            Uma das maiores vantagens dos cargos públicos é a estabilidade. Após o período de estágio 
                            probatório (normalmente de três anos), o servidor público adquire estabilidade, 
                             ou seja, não pode ser demitido sem justa causa, salvo em situações excepcionais.
                        </li>
                        <li>
                            <strong>Benefícios e Direitos</strong>
                            Os servidores públicos têm acesso a uma série de benefícios que podem incluir:Planos de saúde,
                            Auxílio alimentação,Licenças e aposentadoria diferenciada,Auxílio transporte, Licença-prêmio (em algumas esferas)
                            Férias com aumento de dias em alguns casos
                        </li>
                        <li>
                            <strong>Concursos de Diversos Níveis</strong>
                            Há concursos para diferentes níveis de escolaridade (fundamental, médio e superior), o que amplia as 
                            possibilidades de ingresso no serviço público, atendendo a uma grande variedade de perfis.
                        </li>
                        <HStack justifyContent="center">
                            <Heading as='h1'>E MUITO MAIS....</Heading>
                        </HStack>
                    </ul>      
                    </div>
                <div className="children-right" >
                    <div className="bg-img"></div>
                </div>
            </FlexContainer>
            <VStack style={{margin:'50px 0'}}>
                <FlexContainer JC="center">
                  <Heading as={'h3'} style={{textAlign:'center'}} >Se prepare com os nosso cursos online</Heading>
                </FlexContainer> 
                <GridContainer cols={4}  gap={'12px'} m={'50px 0'} fr={1}>
                    {courses.filter(c=>c.free).map((c,k)=><CardCurso course={c} key={k} />)}
               </GridContainer>
                <FlexContainer style={{width:'100%'}} JC="center" >
                    <Button   size="lg" onClick={()=>nav('/cursos')} appearance="primary" style={{fontSize:'18px',padding:'32px 33px'}}>
                        Quero ver mais cursos
                    </Button>
                </FlexContainer>
            </VStack>
            <div className="container container-true" style={{margin:'100px 0'}}>
                <HStack justifyContent="center">
                  <Heading as='h3' >O QUE NOSSOS CLIENTES DIZEM</Heading>
                </HStack>
                <GridContainer fr={1} cols={3} gap={'12px'} m={'50px 0'}>
                        <Card style={{padding:'12px'}}>
                           <VStack>
                                <VStack style={{width:'100%'}} alignItems="center">
                                    <Avatar circle size="lg" style={{height:'80px',width:'80px'}} />
                                    <Text weight="extrabold">Carlos Gomes</Text>
                                </VStack>
                                <Divider/>
                           </VStack>
                           <Card.Body>
                                <Text  style={{fontStyle:'italic'}}>
                                    "A plataforma foi essencial para minha aprovação! As questões de concurso são muito bem elaboradas e me ajudaram a 
                                    entender os tópicos com mais clareza. 
                                    Além disso, a interface é super intuitiva e facilita o estudo." 
                                </Text>
                            </Card.Body>
                        </Card>
                        <Card style={{padding:'12px'}}>
                           <VStack>
                                <VStack style={{width:'100%'}} alignItems="center">
                                    <Avatar circle size="lg" style={{height:'80px',width:'80px'}} />
                                    <Text weight="extrabold">Bruna Sousa</Text>
                                </VStack>
                                <Text as='small'  weight="medium">Aprovada para o concurso de Técnico Administrativo</Text>
                                <Divider/> 
                           </VStack>
                           <Card.Body>
                               <Text style={{fontStyle:'italic'}}>
                                "O conteúdo é atualizado, tem uma abordagem focada no que realmente cai nos concursos e a plataforma ainda oferece suporte para tirar dúvidas. 
                                Foi um divisor de águas no meu estudo e aprovação!" 
                                </Text>
                            </Card.Body>
                        </Card>
                        <Card style={{padding:'12px'}}>
                           <VStack>
                           <VStack style={{width:'100%'}} alignItems="center">
                                    <Avatar circle size="lg" style={{height:'80px',width:'80px'}} />
                                    <Text weight="extrabold">Angela Silva</Text>
                                </VStack>
                                <Text as='small' weight="medium"> Aprovada no concurso de Auditor Fiscal</Text>
                                <Divider/> 
                           </VStack>
                           <Card.Body>
                            <Text style={{fontStyle:'italic'}}>
                                "Não tinha muita confiança nos meus estudos, mas a metodologia da plataforma me deu a disciplina e 
                                foco necessários.Graças ao conteúdo completo e aos simulados, consegui minha aprovação no concurso de Auditor Fiscal" 
                                </Text>
                            </Card.Body>
                        </Card>
                  </GridContainer>
            </div>
    </Layout>
}