import React, {useState} from "react";

import Router from "next/router";
import Spinner from "../../components/Spinner";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ItemView from "../../components/ItemView";
import SocialMetaTags from "../../components/SocialMetaTags";
import BuyNow from "../../components/BuyNow";

export default function Post({item}) {
  const [isLoading, setIsLoading] = useState(false);

  if(!item) {
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
        name={`${item.name} - Hypseus`}
        description={item.seoDescription}
        image={item.image}
        url={`https://www.hypseus.com/items/${item.slug}`}
        type="article"
        keywords={item.seoKeywords}
      />
      <Header />
      {isLoading ? <Spinner /> : <><ItemView item={item} />{item.affiliate ? <BuyNow item={item}/> : null }</>}
      <Footer />
    </div>
  );
}

export const getStaticPaths = async () => {
  const res = await fetch(`${process.env.API_HOST}/api/items`);
  const items = await res.json();

  const paths = items.map((item) => ({
    params: {slug: item.slug},
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
    let fetchURL = new URL(
        `${process.env.API_HOST}/api/items/${context.params.slug}`
    );
    const itemRequest = await fetch(fetchURL.toString());
    const items = await itemRequest.json();
    
    const item = items[0];

    return {
        props: {item},
    };
};
