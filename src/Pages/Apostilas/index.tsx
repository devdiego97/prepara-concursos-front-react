import { Card, Container, Heading, Modal, VStack,Image,Text,HStack, List, Button, toaster, Message, Drawer } from "rsuite"
import Layout from "../../components/Layout"
import GridContainer from "../../components/GridContainer"
import { apostilasData } from "../../data/apostilas.data"
import CardApostila from "../../components/CardApostila"
import { useState } from "react"
import { IApostila } from "../../interfaces/apostila.interface"
import { useContextData } from "../../context/contextdata"


export default ()=>{
    const {user}=useContextData()
    const [open,setOpen]=useState(false)
    const [apostilaId,setApostilaId]=useState<IApostila | null>(null)

const openModalAndSetAPostilaId=(apostila:IApostila | null)=>{
    setApostilaId(apostila)
    setOpen(true)
}

const byEbook=()=>{

    if(!user){
            toaster.push(<Message bordered header='Você não tem uma conta de usuário' type="error" closable >
                Crie a sua conta de usuaário para concluir a ação
            </Message>)
    }
}

    return <Layout>
        <Container>
            <Heading>Apostilas</Heading>
            <GridContainer m={'100px 0'} cols={4} gap={'12px'} fr={1}>
                {apostilasData.map((a,k)=><CardApostila onClick={()=>openModalAndSetAPostilaId(a)} apostila={a} key={k} />)}
            </GridContainer>
        </Container>
        <Drawer  open={open} onClose={() => setOpen(false)}>
        <Drawer.Header>
          <Drawer.Title>{apostilaId?.name}</Drawer.Title>
        </Drawer.Header>
        <Drawer.Body>
             <HStack  justifyContent="center" style={{height:'200px',background:'#eee',borderRadius:'9px',padding:'30px 12px'}}>
               <Image src={apostilaId?.image} alt="imagem da apostila" />
            </HStack>
            <VStack spacing={12} style={{ margin:'12px 0' }}>
                <Card style={{padding:'22px' }}>
                    <Heading>CONTEÚDO</Heading>
                    <List>
                        {apostilaId?.content.map(i=><List style={{ color :'#2973B2'}}>{i}</List>)}
                    </List>
                </Card>
                
                <Container>
                    <VStack>
                        <Text style={{textDecoration:'underline' }} as='dt'>De R$300,00</Text>
                        <Text>por</Text>
                        <Text style={{ fontSize:'33px' }}>R${apostilaId?.price.toFixed(2)}</Text>
                    </VStack>
                </Container>
            </VStack>
            
        </Drawer.Body>
      </Drawer>
   
    </Layout>

}