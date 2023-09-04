import NextAuth from "next-auth";

import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/models/User";
import connect from "@/utils/db";
import bcrypt from "bcryptjs"

declare module "next-auth" {
  interface Session {
    user: {
      role:string;
    };
  }
}
declare module "next-auth/jwt" {
  interface JWT {
    role:string;
  }
}

const handler = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: "606397664506-o8ifdqq4csurb0dhts7gusvrnfu4pl05.apps.googleusercontent.com",
      clientSecret: "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",
    }),
    // Email & Password
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials) {
        await connect();
      

        // Find user with the email
        const user = await User.findOne({
          email: credentials?.email,
        });

        // Email Not found
        if (!user) {
          throw new Error("Email is not registered");
        }

        // Check hased password with DB hashed password
        const isPasswordCorrect = await bcrypt.compare(
          credentials!.password,
          user.password
        );
        console.log("passorr", isPasswordCorrect);

        // Incorrect password
        if (!isPasswordCorrect) {
          throw new Error("Password is incorrect");
        }

        return user;
      },
    }),
  ],
  callbacks: {
    async session({ token, session }) {
      if (token) {
        session.user.role = token.role;
      }
      return session;
    },
    async jwt({ token }) {
      const userInDb = await User.findOne({
        
          email: token.email!,
        
      });
      token.role = userInDb?.role!;
      return token;
    },
  },

  secret: process.env.NEXTAUTH_SECRET,

  pages: {
    signIn: "/signup",
  }

});


export { handler as GET, handler as POST };