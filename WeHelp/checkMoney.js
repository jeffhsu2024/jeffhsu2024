/*
2. 檢查輸入的領取金額是否合乎規範
輸入一個正整數代表想要從 ATM 機領取的金額，你的函式能檢查輸入的金額是否合乎以下規範：

輸入的金額必須是 100 的倍數。
輸入的金額必須大於等於 100。
輸入的金額必須小於等於 100000。
若輸入的金額符合規範，回傳真值，不符合規範，則回傳假值。

輸入範例：30
回傳：假

輸入範例：2000
回傳：真

輸入範例：6150
回傳：假
*/
/*
    @param n:{Integer}
    @return :{Boolean}
*/
function checkMoney(n){
  let result = calc(n);
  return result;
}
function calc(c){
  if(c%100==0&&
     c>=100&&
     c<=100000)
  {
    return true;
  }
  return false;
}
