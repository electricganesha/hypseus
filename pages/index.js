import React, { useState } from 'react';

import Head from 'next/head';
import Router from 'next/router';
import Spinner from '../components/Spinner';
import Header from '../components/Header';
import SortFilters from '../components/SortFilters';
import ItemsGrid from '../components/ItemsGrid';
import CategoryMenuWrapper from '../components/CategoryMenuWrapper';
import Footer from '../components/Footer';
import Auth from '../components/Auth';

export default function Home(props) {
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
        <title>Hypseus</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <SortFilters />
      {isLoading ? <Spinner /> : <ItemsGrid data={props.items} />}
      <CategoryMenuWrapper />
      <Footer />
    </div>
  )
}

export async function getServerSideProps(context) {
let fetchURL = new URL(`${process.env.API_HOST}/api/items`);
  if(context && context.req) {
  const {category, sort, order } = context?.query;
  if (category) {
    fetchURL.searchParams.append("category", category);
  }

  if (sort) {
    fetchURL.searchParams.append("sort", sort);
    fetchURL.searchParams.append("order", order);
  }
}
  const itemsRequest = await fetch(fetchURL.toString());
  const items = await itemsRequest.json();
  return {
    props: { items },
  };
}
