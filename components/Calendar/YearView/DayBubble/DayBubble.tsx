import { Dispatch, SetStateAction, useState } from 'react';
import { Comic } from '../../../../types/types';

const COLORS = [
  'bg-[#869D89]',
  'bg-[#CD7662]',
  'bg-[#8E97B2]',
  "bg-[#EDBC70]",
  "bg-[#E5E5E5]",
];
const randomColor = () => COLORS[Math.floor(Math.random() * COLORS.length)];

interface Props {
  comic: Comic,
  setActiveComic: Dispatch<SetStateAction<Comic>>,
  selectedComic: Comic
}
const DayBubble = ({comic, setActiveComic, selectedComic}:Props) => {
  const [color,] = useState(randomColor())

  return (
    <button
    type="button"
    className={`rounded-full w-7 h-7  ${selectedComic._id === comic._id? 'border-4 border-gray-700 text-slate-800':'text-slate-100/0'} ${color}  transition-all hover:opacity-90 hover:text-slate-800  text-xs m-0.5`}
    onClick={() => setActiveComic(comic)}
  >
    <p className="pt-0.5 " style={{fontSize: '0.72rem'}}>
      {comic.title.split('.')[1]}
    </p>
  </button>
  );
}

export default DayBubble;