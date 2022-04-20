import { useRouter } from "next/router";
import Layout from "../components/Layout";

export default function Home() {
  const router = useRouter();
  return (
    <Layout>
        <h1>Mini project 1</h1>
        <button onClick={()=>{router.push('/about')}}>Goo to about page</button>
    </Layout>
  )
}
