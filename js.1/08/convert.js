const convertYenToDollar = (yen)=>{
  let dollar_rate = 110;
  // 戻り値を指定
  return Math.floor(yen / dollar_rate); // Math.floor は切り捨てを行う関数
};