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
  env: any;
}

const Home: FC<IProps> = ({ socials, env }: { socials: ISocials[], env: any }) => {
  return (
    <>
      <Head>
        <title>HomePage</title>
      </Head>
      <Layout>
        test 18
        <br />
        <Link href="/auth">auth</Link>
        <br />
        {env}
      </Layout>
      <Socials socials={socials} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  try {
    const res = await fetch(`${process.env.API_HOST}/socials`);
    const data = await res.json();
    console.log(process.env.API_HOST)

    return {
      props: {
        socials: data,
        env: process.env.API_HOST
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