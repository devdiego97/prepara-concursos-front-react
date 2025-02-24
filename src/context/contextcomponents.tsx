import { createContext, ReactNode, useContext, useState } from "react";


type TContext={
   
   onMenuMobile:boolean,
  handleOnMobile:(state:boolean)=>void,
   theme:'dark' | 'light',
   handleTheme:(theme:'dark' | 'light')=>void
}

type Props={
    children:ReactNode
}

const context=createContext<TContext>(  
    {onMenuMobile:false,
    handleOnMobile:()=>{},
     theme:'light',
     handleTheme:()=>{}
    }
)


export const ContextUIProvider=({children}:Props)=>{
    const [theme,handleTheme]=useState<'light' | 'dark'>('light')
    const [onMenuMobile,handleOnMobile]=useState<true | false>(false)

const value={
    theme,handleOnMobile,onMenuMobile,handleTheme
}
    return <context.Provider value={value}>
        {children}
    </context.Provider>
}

export const useContextUI=()=>useContext(context)