
const COLORS = ['bg-emerald-600', 'bg-sky-600', 'bg-fuchsia-600', 'bg-rose-600', 'bg-yellow-600']
const Calendar = ({comics, setActiveComic}) => {
  const randomColor = ()=> COLORS[Math.floor(Math.random()*COLORS.length)]


  return (
    <div className='h-screen bg-amber-50 overflow-auto no-scrollbar'>
      {comics?.map((comic) => 
      <button type='button' key={comic._id} className={`rounded-full w-10 h-10 ${randomColor()} hover:opacity-75 `} onClick={() => setActiveComic(comic)}> <p className='hover:visible text-slate-100  text-xs'>{comic.title.slice(0,-3)}</p></button>
      )}

      
    </div>
  );
}

export default Calendar;