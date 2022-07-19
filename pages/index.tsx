/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
import { comics_sorter } from '@helpers'
import {Comic} from '@types'
import Main from '../components/Main';
import client from '../cms/client';
interface Props {
  comics : Comic[]
}

export default function index({ comics }: Props) {
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
