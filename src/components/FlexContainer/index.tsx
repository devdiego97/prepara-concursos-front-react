import { HTMLAttributes, ReactNode } from "react"
import { Container } from "./style"


export interface IFlexProps extends HTMLAttributes<HTMLDivElement>{
    JC?:'flex-start' |'flex-end' |'center' |'space-around' | 'space-between',
    AI?:'flex-start' |'flex-end' |'center' |'space-around' | 'space-between',
    m?:number | string,
    p?:string | number,
    flexR?:number,
    flexL?:number,
    order?:number,
    WidhtLeft?:number | string,
    children?:ReactNode,
    h?:string | number,
    direction?:'column' | 'row'
}
export default ({children,...rest}:IFlexProps)=>{
    return <Container {...rest}>
        {children}
     </Container>
}