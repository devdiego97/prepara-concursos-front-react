import { createContext, ReactNode, useContext, useState } from "react";
import { IUser } from "../interfaces/user.interface";
import { IApostila } from "../interfaces/apostila.interface";

type TContext={
    user:IUser | null,
    setUser:(newUser:IUser)=>void,
    apostila:IApostila | null,
    setApostila:(newApostila:IApostila)=>void,
}

type Props={
    children:ReactNode
}

const context=createContext<TContext>({} as TContext)


export const ContextDataProvider=({children}:Props)=>{
    const [user,setUser]=useState<IUser| null>(
     {
        id:1,
    photo:'/image.png',
    name:'Diego',
    lastName:'Dutra Morais',
    email:'diegodev@gmail.com',
    password:'dev1233',
    tel:'1198754567',
    type:'user'
     }
)
    
{/* id:1,
    photo:'/image.png',
    name:'Diego',
    lastName:'Dutra Morais',
    email:'diegodev@gmail.com',
    password:'dev1233',
    tel:'1198754567',
    type:'user'
    */
}    
    

    const [apostila,setApostila]=useState<IApostila | null>(null)
 


/*
{
        id:1,
        photo:'/image.png',
        name:'Diego Dutra Morais',
        email:'diegodev@gmail.com',
        password:'dev1233',
        tel:'1198754567',
        type:'user'
    }
*/
    const value={user,setUser,apostila,setApostila}

    return <context.Provider value={value}>
        {children}
    </context.Provider>
}


export const useContextData=()=>useContext(context)