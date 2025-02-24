


export interface  IUser{
    id:number,
    name:string,
    lastName:string,
    email:string,
    password:string,
    tel:string,
    type:'user' | 'admin' | null,
    photo?:string

}