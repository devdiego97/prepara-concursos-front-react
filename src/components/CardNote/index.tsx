import { Card, Divider, HStack, IconButton,Text } from "rsuite"
import { INotes } from "../../interfaces/cursos.interface"
import Tooltip from "../Tooltip"
import { HiOutlineTrash as TrashIcon } from "react-icons/hi"

type props={
    note:INotes
}
export default ({note}:props)=>{

    return <Card key={note.id + Math.floor(Math.random() * 999)} style={{margin:'0 8px',padding:'12px'}}>
    <Card.Header>
       <HStack justifyContent="space-between">
           <Text weight="bold">{note.title}</Text>
           <Tooltip trigger="hover" text="deletar" placement="rightStart">
             <IconButton color="red" appearance="primary"  size="md" icon={<TrashIcon />} />
           </Tooltip>
       </HStack>
   </Card.Header>
   <Divider />
   <Card.Body>
      {note.content}
   </Card.Body>
</Card>
}