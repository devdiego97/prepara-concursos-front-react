import { Container, VStack } from "rsuite"
import { Header } from "../Header"
import { ReactNode } from "react"
import './style.css'
import Footer from "../Footer"
type Props={
    children:ReactNode
}
export default ({children}:Props)=>{
    return <Container>
            <Header />
            <VStack justifyContent="center" alignItems="center">
                <Container as={'main'} >
                    {children}
                </Container>
            </VStack>
            <Footer />
    </Container>
}