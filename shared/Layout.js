import Head from "next/head";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <meta name="keywords" content="portfolio" />
        <link rel="icon" href="/logo.ico"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@500&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Hind+Madurai&display=swap"
          rel="stylesheet"
        />
      </Head>
      <video autoPlay playsInline muted>
        <source src="Portfolio.mp4" type="video/mp4" />
      </video>
      {children}
      <Footer />
      <style jsx global>{`
        video {
          object-fit: cover;
          width: 100vw;
          height: 100vh;
          position: fixed;
          top: 0;
          left: 0;
        }
        h2 {
          color: white;
          font-size: 2em;
          font-family: "Montserrat Alternates", sans-serif;
        }
        h4 {
          color: white;
          font-size: 1em;
          font-family: "Montserrat Alternates", sans-serif;
        }
        h5 {
          color: rgba(30, 101, 12, 1);
          font-size: 1em;
          font-family: "Hind Madurai", sans-serif;
        }

        .animate {
          -webkit-animation-duration: 1s;
          animation-duration: 1s;
          -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
        }

        /* for fade in left */
        .left {
          -webkit-animation-delay: 0.4s;
          -moz-animation-delay: 0.4s;
          animation-delay: 0.4s;
        }

        @-webkit-keyframes fadeInLeft {
          from {
            opacity: 0;
            -webkit-transform: translate3d(-100%, 0, 0);
            transform: translate3d(-100%, 0, 0);
          }

          to {
            opacity: 1;
            -webkit-transform: none;
            transform: none;
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            -webkit-transform: translate3d(-100%, 0, 0);
            transform: translate3d(-100%, 0, 0);
          }

          to {
            opacity: 1;
            -webkit-transform: none;
            transform: none;
          }
        }

        .fadeInLeft {
          -webkit-animation-name: fadeInLeft;
          animation-name: fadeInLeft;
        }

        /* for fade in right */
        .right {
          -webkit-animation-delay: 0.4s;
          -moz-animation-delay: 0.4s;
          animation-delay: 0.4s;
        }

        @-webkit-keyframes fadeInRight {
          from {
            opacity: 0;
            -webkit-transform: translate3d(100%, 0, 0);
            transform: translate3d(100%, 0, 0);
          }

          to {
            opacity: 1;
            -webkit-transform: none;
            transform: none;
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            -webkit-transform: translate3d(100%, 0, 0);
            transform: translate3d(100%, 0, 0);
          }

          to {
            opacity: 1;
            -webkit-transform: none;
            transform: none;
          }
        }

        .fadeInRight {
          -webkit-animation-name: fadeInRight;
          animation-name: fadeInRight;
        }

        /* for fade in down */

        .down {
          -webkit-animation-delay: 1.7s;
          -moz-animation-delay: 1.7s;
          animation-delay: 1.7s;
        }

        @-webkit-keyframes fadeInDown {
          from {
            opacity: 0;
            -webkit-transform: translate3d(0, -100%, 0);
            transform: translate3d(0, -100%, 0);
          }

          to {
            opacity: 1;
            -webkit-transform: none;
            transform: none;
          }
        }
        @keyframes fadeInDown {
          from {
            opacity: 0;
            -webkit-transform: translate3d(0, -100%, 0);
            transform: translate3d(0, -100%, 0);
          }

          to {
            opacity: 1;
            -webkit-transform: none;
            transform: none;
          }
        }

        .fadeInDown {
          -webkit-animation-name: fadeInDown;
          animation-name: fadeInDown;
        }

        @media screen and (min-width: 900px) {
          h2 {
            color: white;
            font-size: 5em;
            font-family: "Montserrat Alternates", sans-serif;
          }
          h4 {
            color: white;
            font-size: 3em;
            font-family: "Montserrat Alternates", sans-serif;
          }
          h5 {
            color: rgba(30, 101, 12, 1);
            font-size: 2em;
            font-family: "Hind Madurai", sans-serif;
          }
        }
      `}</style>
    </div>
  );
};

export default Layout;
