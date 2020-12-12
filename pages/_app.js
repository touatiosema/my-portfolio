import Head from "next/head";
import NavBar from "../components/NavBar";
import "../styles/globals.scss";
// import "tailwindcss/tailwind.css";

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
