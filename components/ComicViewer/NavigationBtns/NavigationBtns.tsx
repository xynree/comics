
const {navigation, buttons} = {
  navigation: 'pl-4 pr-4 w-full flex gap-12 justify-between items-center font-nw  transition-all',
  buttons: 'text-xs w-36 hover:opacity-90 hover:bg-gray-100 pt-2 pb-2 rounded-full  bg-[#FEFAEE] font-nw-bold  transition-all'
}

interface Props {
  navigate: (() => void)[],
  prevNext: any[]
}

const NavigationBtns = ({navigate, prevNext}:Props) => {
  const [prev, home, next] = navigate

  return (
    <div className={navigation}>
     <button style={{'visibility': prevNext[0]? 'visible':'hidden'}} className={buttons}  onClick={prev} >prev</button>
     <button className={buttons} onClick={home}>home</button>
     <button style={{'visibility': prevNext[1]? 'visible':'hidden'}} className={buttons} onClick={next} >next</button>
    </div>
  );
}

export default NavigationBtns;