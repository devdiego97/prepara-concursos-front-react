import { Button, Card,Form,Heading,HStack,Input,InputGroup,Message,Modal,Text, toaster, VStack } from "rsuite"
import FlexContainer from "../../components/FlexContainer"
import Layout from "../../components/Layout"
import EyeCloseIcon from '@rsuite/icons/EyeClose'
import VisibleIcon from '@rsuite/icons/Visible'
import FormControlLabel from "rsuite/esm/FormControlLabel"
import './style.css'
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useFormik } from "formik"
import { userSchemaLogin } from "../../schemas/user.schema"
import { toFormikValidationSchema } from "zod-formik-adapter"
import { useContextData } from "../../context/contextdata"
import Loading from "../../components/Loading"
export default ()=>{

    const [visible, setVisible] = useState(false)
    const [open,setOpen]=useState(false)
    const nav=useNavigate()
    const {user,setUser}=useContextData()

    const formik=useFormik({
        initialValues:{
            email:'',password:'',
        },
        validationSchema:toFormikValidationSchema(userSchemaLogin),
        onSubmit(values,{resetForm}) {
            setOpen(true)
            setTimeout(()=>{
                setOpen(false)
                console.log(values)
                if(user?.email === values.email && user?.password === values.password){
                    resetForm()
                    nav('/concursos')
                    toaster.push(<Message type='success' showIcon header="Conta criada com sucesso">
                        <Text>Bem vindo {user?.name}</Text>
                    </Message>)
                }else{
                    toaster.push(<Message type='error'showIcon header="Usuário não autenticado">
                        <Text>Seu Email e/ou senha estão incorretos</Text>
                    </Message>)
                }
            },3900)
            resetForm()
        },
    })

    return <Layout>
        <FlexContainer style={{height:'700px'}} JC="center" AI="center">
            <Card id="card">
                <Heading as='h1'>Entrar</Heading>
                <Text as='p' >Preencha os campos para entrar</Text>
                <Form>
                    <Form.Group id="cx-in">
                        <FormControlLabel as='label'>Email</FormControlLabel>
                        <Input name="email" type="email" onChange={v=>formik.setFieldValue('email',v)} size="md" />
                        <Form.ErrorMessage placement="bottomEnd" show={!!formik.errors.email}>{formik.errors.email}</Form.ErrorMessage>
                    </Form.Group>
                    <Form.Group>
                    <FormControlLabel >Senha</FormControlLabel>
                        <InputGroup inside id="cx-in" style={{width:'100%'}}>
                            <Input name="password" onChange={v=>formik.setFieldValue('password',v)} type={visible ? 'text' : 'password'} />
                            <InputGroup.Button onClick={()=>setVisible(!visible)}>
                                {visible ? <VisibleIcon /> : <EyeCloseIcon />}
                            </InputGroup.Button>
                        </InputGroup>
                        <Form.ErrorMessage placement="bottomEnd" show={!!formik.errors.password}>{formik.errors.password}</Form.ErrorMessage>
                    </Form.Group>
                    <HStack id="cx-in" justifyContent="center" alignItems="center">
                        <Button size="lg" style={{width:'50%'}}  type="submit" onClick={formik.submitForm} appearance="primary">entrar</Button>
                    </HStack>
                </Form>
                <VStack>
                    <HStack>
                      <Text>Esqueceu a senha</Text><Text><Link to='/esqueci-senha'>clique aqui</Link></Text>
                    </HStack>
                    <HStack>
                      <Text>Não tem uma conta?</Text><Text><Link to='/cadastro'>clique aqui</Link></Text>
                    </HStack>
                </VStack>

            </Card>
            <Modal overflow={false} size={'md'} open={open} closeButton={false}>
                 <FlexContainer JC="center" style={{height:'300px'}} >
                    <Loading size="small" color="#2973B2" textColor="#2973B2" text="Aguarde,estamos validando seus dados....." />
                  </FlexContainer>
            </Modal>
        </FlexContainer>
    </Layout>
}