import prisma from "@database/prismadb"
import bcrypt from "bcrypt"
//import { NextResponse } from "next/server"


export async function POST(request: Request, response: any){
    const body = await request.json()
    const {
        name,
        email, 
        password
    } = body 
    const hashedPassword = await bcrypt.hash(password, 12)
    try {
        const user = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword
            }
        })
        console.log(user,"-- user ")
        response.status(200).json(user)
    } catch {
        response.status(500).send("An error occurred")
    }
}
