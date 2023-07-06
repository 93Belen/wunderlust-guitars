import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import EmailProvider from "next-auth/providers/email"
import SpotifyProvider from "next-auth/providers/spotify"
import CognitoProvider from "next-auth/providers/cognito"
import CredentialsProvider from "next-auth/providers/credentials"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const authOptions = {
	adapter: PrismaAdapter(prisma),
  providers: [
      CognitoProvider({
        clientId: process.env.COGNITO_CLIENT_ID as string,
        clientSecret: process.env.COGNITO_CLIENT_SECRET as string,
        issuer: process.env.COGNITO_ISSUER,
      })
  ]
}
const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }