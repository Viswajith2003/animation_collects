// components/ParallaxBackground.jsx
import React from "react";
import Head from "next/head";

export default function ParallaxBackground() {
  return (
    <>
      <Head>
        <title>Parallax Star Background</title>
        <link
          href="https://fonts.googleapis.com/css?family=Lato:300,400,700"
          rel="stylesheet"
          type="text/css"
        />
      </Head>
      <section className="wrapper">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
        <div className="title">
          <span>PURE CSS</span>
          <br />
          <span>PARALLAX PIXEL BACKGROUND</span>
        </div>
      </section>
    </>
  );
}
