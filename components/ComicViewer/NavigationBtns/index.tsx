const {navigation, buttons} = {
  navigation: 'pl-4 pr-4 w-full flex justify-between font-nw-thin  transition-all',
  buttons: 'text-sm w-36 hover:[font-weight:normal] '
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