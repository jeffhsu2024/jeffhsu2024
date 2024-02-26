/*
18. 將數字用固定小數位數的格式輸出
輸入一個數字，可能是整數或浮點數，你的函式必須將這個數字轉換為固定顯示 2 個小數位數的字串格式。

若輸入的數字超過 2 個小數位數，則以四捨五入處理。

輸入範例：0
回傳：0.00

輸入範例：5.4658
回傳：5.47

輸入範例：-3.123
回傳：-3.12

輸入範例：100.1
回傳：100.10
*/

/*
    @param n:{Number}
    @return :{String}
*/

function formatFloat(n){
    let temp = Number((Math.abs(n) * 100).toPrecision(15));
    let num1 = Math.round(temp) / 100 * Math.sign(n);
    let result = num1.toString();
    let index=0;
    for(let i=0;i<result.length;i++)
    {
        if(result[i]=='.')
        {
            index = result.length-1 - i;
            break;
        }
    }
    if(index==0)
    {
        result=result + ".00";
    }
    else if(index==1)
    {
        result=result + "0";
    }
    return result;
}
