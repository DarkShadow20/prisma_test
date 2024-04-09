import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface UserUpdateProps{
    firstName:string,
    lastName:string
}

async function insertUser(email: string, password: string, firstName: string, lastName: string) {
  const res = await prisma.user.create({
    data:{
        email,
        password,
        firstName,
        lastName
    }
  })
  console.log(res)
}

async function updateUser(email:string,{firstName,lastName}:UserUpdateProps){
    const res = await prisma.user.update({
        where:{email:email},
        data:{
            firstName,
            lastName
        }
    })
    console.log(res)
}
//insertUser("kunal@gmail.com","kunal@123","Kunal","Gupta")
// updateUser('kunal@gmail.com',{
//     firstName:"KunalOG",
//     lastName:"Guptaji"
// })

async function getUser(email:string){
    const res = await prisma.user.findUnique({
        where:{
            email:email
        }
    }) 

    console.log(res)
}

async function deleteUser(email:string){
    const res = await prisma.user.delete({
        where:{
            email:email
        }
    })
    console.log(res)
}

deleteUser("kunal@gmail.com")
//getUser("kunal@gmail.com")