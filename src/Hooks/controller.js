
// 의미없는 테스트용 함수입니다

function isOdd(elem) {
  return Boolean(elem%2)
}

export const randomNumber=(min,max)=>{
  let randVal =Math.floor(Math.random()*(max-min+1)) + min;
  return randVal
}

export default isOdd