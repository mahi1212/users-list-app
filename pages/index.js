import { useRouter } from "next/router";
import Layout from "../components/Layout";
import Head from 'next/head'

export default function Home() {
  const router = useRouter();
  return (
    <Layout title="Home Page">
      {/* <Head>
        <title>title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head> */}
      <h1>Mini project 1</h1>
      <button onClick={() => { router.push('/about') }}>Goo to about page</button>
    </Layout>
  )
}
