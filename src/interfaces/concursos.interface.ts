


export interface  IConcurso{
id:number,
name:string,
dataRegitrationStart:Date,
dataRegitrationSEnd:Date,
status:'Andamento' |'Finalizado' | 'Concluido',
cover:string,
levelRequired:'Fundamental' |'Medio' | 'Superior',
abrangency: 'Nacional' |'Municipal' | 'Estadual',
urlResgistration:string,
about:string,


}
