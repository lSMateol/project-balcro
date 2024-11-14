import NextAuth from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials';
import db from '@/lib/db';
import bcrypt from 'bcrypt';

const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password", placeholder: "********" }
      },
      async authorize(credentials, req) {
        try {
          const userFound = await db.User.findUnique({
            where: { email: credentials.email }
          });
          if (!userFound) throw new Error("No user found");

          const matchPassword = await bcrypt.compare(credentials.password, userFound.password);
          if (!matchPassword) throw new Error("Wrong password");

          return { id: userFound.id, name: userFound.username, email: userFound.email };
        } catch (error) {
          console.error("Authentication error:", error);
          throw new Error("Authentication failed");
        }
      }
    })
  ],
  pages: {
    signIn: "/auth/login"
  },
  secret: process.env.SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
