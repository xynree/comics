// eslint-disable-next-line import/no-anonymous-default-export
export default (comics) =>  comics.sort((prev, curr) => {
  let prevArr = prev.title.split('.')
  prevArr.unshift(prevArr[1])
  prevArr.splice(2,1)
  let currArr = curr.title.split('.')
  currArr.unshift(currArr[1])
  currArr.splice(2,1)

  for(let i=2; i>= 0; i--) {
    if (prevArr[i] < currArr[i]) return -1;
    if (prevArr[i] > currArr[i]) return 1;
  }})
  