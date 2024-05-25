import Head from "next/head";
import About from "@/components/about";
import Featured from "@/components/featured";
import Navbar from "@/components/navbar";
import Experience from "@/components/experience";

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Software Developer - Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <Featured />
        <About />
        <Experience />
      </main>
    </>
  );
}
