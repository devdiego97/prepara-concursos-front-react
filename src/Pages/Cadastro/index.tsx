import { Button, Card,Form,Heading,HStack,IconButton,Input,InputGroup,Loader,Message,Modal,Tag,Text, toaster, VStack } from "rsuite"
import FlexContainer from "../../components/FlexContainer"
import Layout from "../../components/Layout"
import EyeCloseIcon from '@rsuite/icons/EyeClose'
import VisibleIcon from '@rsuite/icons/Visible'
import FormControlLabel from "rsuite/esm/FormControlLabel"
import './style.css'
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useFormik } from "formik"
import { userSchema } from "../../schemas/user.schema"
import { toFormikValidationSchema } from "zod-formik-adapter"
import Loading from "../../components/Loading"
import { useContextData } from "../../context/contextdata"



export default ()=>{

    const {user,setUser}=useContextData()
    const [visible, setVisible] = useState(false)
    const [open,setOpen]=useState(false)
    const nav=useNavigate()


    const formik=useFormik({
        initialValues:{
            name:'',
            lastName:'',
            email:'',
            tel:'',
            password:''
        },
        validationSchema:toFormikValidationSchema(userSchema),
        onSubmit(values, {resetForm}) {
            setOpen(true)
            setTimeout(()=>{
                setOpen(false)
                console.log(values)
                resetForm()
                setUser({...values,id:Math.floor(Math.random() * 9999),type:'user'})
                nav('/concursos')
                toaster.push(<Message type='success' showIcon header="Conta criada com sucesso">
                    <Text>Bem vindo {user?.name}</Text>
                </Message>)
            },3900)
           
        },
    })


    return <Layout>
        <FlexContainer  JC="center" AI="center">
            <Card id="card">
                <Heading as='h1'>Criar Conta</Heading>
                <Text as='p' >Preencha os campos para entrar</Text>
                <Form >
                  <Form.Group id="cx-in">
                        <FormControlLabel as='label'>Nome</FormControlLabel>
                        <Input name="name" type="text" value={formik.values.name} onChange={v=>formik.setFieldValue('name',v)} size="md" />
                        <Form.ErrorMessage placement="bottomEnd" show={!!formik.errors.name}>{formik.errors.name}</Form.ErrorMessage>
                    </Form.Group>
                    <Form.Group id="cx-in">
                         <FormControlLabel as='label'>Sobrenome</FormControlLabel>
                          <Input type="text" name="lastName" value={formik.values.lastName} onChange={v=>formik.setFieldValue('lastName',v)} size="md" />
                        <Form.ErrorMessage placement="bottomEnd" show={!!formik.errors.lastName}>{formik.errors.lastName}</Form.ErrorMessage>
                        <Form.ErrorMessage placement="bottomEnd" show={!!formik.errors.lastName}>{formik.errors.lastName}</Form.ErrorMessage>
                    </Form.Group>
                    <Form.Group id="cx-in">
                        <FormControlLabel as='label'>Telefone</FormControlLabel>
                        <Input name="tel" type="tel" value={formik.values.tel} onChange={v=>formik.setFieldValue('tel',v)} size="md" />
                        <Form.ErrorMessage placement="bottomEnd"  show={!!formik.errors.tel}>{formik.errors.tel}</Form.ErrorMessage>
                    </Form.Group>
                    <Form.Group id="cx-in">
                        <FormControlLabel as='label'>Email</FormControlLabel>
                        <Input name="email" value={formik.values.email} onChange={v=>formik.setFieldValue('email',v)} size="md" />
                        <Form.ErrorMessage placement="bottomEnd" show={!!formik.errors.email}>{formik.errors.email}</Form.ErrorMessage>
                    </Form.Group>
                    <Form.Group>
                    <FormControlLabel >Senha</FormControlLabel>
                        <InputGroup inside id="cx-in" style={{width:'100%'}}>
                            <Input name="password" onChange={v=>formik.setFieldValue('password',v)}   type={visible ? 'text' : 'password'} />
                            <InputGroup.Button onClick={()=>setVisible(!visible)}>
                                {visible ? <VisibleIcon /> : <EyeCloseIcon />}
                            </InputGroup.Button>
                        </InputGroup>
                        <Form.ErrorMessage placement="bottomEnd" show={!!formik.errors.password}>{formik.errors.password}</Form.ErrorMessage>
                    </Form.Group>
                    <HStack id="cx-in" justifyContent="center" alignItems="center">
                        <Button size="lg" type="submit" onClick={formik.submitForm} style={{width:'50%'}}  appearance="primary">criar conta</Button>
                    </HStack>
                </Form>
                <VStack>
                    <HStack>
                      <Text>Já tem uma conta?</Text><Text><Link to='/esqueci-senha'>clique aqui</Link></Text>
                    </HStack>
                </VStack>
            </Card>

            <Modal overflow={false} size={'md'} open={open} closeButton={false}>
                 <FlexContainer JC="center" style={{height:'300px'}} >
                    <Loading size="small" color="#2973B2" textColor="#2973B2" text="Aguarde,estamos criando sua conta....." />
                  </FlexContainer>
            </Modal>
        </FlexContainer>
    </Layout>
}