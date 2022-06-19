import comics_sorter from '../helpers/comics_sorter'
import Main from '../components/Main';
import client from '../cms/client';


export default function index({ comics }) {
  return (
    <Main comics={comics}/>
  );
}

export async function getStaticProps() {
  let comics = await client.fetch(`*[_type == 'comic']`)
 
  return {
    props: {
      comics: comics_sorter(comics),
    },
  };
}
