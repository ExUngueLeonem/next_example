import { GetStaticProps } from 'next'

import Head from 'next/head'
import Link from 'next/link'
import { Inter } from 'next/font/google'

import { FC } from 'react'
import { ISocials } from 'models/socials'

import Socials from 'components/Socials'
import Layout from 'components/Layout'
import HypnoSpiral from "../components/HypnoSpiral";

const inter = Inter({subsets: ['latin']})

interface IProps {
  socials: ISocials[];
}

const Home: FC<IProps> = ({socials}: { socials: ISocials[] }) => {
  return (
    <>
      <Head>
        <title>HomePage</title>
      </Head>
      <HypnoSpiral/>
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