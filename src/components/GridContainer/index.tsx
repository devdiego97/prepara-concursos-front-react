import { HTMLAttributes, ReactNode } from "react"
import { Container } from "./style"


export interface IGridProps extends HTMLAttributes<HTMLDivElement>{
    gap:number | string,
    cols:number,
    m?:number | string,
    p?:string | number,
    fr:number,
    children:ReactNode
}
export default ({children,...rest}:IGridProps)=>{
    return <Container {...rest}>
        {children}
     </Container>
}