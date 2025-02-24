import { Button, Card,HStack,Image,Text, toaster, } from "rsuite"
import { IApostila } from "../../interfaces/apostila.interface"



type props={
    apostila:IApostila,
    onClick:()=>void
}



export default ({apostila,onClick}:props)=>{
  

    return <Card >
       <HStack  style={{padding:'20px 0',background:'#eee'}} justifyContent="center" alignItems="center">
         <Image src={apostila.image} zoomed alt='cover da apostila' />
       </HStack>
        <Card.Header>
            <Text as='h4'>{apostila.name}</Text>
        </Card.Header>
        <Card.Footer style={{margin:'30px'}}>
            <Button onClick={onClick} size="lg" block appearance="primary" color="blue">ver detalhes</Button>
        </Card.Footer>
    </Card>
}