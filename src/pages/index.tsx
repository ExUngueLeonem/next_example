import { GetStaticProps } from 'next'

import Head from 'next/head'
import Link from 'next/link'
import { Inter } from 'next/font/google'

import { FC } from 'react'
import { ISocials } from '@/models/socials'

import Socials from '@/components/Socials'
import Layout from '@/components/Layout'

const inter = Inter({ subsets: ['latin'] })

interface IProps {
  socials: ISocials[];
}

const Home: FC<IProps> = ({ socials }: { socials: ISocials[] }) => {
  return (
    <>
      <Head>
        <title>HomePage</title>
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
    return {
      props: {
        socials: [],
      }
    }
  }
}

export default Home;