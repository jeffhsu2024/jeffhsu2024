/*
22. 平方根，四捨五入取整數
輸入一個正整數，你的函式可以計算這個正整數的平方根，但請四捨五入到整數的部份。

輸入範例二：9
回傳：3

輸入範例一：12
回傳：3

輸入範例一：15
回傳：4
*/

/*
    @param n:{Integer}
    @return :{Integer}
*/

function sqrt(n){
    let result ;
    let left;
    let right;
    for(let i=1;i<n;i++)
    {
        if(i*i<=n)
        {
            result = i;
        }
    }
    left = result*result;
    right =(result+1)*(result+1);
    let leftD = Math.abs(n - left);
    let rightD = Math.abs(n - right);
    if(leftD<rightD)
    {
        return result;
    }
    else
    {
        return result+1;
    }
}
