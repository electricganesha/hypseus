import React, { useState } from 'react';

import Head from 'next/head';
import Router from 'next/router';
import Spinner from '../components/Spinner';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BlogComponent from '../components/Blog';

export default function Blog(props) {
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
      {isLoading ? <Spinner /> : <BlogComponent/>}
      <Footer />
    </div>
  )
}
