import { Card, Image,Button,Text, HStack, Tag, Divider } from "rsuite"
import { ICurso } from "../../interfaces/cursos.interface"
import { useLocation, useNavigate } from "react-router-dom"

type props={
    course:ICurso
}

export default ({course}:props)=>{
    const nav=useNavigate()
    const location=useLocation()

    return <Card as='div'>
        <Image height={150} src={course.cover} alt=""/>
        <Card.Header>
            <Text weight="semibold" style={{height:'90px'}} maxLines={2}>{course.name}</Text>
        </Card.Header>
        <Card.Body>
            <HStack>
                {course.free ? <Tag size="lg" color="blue">Gratuito</Tag> : <Tag>R$ {course.price.toFixed(2).replace('.',',')}</Tag>}
                <Tag size="lg" color="green">{course.category}</Tag>
            </HStack>
        </Card.Body>
        <Divider></Divider>
        <Card.Footer>
            {!location.pathname.includes('/admin/') ? <Button block size='lg' 
               onClick={()=>nav(`/cursos/${course.name}/${course.id}`)} appearance="primary">ver curso</Button> :
             <Button block size='lg' onClick={()=>nav(`/admin/cursos/${course.name}/${course.id}`)} appearance="primary">Matricular</Button>
            }
        </Card.Footer>
    </Card>

}