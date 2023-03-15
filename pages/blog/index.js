import React, { useState } from 'react';

import Router from 'next/router';
import Spinner from '../../components/Spinner';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import BlogComponent from '../../components/Blog';
import SocialMetaTags from '../../components/SocialMetaTags';

export default function Blog({posts}) {
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
        name="Hypseus - Blog"
        description="Explore a selection of articles "
        image="https://res.cloudinary.com/dhgkpiqzg/image/upload/v1676288226/hypseus/wanderer.jpg"
        url="https://www.hypseus.com/blog"
        type="website"
        keywords="blog, article, kant, sublime, media, movie, music, videogame, book, philosophy, art"
      />
      <Header />
      {isLoading ? <Spinner /> : <BlogComponent posts={posts}/>}
      <Footer />
    </div>
  )
}

export const getStaticProps = async (context) => {
let fetchURL = new URL(`${process.env.API_HOST}/api/posts`);
  const postsRequest = await fetch(fetchURL.toString());
  const posts = await postsRequest.json();
  return {
    props: { posts },
  };
};
