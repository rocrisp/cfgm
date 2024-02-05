import "font-awesome/css/font-awesome.min.css";
import Head from "next/head";
import State from "../src/context/state";
import PreLoader from "../src/layout/PreLoader";
import "../styles/globals.css";
function MyApp({ Component, pageProps }) {
  return (
    <State>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="author" content="Alex Jordan" />
        <meta name="description" content="Alex Jordan - vCard / Resume / CV" />
        <meta name="keywords" content="Host websites, Alex Jordan portfolio and resume, LMS, OpenedX, open edx, host LMS, host landing page" />
        <link
          href="https://fonts.googleapis.com/css?family=Poppins:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="css/basic.css" />
        <link rel="stylesheet" href="css/layout.css" />
        <link rel="stylesheet" href="css/blogs.css" />
        <link rel="stylesheet" href="css/ionicons.css" />
        <link rel="stylesheet" href="css/magnific-popup.css" />
        <link rel="stylesheet" href="css/animate.css" />
        <link rel="stylesheet" href="css/gradient.css" />

        <title>Alex Jordan - vCard / Resume / CV</title>
        <link rel="shortcut icon" href="images/favicons/favicon.ico" />
      </Head>
      <PreLoader />
      <Component {...pageProps} />
    </State>
  );
}

export default MyApp;
