import React, { useCallback, useEffect, useState } from 'react';

import Router from 'next/router';
import Spinner from '../components/Spinner';
import Header from '../components/Header';
import SortFilters from '../components/SortFilters';
import ItemsGrid from '../components/ItemsGrid';
import CategoryMenuWrapper from '../components/CategoryMenuWrapper';
import Footer from '../components/Footer';
import SocialMetaTags from '../components/SocialMetaTags';

export default function Home(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [isAlphabeticalDesc, setIsAlphabeticalDesc] = useState(true);
  const [isDateDesc, setIsDateDesc] = useState(true);
  const [items, setItems] = useState(props.items);

  Router.events.on('routeChangeStart', () => {
    setIsLoading(true);
  });
  Router.events.on('routeChangeComplete', () => {
    setIsLoading(false);
  });

  const onChangeAlphabeticalFilter = useCallback((value) => {
    setIsAlphabeticalDesc(value);

    if (value) {
      setItems(items.sort((a, b) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();
        return (nameA < nameB) ? -1 : (nameA > nameB) ? 1 : 0;
      }));
    } else {
      setItems(items.sort((a, b) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();
        return (nameA > nameB) ? -1 : (nameA < nameB) ? 1 : 0;
      }));
    }
  }, [items]);

  const onChangeDateFilter = useCallback((value) => {
    setIsDateDesc(value);

    if (value) {
      setItems(items.sort((a, b) => b.year - a.year));
    } else {
       setItems(items.sort((a, b) => a.year - b.year));
    }
  }, [items]);

  const onChangeCategoryFilter = useCallback((value) => {
    onChangeAlphabeticalFilter(true);
    onChangeDateFilter(true);

    if (value === 'all') {
      setItems(props.items);
      return;
    }

    setItems(props.items.filter(item => item.type === value));

  }, [props.items, onChangeAlphabeticalFilter, onChangeDateFilter]);

  return (
    <div>
      <SocialMetaTags 
        name="Hypseus"
        description="Hypseus is a curated list of literary, musical, cinema and videogame recommendations linking to the Kantian idea of sublimity."
        image="https://res.cloudinary.com/dhgkpiqzg/image/upload/v1676288226/hypseus/wanderer.jpg"
        url="https://www.hypseus.com"
        type="website"
        keywords="list, recommendations, curated, blog, kant, sublime, media, movie, music, videogame, book, philosophy, art"
      />
      <Header />
      <SortFilters
        isAlphabeticalDesc={isAlphabeticalDesc}
        onChangeAlphabeticalFilter={onChangeAlphabeticalFilter}
        isDateDesc={isDateDesc}
        onChangeDateFilter={onChangeDateFilter} 
      />
      {isLoading ? <Spinner /> : <ItemsGrid data={items} />}
      <CategoryMenuWrapper onChangeCategoryFilter={onChangeCategoryFilter}/>
      <Footer />
    </div>
  )
}

export async function getStaticProps(context) {
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
