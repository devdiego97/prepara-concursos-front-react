





export const courses = [
    {
            id: 1,
            name: "Português Iniciante",
            category: "Linguagens",
            cover: "/portugues.jpg",
            content: ["Ortografia", "Gramática", "Interpretação de Texto"],
            free:true,
            price:0.00,
            notes:[
              {
                id:Math.floor(Math.random() * 999),
                title:'Didática portugues',
                content:`
                 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                 standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a 
                 type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining 
                 essentially  unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with d
                `
              },
              {
                id:Math.floor(Math.random() * 999),
                title:'Didática portugues',
                content:`
                 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                 standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a 
                 type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining 
                 essentially  unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with d
                `
              },
              {
                id:Math.floor(Math.random() * 999),
                title:'Didática portugues',
                content:`
                 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                 standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a 
                 type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining 
                 essentially  unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with d
                `
              },
              {
                id:Math.floor(Math.random() * 999),
                title:'Didática portugues',
                content:`
                 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                 standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a 
                 type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining 
                 essentially  unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with d
                `
              }
            ],
            materials:[
                {id:Math.floor(Math.random() * 9999),name:'resumão.pdf'},
                {id:Math.floor(Math.random() * 9999),name:'resumão.pdf'},
                {id:Math.floor(Math.random() * 9999),name:'resumão.pdf'},
                {id:Math.floor(Math.random() * 9999),name:'resumão.pdf'},
                {id:Math.floor(Math.random() * 9999),name:'resumão.pdf'},
                {id:Math.floor(Math.random() * 9999),name:'resumão.pdf'}
            ],
            objective: `
            s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make 
            a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
            Lorem Ipsum passages, 
            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
            `,
            modules: [
              {
                id: 1,
                name: "Ortografia",
                aulas: [
                  { id: 1, name: "Uso do Ç e SS", video: "ortografia1.mp4" },
                  { id: 2, name: "Uso do H", video: "ortografia2.mp4" }
                ]
              },
              {
                id: 2,
                name: "Gramática",
                aulas: [
                  { id: 3, name: "Sujeito e Predicado", video: "gramatica1.mp4" },
                  { id: 4, name: "Concordância Verbal", video: "gramatica2.mp4" }
                ]
              }
            ]
          },
          {
            id: 42,
            name: "Matemática  Básica",
            category: "Exatas",
            cover: "/matematica.png",
            content: ["Álgebra", "Geometria", "Trigonometria"],
            objective: `
            s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make 
            a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
            Lorem Ipsum passages, 
            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
            `,
            free:true,
            price:0.00,
            modules: [
              {
                id: 1,
                name: "Álgebra",
                aulas: [
                  { id: 1, name: "Equações do Primeiro Grau", video: "algebra1.mp4" },
                  { id: 2, name: "Expressões Algébricas", video: "algebra2.mp4" }
                ]
              },
              {
                id: 2,
                name: "Geometria",
                aulas: [
                  { id: 3, name: "Ângulos e Retas", video: "geometria1.mp4" },
                  { id: 4, name: "Cálculo de Área", video: "geometria2.mp4" }
                ]
              }
            ]
          },{
            id: 23,
        name: "Introdução ao TypeScript",
        category: "Programação",
        cover: "/typescript.jpg",
        content: [
            "Introdução ao TypeScript",
            "Configuração do ambiente",
            "Tipos básicos e avançados",
            "Interfaces e Classes",
            "Módulos e Namespaces"
        ],
        free:true,
        price:0.00,
        notes:[
          {
            id:Math.floor(Math.random() * 999),
            title:'Didática portugues',
            content:`
             is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
             standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a 
             type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining 
             essentially  unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with d
            `
          },
          {
            id:Math.floor(Math.random() * 999),
            title:'Didática portugues',
            content:`
             is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
             standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a 
             type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining 
             essentially  unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with d
            `
          },
          {
            id:Math.floor(Math.random() * 999),
            title:'Didática portugues',
            content:`
             is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
             standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a 
             type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining 
             essentially  unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with d
            `
          },
          {
            id:Math.floor(Math.random() * 999),
            title:'Didática portugues',
            content:`
             is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
             standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a 
             type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining 
             essentially  unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with d
            `
          }
        ],
        materials:[
            {id:Math.floor(Math.random() * 9999),name:'resumão.pdf'},
            {id:Math.floor(Math.random() * 9999),name:'resumão.pdf'},
            {id:Math.floor(Math.random() * 9999),name:'resumão.pdf'},
            {id:Math.floor(Math.random() * 9999),name:'resumão.pdf'},
            {id:Math.floor(Math.random() * 9999),name:'resumão.pdf'},
            {id:Math.floor(Math.random() * 9999),name:'resumão.pdf'}
        ],
        objective: `
        s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make 
        a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
        Lorem Ipsum passages, 
        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
        `,
        modules: [
            {
                id:1,
                name: "Módulo 1: Introdução",
                aulas: [
                    { id: 1, name: "O que é TypeScript?", video: "https://exemplo.com/videos/typescript-intro.mp4" },
                    { id: 2, name: "Configurando o ambiente", video: "https://exemplo.com/videos/typescript-setup.mp4" },
                    { id: 3, name: "Tipos básicos", video: "https://exemplo.com/videos/typescript-basic-types.mp4" },
                    { id: 4, name: "Tipos avançados", video: "https://exemplo.com/videos/typescript-advanced-types.mp4" },
                    { id: 5, name: "Interfaces", video: "https://exemplo.com/videos/typescript-interfaces.mp4" },
                    { id: 6, name: "Classes", video: "https://exemplo.com/videos/typescript-classes.mp4" },
                    { id: 7, name: "Módulos", video: "https://exemplo.com/videos/typescript-modules.mp4" },
                    { id: 8, name: "Namespaces", video: "https://exemplo.com/videos/typescript-namespaces.mp4" },
                    { id: 9, name: "Decorators", video: "https://exemplo.com/videos/typescript-decorators.mp4" },
                    { id: 10, name: "Projeto prático", video: "https://exemplo.com/videos/typescript-project.mp4" }
                ]
            },
            {
                id: 2,
                name: "Módulo 2: Avançado",
                aulas: [
                    { id: 11, name: "Generics", video: "https://exemplo.com/videos/typescript-generics.mp4" },
                    { id: 12, name: "Utility Types", video: "https://exemplo.com/videos/typescript-utility-types.mp4" },
                    { id: 13, name: "Mixins", video: "https://exemplo.com/videos/typescript-mixins.mp4" },
                    { id: 14, name: "Decorators avançados", video: "https://exemplo.com/videos/typescript-advanced-decorators.mp4" },
                    { id: 15, name: "Integração com React", video: "https://exemplo.com/videos/typescript-react.mp4" },
                    { id: 16, name: "Integração com Node.js", video: "https://exemplo.com/videos/typescript-nodejs.mp4" },
                    { id: 17, name: "Testes com TypeScript", video: "https://exemplo.com/videos/typescript-tests.mp4" },
                    { id: 18, name: "Boas práticas", video: "https://exemplo.com/videos/typescript-best-practices.mp4" },
                    { id: 19, name: "Projeto final", video: "https://exemplo.com/videos/typescript-final-project.mp4" },
                    { id: 20, name: "Q&A", video: "https://exemplo.com/videos/typescript-qa.mp4" }
                ]
            },
            // Repetir até 10 módulos...
        ]
    },
    {
        id: 34,
        name: "Inglês Completo",
        category: "Idiomas",
        cover: "/ingles.jpg",
        content: ["Gramática", "Vocabulário", "Conversação"],
        objective: `
        s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make 
        a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
        Lorem Ipsum passages, 
        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
        `,
        free:false,
        price:190.00,
        notes:[
          {
            id:Math.floor(Math.random() * 999),
            title:'Didática portugues',
            content:`
             is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
             standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a 
             type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining 
             essentially  unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with d
            `
          },
          {
            id:Math.floor(Math.random() * 999),
            title:'Didática portugues',
            content:`
             is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
             standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a 
             type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining 
             essentially  unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with d
            `
          },
          {
            id:Math.floor(Math.random() * 999),
            title:'Didática portugues',
            content:`
             is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
             standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a 
             type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining 
             essentially  unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with d
            `
          },
          {
            id:Math.floor(Math.random() * 999),
            title:'Didática portugues',
            content:`
             is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
             standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a 
             type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining 
             essentially  unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with d
            `
          }
        ],
        materials:[
            {id:Math.floor(Math.random() * 9999),name:'resumão.pdf'},
            {id:Math.floor(Math.random() * 9999),name:'resumão.pdf'},
            {id:Math.floor(Math.random() * 9999),name:'resumão.pdf'},
            {id:Math.floor(Math.random() * 9999),name:'resumão.pdf'},
            {id:Math.floor(Math.random() * 9999),name:'resumão.pdf'},
            {id:Math.floor(Math.random() * 9999),name:'resumão.pdf'}
        ],
        modules: [
          {
            id: 1,
            name: "Gramática",
            aulas: [
              { id: 1, name: "Present Simple vs. Present Continuous", video: "ingles1.mp4" },
              { id: 2, name: "Past Simple e Past Continuous", video: "ingles2.mp4" }
            ]
          },
          {
            id: 2,
            name: "Vocabulário",
            aulas: [
              { id: 3, name: "Palavras do Dia a Dia", video: "vocabulario1.mp4" },
              { id: 4, name: "Phrasal Verbs", video: "vocabulario2.mp4" }
            ]
        }
    ]},
    {
        id: 5,
        name: "Curso de DevOps",
        category: "Tecnologia",
        cover: "/devops.jpg",
        free:false,
        price:250.00,
        content: ["Integração Contínua", "Entrega Contínua", "Automação de Infraestrutura"],
        objective: `
        s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make 
        a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
        Lorem Ipsum passages, 
        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
        `,
        modules: [
          {
            id: 1,
            name: "Integração Contínua",
            aulas: [
              { id: 1, name: "Introdução ao Jenkins", video: "devops1.mp4" },
              { id: 2, name: "Configuração de Pipelines", video: "devops2.mp4" }
            ]
          },
          {
            id: 2,
            name: "Entrega Contínua",
            aulas: [
              { id: 3, name: "Deployment Automatizado", video: "devops3.mp4" },
              { id: 4, name: "Testes Automatizados", video: "devops4.mp4" }
            ]
          }]},
    {
        id: 6,
        name: "Curso de AWS",
        category: "Tecnologia",
        cover: "/aws.jpg",
        free:false,
        price:0.00,
        content: ["Fundamentos da AWS", "Serviços AWS", "Gerenciamento de Infraestrutura na Nuvem"],
        objective: `
        s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make 
        a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
        Lorem Ipsum passages, 
        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
        `,
        modules: [
          {
            id: 1,
            name: "Fundamentos da AWS",
            aulas: [
              { id: 1, name: "Introdução à AWS", video: "aws1.mp4" },
              { id: 2, name: "Principais Serviços da AWS", video: "aws2.mp4" }
            ]
          },
          {
            id: 2,
            name: "Serviços AWS",
            aulas: [
              { id: 3, name: "EC2: Instâncias e Configuração", video: "aws3.mp4" },
              { id: 4, name: "S3: Armazenamento na Nuvem", video: "aws4.mp4" }
            ]
          }]}
    ,
    {
        id: 36,
        name: "Curso de Geografia",
        category: "Ciências Humanas",
        cover: "/geografia.jpg",
        free:true,
        price:0.00,
        content: ["Geografia Física", "Geopolítica", "Cartografia"],
        objective: `
        s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make 
        a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
        Lorem Ipsum passages, 
        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
        `,
        notes:[
          {
            id:Math.floor(Math.random() * 999),
            title:'Didática portugues',
            content:`
             is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
             standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a 
             type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining 
             essentially  unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with d
            `
          },
          {
            id:Math.floor(Math.random() * 999),
            title:'Didática portugues',
            content:`
             is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
             standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a 
             type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining 
             essentially  unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with d
            `
          },
          {
            id:Math.floor(Math.random() * 999),
            title:'Didática portugues',
            content:`
             is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
             standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a 
             type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining 
             essentially  unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with d
            `
          },
          {
            id:Math.floor(Math.random() * 999),
            title:'Didática portugues',
            content:`
             is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
             standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a 
             type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining 
             essentially  unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with d
            `
          }
        ],
        materials:[
            {id:Math.floor(Math.random() * 9999),name:'resumão.pdf'},
            {id:Math.floor(Math.random() * 9999),name:'resumão.pdf'},
            {id:Math.floor(Math.random() * 9999),name:'resumão.pdf'},
            {id:Math.floor(Math.random() * 9999),name:'resumão.pdf'},
            {id:Math.floor(Math.random() * 9999),name:'resumão.pdf'},
            {id:Math.floor(Math.random() * 9999),name:'resumão.pdf'}
        ],
        modules: [
          {
            id: 1,
            name: "Geografia Física",
            aulas: [
              { id: 1, name: "Relevo e Clima", video: "geografia1.mp4" },
              { id: 2, name: "Biomas Mundiais", video: "geografia2.mp4" }
            ]
          },
          {
            id: 2,
            name: "Geopolítica",
            aulas: [
              { id: 3, name: "Globalização e Economia", video: "geopolitica1.mp4" },
              { id: 4, name: "Conflitos Internacionais", video: "geopolitica2.mp4" }
            ]
          }
        ]
      },
    {
        id:34,
        name: "Desenvolvimento Web com React",
        category: "Desenvolvimento Web",
        cover: "/react.png",
        free:true,
        price:0.00,
        content: [
            "Introdução ao React",
            "Componentes e Props",
            "Estado e Ciclo de Vida",
            "Roteamento",
            "Gerenciamento de Estado com Redux"
        ],
        notes:[
          {
            id:Math.floor(Math.random() * 999),
            title:'Didática portugues',
            content:`
             is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
             standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a 
             type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining 
             essentially  unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with d
            `
          },
          {
            id:Math.floor(Math.random() * 999),
            title:'Didática portugues',
            content:`
             is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
             standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a 
             type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining 
             essentially  unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with d
            `
          },
          {
            id:Math.floor(Math.random() * 999),
            title:'Didática portugues',
            content:`
             is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
             standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a 
             type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining 
             essentially  unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with d
            `
          },
          {
            id:Math.floor(Math.random() * 999),
            title:'Didática portugues',
            content:`
             is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
             standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a 
             type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining 
             essentially  unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with d
            `
          }
        ],
        materials:[
            {id:Math.floor(Math.random() * 9999),name:'resumão.pdf'},
            {id:Math.floor(Math.random() * 9999),name:'resumão.pdf'},
            {id:Math.floor(Math.random() * 9999),name:'resumão.pdf'},
            {id:Math.floor(Math.random() * 9999),name:'resumão.pdf'},
            {id:Math.floor(Math.random() * 9999),name:'resumão.pdf'},
            {id:Math.floor(Math.random() * 9999),name:'resumão.pdf'}
        ],
        objective: `
        s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make 
        a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
        Lorem Ipsum passages, 
        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
        `,
        modules: [
            {
                id: 1,
                name: "Módulo 1: Fundamentos",
                aulas: [
                    { id: 1, name: "O que é React?", video: "https://exemplo.com/videos/react-intro.mp4" },
                    { id: 2, name: "JSX", video: "https://exemplo.com/videos/react-jsx.mp4" },
                    { id: 3, name: "Componentes", video: "https://exemplo.com/videos/react-components.mp4" },
                    { id: 4, name: "Props", video: "https://exemplo.com/videos/react-props.mp4" },
                    { id: 5, name: "Estado", video: "https://exemplo.com/videos/react-state.mp4" },
                    { id: 6, name: "Eventos", video: "https://exemplo.com/videos/react-events.mp4" },
                    { id: 7, name: "Ciclo de Vida", video: "https://exemplo.com/videos/react-lifecycle.mp4" },
                    { id: 8, name: "Hooks", video: "https://exemplo.com/videos/react-hooks.mp4" },
                    { id: 9, name: "Context API", video: "https://exemplo.com/videos/react-context-api.mp4" },
                    { id: 10, name: "Projeto prático", video: "https://exemplo.com/videos/react-project.mp4" }
                ]
            },
            {
                id: 2,
                name: "Módulo 2: Avançado",
                aulas: [
                    { id: 11, name: "Roteamento com React Router", video: "https://exemplo.com/videos/react-router.mp4" },
                    { id: 12, name: "Redux", video: "https://exemplo.com/videos/react-redux.mp4" },
                    { id: 13, name: "Redux Toolkit", video: "https://exemplo.com/videos/react-redux-toolkit.mp4" },
                    { id: 14, name: "Testes com Jest", video: "https://exemplo.com/videos/react-jest.mp4" },
                    { id: 15, name: "Testes com React Testing Library", video: "https://exemplo.com/videos/react-testing-library.mp4" },
                    { id: 16, name: "Styled Components", video: "https://exemplo.com/videos/react-styled-components.mp4" },
                    { id: 17, name: "Integração com APIs", video: "https://exemplo.com/videos/react-apis.mp4" },
                    { id: 18, name: "Autenticação", video: "https://exemplo.com/videos/react-authentication.mp4" },
                    { id: 19, name: "Projeto final", video: "https://exemplo.com/videos/react-final-project.mp4" },
                    { id: 20, name: "Q&A", video: "https://exemplo.com/videos/react-qa.mp4" }
                ]
            },
        ]
    }, 
 
]

