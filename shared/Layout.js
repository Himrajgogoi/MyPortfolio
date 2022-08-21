import Head from "next/head";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import Particles from "react-tsparticles";
import {loadFull} from "tsparticles"
import { useEffect, useState } from "react";

const Layout = ({ children }) => {
  

  
  
  // for particles animation
  const options = {
    background: {
      color: {
        value: "#282828",
      },
    },
    fpsLimit: 30,
    interactivity: {
      events: {
        onHover: {
          enable: false,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 100,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#ffffff",
      },
      links: {
        color: "#ffffff",
        distance: 120,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      collisions: {
        enable: false,
      },
      move: {
        direction: "none",
        enable: true,
        random: false,
        speed: 3,
        straight: false,
        out_mode: "out",
        bounce: false,
      },
      number: {
        density: {
          enable: false,
          area: 800,
        },
        value:50,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "square",
      },
      size: {
        random: true,
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
  };
  
  // initializing the particles animation
  const particlesInit = async (main) => {

    await loadFull(main);
  };
  return (
    <div>
      <Head>
        <meta charset='utf-8' />
        <meta http-equiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no' />
        <meta name='description' content='Description' />
        <meta name='theme-color' content='#282828' />
        <meta name="keywords" content="portfolio" />
        <link rel="icon" href="/logo.ico"></link>
        <link rel='apple-touch-icon' href='/apple-icon.png'></link>
        <link rel='manifest' href='/manifest.json' />
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
      {/* <video autoPlay playsInline muted>
        <source src="Portfolio.mp4" type="video/mp4" />
      </video> */}
       <Particles
      id="tsparticles"
      init={particlesInit}
      options={options}
      />
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
