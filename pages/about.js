import React, { useState } from 'react';

import Router from 'next/router';
import Spinner from '../components/Spinner';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AboutComponent from '../components/About';
import SocialMetaTags from '../components/SocialMetaTags';

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
      <SocialMetaTags 
        name="Hypseus - About"
        description="Explore a selection of articles "
        image="https://res.cloudinary.com/dhgkpiqzg/image/upload/v1676288226/hypseus/wanderer.jpg"
        url="https://www.hypseus.com/about"
        type="website"
        keywords="blog, article, kant, sublime, media, movie, music, videogame, book, philosophy, art"
      />
      <Header />
      {isLoading ?
        <Spinner />
        :
        <AboutComponent/>}
      <Footer />
    </div>
  )
}
