

export interface INotes{
    id:number,
    title:string,
    content:string
}

export interface IMaterial{
    id:number,
    name:string,
    file?:File | string 
}
export interface IClass{
    id:number,
    name:string,
    video:string
}
export interface IModule{
    id:number,
    name:string,
    aulas:IClass[]
}
export interface ICurso{
    id:number,
    name:string,
    category:string,
    cover:string,
    price:number,
    free:boolean
    content:string[],
    objective:string,
    modules:IModule[],
    notes?:INotes[],
    materials?:IMaterial[]

}