


export interface IRoutesLink{
    name:string,path:string,linkAuth?:boolean,isUser:boolean,nav:boolean,doubleCondidition?:boolean
}
/*
[]somente os que sao de navegacao e possuem user
[]somente os que sao de navegacao e possuem usuarios


*/
export const RoutesLink:IRoutesLink[]=[
    { 
        name:'Inicio',
        path:'/',
        nav:true,
        isUser:false,
      
    },
 { 
        name:'Concursos',
        path:'/concursos',
        isUser:true,
        nav:true,
        doubleCondidition:true
    },
    { 
        name:'Cursos',
        path:'/cursos',
        isUser:true,
        nav:true,
        doubleCondidition:true
    },
    { 
        name:'Apostilas',
        path:'/apostilas',
        isUser:true,
        nav:true,
        doubleCondidition:true
    },
    { 
        name:'Entrar',
        path:'/entrar',
        linkAuth:true,
        isUser:false,
        nav:true,
      
    },
    { 
        name:'Cadastro',
        path:'/cadastro',
        linkAuth:true,
        isUser:false,
        nav:true,
    },
    { 
        name:'Meus cursos',
        path:'/meus-cursos',
       isUser:true,
       nav:true
    },

{ 
    name:'Minha conta',
    path:'/minha-conta',
    isUser:true,
    nav:true
},

]