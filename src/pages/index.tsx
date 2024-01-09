import { Header, Footer, Hero, Experience } from "@/components";
import { Main } from "@/layouts/Main";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Angel Rincones | Portfolio</title>
        <meta name="description" content="Angel Rincones developer " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <Hero/>
        <Experience />
      </Main>
    </>
  );
}
