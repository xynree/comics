import { useState } from 'react';

const COLORS = [
  'bg-[#869D89]',
  'bg-[#CD7662]',
  'bg-[#8E97B2]',
  "bg-[#EDBC70]",
  "bg-[#E5E5E5]",
];
const randomColor = () => COLORS[Math.floor(Math.random() * COLORS.length)];

const DayBubble = ({comic, setActiveComic}) => {
  const [color,] = useState(randomColor())

  return (
    <button
    type="button"
    className={`rounded-full w-7 h-7 ${color} transition-all hover:opacity-90 hover:text-white text-slate-100/0 text-xs m-0.5 `  }
    onClick={() => setActiveComic(comic)}
  >
    <p className="pt-0.5">
      {comic.title.split('.')[1]}
    </p>
  </button>
  );
}

export default DayBubble;