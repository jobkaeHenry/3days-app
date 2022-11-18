
// 의미없는 테스트용 함수입니다

function isOdd(elem) {
  return Boolean(elem%2)
}

export const randomNumber=(min,max)=>{
  let randVal =Math.floor(Math.random()*(max-min+1)) + min;
  return randVal
}
export function copyUrlOfWebSite() {
  // eslint-disable-next-line no-restricted-globals
  navigator.clipboard.writeText(location.href).then(() => {
    alert("링크가 복사되었습니다 붙여넣기를 통해 공유해보세요")
  });

  
}

export default isOdd