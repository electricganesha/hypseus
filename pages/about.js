import React, { useState } from 'react';

import Head from 'next/head';
import Router from 'next/router';
import Spinner from '../components/Spinner';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AboutComponent from '../components/About';

export default function About() {
  const [isLoading, setIsLoading] = useState(false);

  Router.events.on('routeChangeStart', () => {
    setIsLoading(true);
  });
  Router.events.on('routeChangeComplete', () => {
    setIsLoading(false);
  });

  return (
    <div>
      <Head>
        <title>Hypseus - Blog</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      {isLoading ?
        <Spinner />
        :
        <AboutComponent/>}
      <Footer />
    </div>
  )
}
