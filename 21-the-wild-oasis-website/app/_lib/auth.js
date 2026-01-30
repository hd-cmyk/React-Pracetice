import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { createGuest, getGuest } from "./data-service";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      try {
        const email = user?.email;
        if (!email) return false;

        const existingGuest = await getGuest(email);
        if (!existingGuest) {
          await createGuest({ email, fullName: user?.name ?? "" });
        }
        return true;
      } catch (error) {
        console.error("SignIn Error:", error);
        return false;
      }
    },
    async session({ session, token }) {
      try {
        const email = session?.user?.email;
        if (!email) return session;

        const guest = await getGuest(email);
        if (guest?.id) {
          session.user.guestId = guest.id;
        }
        return session;
      } catch (error) {
        console.error("Session Error:", error);
        return session;
      }
    },
  },
  pages: {
    signIn: "/login",
  },
};

export default NextAuth(authOptions);
