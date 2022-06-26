/* eslint-disable react/no-unescaped-entities */
import comics_sorter from '../helpers/comics_sorter'
import Main from '../components/Main';
import client from '../cms/client';
import Head from 'next/head'

export default function index({ comics }) {
  return (
    <>
    <Head>
      <title>xyn's diary</title>
      <link rel="icon" href="favicon.png" />
    </Head>
    <Main comics={comics}/>
    </>
  );
}

export async function getStaticProps() {
  let comics = await client.fetch(`*[_type == 'comic']`)
 
  return {
    props: {
      comics: comics_sorter(comics),
    },
    revalidate: 3600,
  };
}
