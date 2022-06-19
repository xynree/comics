const {navigation, buttons} = {
  navigation: 'pl-4 pr-4 w-full flex gap-12 justify-between items-center font-nw  transition-all',
  buttons: 'text-xs w-36 hover:[font-nw-thin] pt-2 pb-2 rounded-full hover:underline bg-[#FEFAEE]  transition-all'
}

const NavigationBtns = ({navigate}) => {
  const [prev, home, next] = navigate

  return (
    <div className={navigation}>
     <button className={buttons} onClick={prev}>prev</button>
     <button className={buttons} onClick={home}>home</button>
     <button className={buttons} onClick={next}>next</button>
    </div>
  );
}

export default NavigationBtns;