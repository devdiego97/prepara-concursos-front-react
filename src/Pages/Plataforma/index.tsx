import { Button, ButtonGroup, ButtonToolbar, Card, Container,Heading,HStack,IconButton,Input,List,Placeholder,Tabs,Text, VStack } from "rsuite"
import Layout from "../../components/Layout"
import FlexContainer from "../../components/FlexContainer"
import { useParams } from "react-router-dom"
import { courses } from "../../data/courses"
import { RiGraduationCapLine as Study } from "react-icons/ri"
import { VideoPlayer } from "../../components/VideoPlayer"
import Tooltip from "../../components/Tooltip"
import { HiOutlinePencilAlt as AddNoteIcon } from "react-icons/hi"
import { HiAcademicCap  as CourseIcon} from "react-icons/hi"
import { GrResources as ModuleIcon} from "react-icons/gr"
import { useEffect, useState } from "react"
import { BsFileEarmarkPdfFill as PDfFile } from "react-icons/bs";
import { ICurso, IMaterial, INotes } from "../../interfaces/cursos.interface"
import PlaceholderGrid from "rsuite/esm/Placeholder/PlaceholderGrid"
import GridContainer from "../../components/GridContainer"
import { FaDownload as DownIcon } from "react-icons/fa6";
import CardNote from "../../components/CardNote"
import Tab from "rsuite/esm/Tabs/Tab"
import { data } from "framer-motion/client"
import CardModuleCourse from "../../components/CardModuleCourse"



export default ()=>{
    const params=useParams()
    const [loading,setLoading]=useState(true)
    const courseId:ICurso=courses.find((i=>i.id === parseInt(params.id as string))) as ICurso
    const [notes,setNotes]=useState<INotes[] | null>(null)
    const [filesMaterials,setFilesMaterials]=useState<IMaterial[] | null>(null)
    const [noteBox,setNoteBox]=useState(false)
    const [modulesBox,setModulesBox]=useState(false)
    const [aboutBox,setAboutBox]=useState(false)
    const dataButtonToolBar=[{icon:<ModuleIcon style={{width:'20px',height:'30px'}} />,label:'Módulos'},
           {icon:<AddNoteIcon style={{width:'20px',height:'30px'}}  />,label:'Nova anotação'}, 
           {icon:<CourseIcon  style={{width:'20px',height:'30px'}} />,label:'Sobre o curso'}
    ]

    const [activeKey, setActiveKey] = useState<any | {icon:JSX.Element,label:string}>('Módulos')
   

    useEffect(()=>{
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
            setNotes(courseId.notes as INotes[])
            setFilesMaterials(courseId.materials as IMaterial[])
        },2900)
    },[])

    return <Layout >
        <> 
        <GridContainer gap={'0 12px'}  fr={1} cols={2}>
                    <Container style={{padding:'12px'}}>
                        <Heading style={{marginBottom:'12px'}}>Aulax</Heading>
                        <VideoPlayer />
                    </Container>
                    <Container>
                        <Card>
                            <Card as='section' style={{padding:'12px'}}>
                                <Card>
                                    <Tabs style={{height:'600px',padding:'12px'}} defaultActiveKey={'modules'}>
                                       <Tabs.Tab  eventKey={'modules'} icon={<ModuleIcon style={{width:'20px',height:'30px'}} />} title='Módulos'>
                                        
                                           {courseId.modules.map(m=><CardModuleCourse module={m} />)}
                                          
                                        </Tabs.Tab>
                                        <Tabs.Tab eventKey={'note'} icon={<AddNoteIcon style={{width:'20px',height:'30px'}}  />} title='Nova anotação'>
                                            <VStack style={{padding:'12px'}}>
                                                <Input style={{height:'460px',resize:'none'}} as='textarea' />
                                                <FlexContainer style={{width:'100%'}} JC="center" AI="center" >
                                                  <Button size="md" appearance="primary" color="blue" >guardar</Button>
                                                </FlexContainer>
                                            </VStack>
                                        </Tabs.Tab>
                                        <Tabs.Tab eventKey={'about'} icon={<CourseIcon  style={{width:'20px',height:'30px'}} />} title='Sobre'>
                                            <Text>
                                                {courseId.objective}
                                            </Text>
                                        </Tabs.Tab>
                                     
                                    </Tabs>
                                </Card>
                            </Card>
                            
                        </Card>
                    </Container>
              </GridContainer>
           
                <Card style={{margin:'70px 0',padding:'12px'}}>
                    <Tabs defaultActiveKey="1">
                        <Tabs.Tab eventKey="1" title="Anotações" icon={<PDfFile style={{width:'20px',height:'30px'}}  />}>
                            {!loading && notes &&  notes?.length < 0 && <PlaceholderGrid rows={12} columns={4} />}
                            {notes &&  notes?.length > 0 && <GridContainer gap={'8px'} fr={1} cols={3}>
                                {notes.map(n=><CardNote note={n} />)}
                            </GridContainer> }
                        </Tabs.Tab>
                        <Tabs.Tab eventKey="2" title="Square" icon={<PDfFile style={{width:'20px',height:'30px'}}  />}>
                          {!loading && filesMaterials &&  filesMaterials?.length < 0 && <Placeholder rows={12} rowSpacing={8} active />}
                            {filesMaterials &&  filesMaterials?.length > 0 && <List>
                                {filesMaterials.map(n=><List.Item>
                                     <HStack justifyContent="space-between">
                                       <Text>{n.name}</Text>
                                      <Tooltip trigger="hover" text="Baixar" placement="left">
                                       <IconButton appearance="primary" color="green" icon={<DownIcon />} />
                                      </Tooltip>
                                    </HStack>
                                    </List.Item>)}
                            </List> }

                        </Tabs.Tab>
                    
                    </Tabs>
                </Card>
                                

        </>

    </Layout>
}