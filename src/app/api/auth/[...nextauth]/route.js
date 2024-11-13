import NextAuth from "next-auth";
import CredentialsProviders from 'next-auth/providers/credentials'
import db from '@/lib/db'
import bcrypt from 'bcrypt'

const authOptions = {
    providers: [
        CredentialsProviders({
            name: "Credentials",
            credentials:{
                email:{label: "Email", type: "text", placeholder: "jsmith"},
                password:{label: "Email", type: "password", placeholder: "********"}
            },
            async authorize (credentials, req){ 
                console.log(credentials);

                const userFound = await db.User.findUnique({
                    where:{
                        email:credentials.email
                    }
                })

                if(!userFound) throw new Error ("No user found")

                console.log(userFound)

                const matchPassword= await bcrypt.compare(credentials.password, userFound.password)

                if(!matchPassword) throw new Error ("Wrong Password")

                return {
                    id: userFound.id,
                    name: userFound.username,
                    email: userFound.email,
                };
            }
        })
    ],
    pages: {
        signIn: "/auth/login"      
    }
};

const handler = NextAuth(authOptions);

export {handler as GET, handler as POST};