import React, {useState} from "react";

import Router from "next/router";
import Spinner from "../../components/Spinner";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PostView from "../../components/PostView";
import SocialMetaTags from "../../components/SocialMetaTags";
import BuyNow from '../../components/BuyNow';

export default function Post({post}) {
  const [isLoading, setIsLoading] = useState(false);

  if(!post) {
    return null;
  }

  Router.events.on("routeChangeStart", () => {
    setIsLoading(true);
  });
  Router.events.on("routeChangeComplete", () => {
    setIsLoading(false);
  });

  return (
    <div>
      <SocialMetaTags 
        name={`${post.title} - Hypseus`}
        description={post.seoDescription}
        image={post.image}
        url={`https://www.hypseus.com/items/${post.slug}`}
        type="article"
        keywords="list, recommendations, curated, blog, kant, sublime, media, movie, music, videogame, book, philosophy, art"
      />
      <Header />
      {isLoading ? <Spinner /> : <><PostView post={post} />{post.affiliate ? <BuyNow item={post}/> : null }</>}
      <Footer />
    </div>
  );
}

export const getStaticPaths = async () => {
  const res = await fetch(`${process.env.API_HOST}/api/posts`);
  const posts = await res.json();

  const paths = posts.map((post) => ({
    params: {slug: post.slug},
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  let fetchURL = new URL(
    `${process.env.API_HOST}/api/posts/${context.params.slug}`
  );
  const postRequest = await fetch(fetchURL.toString());
  const posts = await postRequest.json();
    const post = posts[0];
  return {
    props: {post},
  };
};
