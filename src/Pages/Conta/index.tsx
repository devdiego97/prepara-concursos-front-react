import { Text,Avatar, Card, Container, Divider,  HStack, 
    VStack, Button, Toggle, Modal,
    Form,
    Input,InputGroup,
    List,
  } from "rsuite"
import Layout from "../../components/Layout"
import FlexContainer from "../../components/FlexContainer"
import { useContextData } from "../../context/contextdata"
import { useContextUI } from "../../context/contextcomponents"
import { useState } from "react"
import FormControlLabel from "rsuite/esm/FormControlLabel"
import EyeCloseIcon from '@rsuite/icons/EyeClose'
import VisibleIcon from '@rsuite/icons/Visible'
import { GlobalStyle } from "../../App.style"
import { IoMail as Email } from "react-icons/io5"
import { FaPhone as Phone} from "react-icons/fa6"
import { RiLockPasswordFill as Pass } from "react-icons/ri"
import { BannerImg } from "../../components/BannerImg"
import { useFormik } from "formik"
import { userSchema } from "../../schemas/user.schema"
import { toFormikValidationSchema } from "zod-formik-adapter"


export default ()=>{
    const [open,setOpen]=useState(false)
    const {user}=useContextData()
    const [visible, setVisible] = useState(false)
    const {theme,handleTheme}=useContextUI()

    
    const formik=useFormik({
        initialValues:{
            name:user?.name,
            lastName:user?.lastName,
            email:user?.email,
            password:user?.password,
            tel:user?.tel
        },
        validationSchema:toFormikValidationSchema(userSchema),
        onSubmit:()=>{

        },
    })


return (<Layout>
        <Container>
            <VStack>
              
            </VStack>
            <Divider></Divider>
            <FlexContainer >
                <VStack className="children-left"  justifyContent="center" alignItems="center" >
                    <Card style={{width:'70%'}}>
                        <Card.Header style={{background:`${GlobalStyle.BgPrimary}`,height:'190px'}}>
                            <HStack alignItems="center" justifyContent="center">
                              <Avatar circle size="xxl"  style={{marginTop:'100px'}}/>
                            </HStack>
                        </Card.Header>
                        <Card.Body>
                            <HStack style={{margin:'50px 0'}} justifyContent="center" alignItems="center">
                                <Text as='h4' >{user?.name} {user?.lastName}</Text>
                            </HStack>
                            <VStack style={{margin:'20px 0'}}>
                                <HStack>
                                    <Email size={30} />
                                    <Text weight="light">{user?.email}</Text>
                                </HStack>
                                <HStack>
                                    <Phone size={30} />
                                    <Text>{user?.tel}</Text>
                                </HStack>
                                <HStack>
                                    <Pass size={30} />
                                    <Text>{user?.password}</Text>
                                </HStack>
                            </VStack>
                        </Card.Body>
                        <Card.Footer style={{margin:'20px 0'}}>
                                <Button block size='lg' onClick={()=>setOpen(true)} appearance="primary">Editar</Button>
                               <VStack>
                                 <Button block size="lg" appearance="ghost">Sair</Button>
                               </VStack>
                        </Card.Footer>
                    </Card>
                </VStack >
                <Container  className="children-right" style={{padding:'12px'}}>
                    <Card style={{padding:'12px'}}>
                        <VStack style={{margin:'12px 0'}}>
                           <VStack>
                              <BannerImg  imageUrl="/planos.png" />
                                <FlexContainer JC="space-between">
                                <Card style={{padding:'12px',margin:'5px 3px'}}>
                                    <Text as='h2'>Plano Essencial</Text>
                                    <p>Escolha esse plano caso deseje estudar para somente um curso especifico</p>
                                    <VStack style={{margin:'15px 0'}}>
                                        <Text as='h4'>Beneficios</Text>
                                        <List>
                                            <List.Item>Acesso á todas as aulas do curso escolhido</List.Item>
                                            <List.Item>suporte humano</List.Item>
                                            <List.Item>Acesso ao grupo privado do whatssap</List.Item>
                                            <List.Item>Acesso á materiais e lives</List.Item>
                                        </List>
                                        <Text as='h5'>Pagamento único de R$ 50,00</Text>
                                        <Button style={{margin:'20px 0'}} block appearance="primary">Quero esse plano</Button>
                                    </VStack>
                                  
                                </Card>
                                <Card style={{padding:'12px',margin:'5px 3px'}}>
                                    <Text as='h2'>Plano Estudante</Text>
                                    <p>Escolha esse plano caso deseje estudar para somente um curso especifico</p>
                                    <VStack style={{margin:'15px 0'}}>
                                        <Text as='h4'>Beneficios</Text>
                                        <List>
                                            <List.Item>Acesso á todas os cursos da plataforma</List.Item>
                                            <List.Item>suporte humano</List.Item>
                                            <List.Item>Acesso ao grupo privado do whatssap</List.Item>
                                            <List.Item>Acesso á materiais e lives</List.Item>
                                            <List.Item>Acesso pra sempre(enquanto manter a assinatura)</List.Item>
                                        </List>
                                        <Text as='h5'>Pagamento Mensal de R$ 150,00</Text>
                                        <Button block style={{margin:'20px 0'}} appearance="primary">Quero esse plano</Button>
                                    </VStack>
                                  
                                </Card>
                             </FlexContainer>
                           </VStack>

                            <VStack>
                                <Text>Alterer o tema</Text>
                                <Toggle
                                    size="lg"
                                    onChange={()=>theme =='light'? handleTheme('dark') : handleTheme('light')}
                                     checkedChildren="dark" unCheckedChildren="light"
                                    defaultChecked
                                />
                            </VStack>
                        </VStack>
                    </Card>
                </Container>
            </FlexContainer>
        </Container>
        <Modal open={open} size={'lg'} closeButton={false} >
            <Modal.Header closeButton={false}>
                <Text as='h3'>Atualizar Dados</Text>
                <Divider></Divider>
            </Modal.Header>
            <Modal.Body>
                <Form >
                    <Form.Group>
                        <FormControlLabel>Nome</FormControlLabel>
                        <Input type= 'text' value={formik.values.name} name='name' onChange={v=>formik.setFieldValue('name',v)} />
                        <Form.ErrorMessage placement="bottomEnd" show={!!formik.errors.name}>{formik.errors.name}</Form.ErrorMessage>
                    </Form.Group>
                    <Form.Group>
                        <FormControlLabel>Sobrenome</FormControlLabel>
                        <Input type= 'text' value={formik.values.lastName} name='lastname' onChange={v=>formik.setFieldValue('lastname',v)} />
                        <Form.ErrorMessage placement="bottomEnd" show={!!formik.errors.lastName}>{formik.errors.lastName}</Form.ErrorMessage>
                    </Form.Group>
                    <Form.Group>
                        <FormControlLabel>Tel</FormControlLabel>
                            <Input value={formik.values.tel} name='tel' type="tel" onChange={v=>formik.setFieldValue('tel',v)} />
                            <Form.ErrorMessage placement="bottomEnd" show={!!formik.errors.email}>{formik.errors.email}</Form.ErrorMessage>
                     </Form.Group>
                    
                    <Form.Group>
                      <FormControlLabel>Email</FormControlLabel>
                        <Input value={formik.values.email} type="email"  name='email' onChange={v=>formik.setFieldValue('email',v)} />
                        <Form.ErrorMessage placement="bottomEnd" show={!!formik.errors.email}>{formik.errors.email}</Form.ErrorMessage>
                    </Form.Group>
                    <Form.Group>
                        <FormControlLabel>Senha</FormControlLabel>
                        <InputGroup style={{width:'100%'}} >
                        <Input type={visible ? 'text' : 'password'}  value={formik.values.password} name='password' 
                           onChange={v=>formik.setFieldValue('password',v)}  
                        />
                        <InputGroup.Button onClick={()=>setVisible(!visible)}>
                            {visible ? <VisibleIcon /> : <EyeCloseIcon />}
                        </InputGroup.Button>
                        </InputGroup>
                        <Form.ErrorMessage placement="bottomEnd" show={!!formik.errors.password}>{formik.errors.password}</Form.ErrorMessage>
                    </Form.Group>
                    <HStack justifyContent="center">
                        <Button size='lg'  type='submit' appearance="primary" >Atualizar</Button>
                        <Button onClick={()=>setOpen(false)} disabled={formik.isValid ? true : false } size='lg' appearance="ghost" >Fechar</Button>
                    </HStack>
                </Form>
            </Modal.Body>
        </Modal>
    </Layout>)
}