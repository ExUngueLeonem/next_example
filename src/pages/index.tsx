import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.scss'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import { ISocials } from '@/models/socials'
import Socials from '@/components/Socials'
import Layout from '@/components/Layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ socials }: { socials: ISocials[] }) {
  return (
    <>
      <Head>
        <title>HomePage</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.0/css/all.css" />
      </Head>
      <Layout>
        <Link href="/auth">auth</Link>
      </Layout>
      <Socials socials={socials} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  try {

    const res = await fetch(`${process.env.API_HOST}/socials/`);
    const data = await res.json();
    return {
      props: {
        socials: data,
      }
    }
  } catch {
    return { notFound: true };
  }
}