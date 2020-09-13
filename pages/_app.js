import "../styles/globals.css";
import Head from "next/head";
import NavBar from "./components/NavBar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Osema TOUATI - Student of software engineering</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
