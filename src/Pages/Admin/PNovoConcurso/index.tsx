import { Button, Card, Container, DatePicker,HStack, Form, Input, InputNumber, SelectPicker,Text} from "rsuite"
import Painel from "../../../components/Painel"
import FormControlLabel from "rsuite/esm/FormControlLabel"
import FormGroup from "rsuite/esm/FormGroup"
import { useState } from "react"
import FlexContainer from "../../../components/FlexContainer"


export default ()=>{

    const [levelsList,setlevelsList]=useState(['Fundamental','Medio','Superior'])
    const [abrangencyList,setAbrangencyList]=useState(['Municipal','Estadual','Nacional'])
    const [states,setStates]=useState(['Andamento','Concluido','Previsto'])



    return <Painel>
        <Container  className="page">
            <Form>
                <Card as='fieldset'>
                 <Text as='legend'weight="extrabold" style={{fontSize:25}}>Novo Concurso</Text>
                <FormGroup>
                    <FormControlLabel>Titulo</FormControlLabel>
                    <Input />
                    <Form.ErrorMessage placement="bottomEnd"></Form.ErrorMessage>
                </FormGroup>
                <FlexContainer >
                    <FormGroup style={{margin:'8px'}}>
                        <FormControlLabel>Número de vagas</FormControlLabel>
                        <InputNumber min={10} placeholder="50" scrollable={false} />
                        <Form.ErrorMessage placement="bottomEnd"></Form.ErrorMessage>
                    </FormGroup>
                    <FormGroup style={{margin:'8px'}}>
                        <FormControlLabel>Média Salarial</FormControlLabel>
                        <InputNumber min={200} placeholder="R$ 1400,00" max={999999999.00} scrollable={false}    decimalSeparator=","  />
                        <Form.ErrorMessage placement="bottomEnd"></Form.ErrorMessage>
                    </FormGroup>
                </FlexContainer>
                <FlexContainer >
                    <FormGroup style={{margin:'8px'}}>
                        <FormControlLabel>Inicio das inscrições</FormControlLabel>
                        <DatePicker />
                        <Form.ErrorMessage placement="bottomEnd"></Form.ErrorMessage>
                    </FormGroup>
                    <FormGroup style={{margin:'8px'}}>
                        <FormControlLabel>Final das inscrições</FormControlLabel>
                        <DatePicker />
                        <Form.ErrorMessage placement="bottomEnd"></Form.ErrorMessage>
                    </FormGroup>
                </FlexContainer>
                <FlexContainer JC="space-around"  style={{margin:'8px'}}>
                    <FormGroup style={{flex:'1',margin:'0 5px'}}>
                        <FormControlLabel>Formação Exigida</FormControlLabel>
                        <SelectPicker className="select" block preventOverflow   data={levelsList.map(i=>({label:i,value:i}))} />
                        <Form.ErrorMessage placement="bottomEnd"></Form.ErrorMessage>
                    </FormGroup>
                    <FormGroup style={{flex:'1',margin:'0 5px'}}>
                        <FormControlLabel>Abrangência</FormControlLabel>
                        <SelectPicker preventOverflow block data={abrangencyList.map(i=>({label:i,value:i}))} />
                        <Form.ErrorMessage placement="bottomEnd"></Form.ErrorMessage>
                    </FormGroup>
                    <FormGroup style={{flex:'1',margin:'0 5px'}}>
                        <FormControlLabel>Status</FormControlLabel>
                        <SelectPicker preventOverflow  block data={states.map(i=>({label:i,value:i}))} />
                        <Form.ErrorMessage placement="bottomEnd"></Form.ErrorMessage>
                    </FormGroup>
                    <FormGroup style={{flex:'1',margin:'0 5px'}}>
                        <FormControlLabel>Estado</FormControlLabel>
                        <SelectPicker preventOverflow block data={states.map(i=>({label:i,value:i}))} />
                        <Form.ErrorMessage placement="bottomEnd"></Form.ErrorMessage>
                    </FormGroup>
                    <FormGroup style={{flex:'1',margin:'0 5px'}}>
                        <FormControlLabel>Cidade</FormControlLabel>
                        <SelectPicker preventOverflow block data={states.map(i=>({label:i,value:i}))} />
                        <Form.ErrorMessage placement="bottomEnd"></Form.ErrorMessage>
                    </FormGroup>
                </FlexContainer>
                <FormGroup  style={{margin:'8px'}}>
                    <FormControlLabel>Banca organizadora</FormControlLabel>
                    <Input />
                    <Form.ErrorMessage placement="bottomEnd"></Form.ErrorMessage>
                </FormGroup>
                <FormGroup  style={{margin:'8px'}}>
                    <FormControlLabel>Link de incrições</FormControlLabel>
                    <Input />
                    <Form.ErrorMessage placement="bottomEnd"></Form.ErrorMessage>
                </FormGroup>
                <FormGroup  style={{margin:'8px'}}>
                    <FormControlLabel>Sobre</FormControlLabel>
                    <Input as='textarea' rows={30} style={{resize:'none'}} />
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