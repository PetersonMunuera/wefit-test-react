import Head from 'next/head'
import { HomeLayout } from "../components/layouts/Home"

export default function Home() {
  return (
    <>
      <Head>
        <title>Início</title>
      </Head>
      <HomeLayout />
    </>
  )
}