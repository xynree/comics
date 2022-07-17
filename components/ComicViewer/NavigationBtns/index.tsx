import { Comic } from '../../../types/types'


const {navigation, buttons} = {
  navigation: 'pl-4 pr-4 w-full flex gap-12 justify-between items-center font-nw  transition-all',
  buttons: 'text-xs w-36 hover:opacity-90 pt-2 pb-2 rounded-full  bg-[#FEFAEE] font-nw-bold  transition-all'
}

interface Props {
  navigate: (() => void)[],
  hasNavigate: [Comic|any,Comic|any]
}

const NavigationBtns = ({navigate, hasNavigate}:Props) => {
  const [prev, home, next] = navigate

  return (
    <div className={navigation}>
     <button style={{'visibility': hasNavigate[0]? 'visible':'hidden'}}className={buttons}  onClick={prev} >prev</button>
     <button className={buttons} onClick={home}>home</button>
     <button style={{'visibility': hasNavigate[1]? 'visible':'hidden'}} className={buttons} onClick={next} >next</button>
    </div>
  );
}

export default NavigationBtns;