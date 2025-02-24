import { Button, Card, Container, Form, Input, InputNumber, SelectPicker,Text, Uploader} from "rsuite"
import Painel from "../../../components/Painel"
import FormControlLabel from "rsuite/esm/FormControlLabel"
import FormGroup from "rsuite/esm/FormGroup"
import FlexContainer from "../../../components/FlexContainer"
import './style.css'


export default ()=>{
  


  

    return <Painel>
        <Container  className="page">
            <Form>
                <Card as='fieldset'>
                 <Text as='legend'weight="extrabold" style={{fontSize:25}}>Novo Curso</Text>
                 <FormGroup>
                 
                </FormGroup>
                 <FormGroup>
                        <FormControlLabel>Nome</FormControlLabel>
                        <Input />
                        <Form.ErrorMessage placement="bottomEnd"></Form.ErrorMessage>
                    </FormGroup>
                 <FlexContainer >
                    <FormGroup style={{margin:'8px'}}>
                        <FormControlLabel>Preço</FormControlLabel>
                        <InputNumber min={200} placeholder="R$ 1400,00" max={999999999.00} scrollable={false}    decimalSeparator=","  />
                        <Form.ErrorMessage placement="bottomEnd"></Form.ErrorMessage>
                    </FormGroup>
                </FlexContainer>
                  <FormGroup style={{flex:'1',margin:'0 5px'}}>
                        <FormControlLabel>Categoria</FormControlLabel>
                        <SelectPicker className="select" block preventOverflow   data={['Tecnologia','Matemática','Postgures'].map(i=>({label:i,value:i}))} />
                        <Form.ErrorMessage placement="bottomEnd"></Form.ErrorMessage>
                </FormGroup>
                   
             
                <FormGroup  style={{margin:'8px'}}>
                    <FormControlLabel>Descrição</FormControlLabel>
                    <Input as='textarea' rows={10} style={{resize:'none'}} />
                    <Form.ErrorMessage placement="bottomEnd"></Form.ErrorMessage>
                </FormGroup>
                <FormGroup  style={{margin:'8px'}}>
                    <FormControlLabel>Conteúdo</FormControlLabel>
                    <Input as='textarea' rows={10} style={{resize:'none'}} />
                    <Form.ErrorMessage placement="bottomEnd"></Form.ErrorMessage>
                </FormGroup>
                <FlexContainer JC="center" p={'20px 150px'}>
                    <Button size="lg" block appearance="primary">Criar curso</Button>
                </FlexContainer>
                </Card>
            </Form>
          
        </Container>
    </Painel>
}