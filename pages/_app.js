'use client';
import Layout from '../component/Layout'
import '@/styles/globals.css'
import '../styles/Navbar.css'
import '../styles/Hero.css'
import '../styles/About.css'
import '../styles/Skills.css'
import '../styles/Educacion.css'
import '../styles/Footer.css'
import '../styles/Portofolio.css'
import '../styles/Contact.css'
import '../styles/AdminData.css'
import { AuthProvider } from '@/Context/Auth.Context'
import { QueryClient, QueryClientProvider } from "react-query"
import Head from 'next/head';
import favicon from '../public/assets/favicon.ico';

export default function App({ Component, pageProps }) {


  const queryClient = new QueryClient()
  return (
    
    <>
      <Head>
      <link rel="shortcut icon" href={favicon.src} type="image/x-icon" />
    </Head>
    <QueryClientProvider client={queryClient}>
    <AuthProvider>
  <Layout>
   <Component {...pageProps} />
  </Layout>
    </AuthProvider>
    </QueryClientProvider>
  </>
    )
}

