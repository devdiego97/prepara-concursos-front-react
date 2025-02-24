import z from 'zod'

export const userSchema = z.object({
   name: z.string({message:'campo obrigatório'}).trim().min(5,{message:'minimo 5 caracteres'}).max(20,{message:'máximo 20 caracteres'}),
   lastName: z.string({message:'campo obrigatório'}).trim().min(5,{message:'minimo 5 caracteres'}).max(20,{message:'máximo 20 caracteres'}),
   email: z.string({message:'campo obrigatório'}).trim().email({message:'email inválido'}),
   tel: z.string({message:'campo obrigatório'}).trim().regex(/^\d{2}\s?(?:9\d{4}|\d{4})\s?\d{4}$/,{message:'telefone inválido,remova espaços e traços'}),
   password: z.string({message:'campo obrigatório'}).trim().min(5,{message:'minimo 5 caracteres'}).max(20,{message:'máximo 20 caracteres'}),
 })


 export const userSchemaLogin=z.object({
  email: z.string({message:'campo obrigatório'}).trim().email({message:'email inválido'}),
  password: z.string({message:'campo obrigatório'}).trim().min(5,{message:'minimo 5 caracteres'}).max(20,{message:'máximo 20 caracteres'}),
 })