import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

// Extend User and Session types to include email
declare module 'next-auth' {
  interface User {
    email?: string;
  }
  interface Session {
    user?: {
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
  }
}

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        console.log('🔐 Login attempt received:');
        console.log('Email:', credentials?.email);
        console.log('Password:', credentials?.password ? '***' : 'undefined');
        console.log('Timestamp:', new Date().toISOString());

        // Simulasi delay seperti real API
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Validasi bebas - asal ada email dengan @ dan password tidak kosong
        if (credentials?.email && credentials?.password) {
          // Cek apakah email mengandung @
          if (
            credentials.email.includes('@') &&
            credentials.password.length > 0
          ) {
            console.log('✅ Login successful');

            // Buat nama dari email (ambil bagian sebelum @)
            const nameFromEmail = credentials.email.split('@')[0];
            const capitalizedName =
              nameFromEmail.charAt(0).toUpperCase() + nameFromEmail.slice(1);

            return {
              id: Date.now().toString(), // Generate unique ID
              name: capitalizedName, // Nama dari email
              email: credentials.email,
            };
          }
        }

        console.log('❌ Login failed');
        return null;
      },
    }),
  ],
  pages: {
    signIn: '/auth/login',
    error: '/auth/login', // Redirect error ke login page
  },
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user }) {
      console.log('📝 JWT callback - Token:', token);
      if (user) {
        token.email = user.email;
        token.name = user.name;
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      console.log('👤 Session callback - Session:', session);
      if (session.user) {
        session.user.email = token.email as string;
        session.user.name = token.name as string;
      }
      return session;
    },
  },
});

export { handler as GET, handler as POST };
