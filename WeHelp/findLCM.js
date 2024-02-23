/*
6. 找到最小公倍數
輸入兩個正整數，你的函式能找到並回傳這兩個正整數的最小公倍數。

輸入範例一：6 和 4
回傳：12

輸入範例二：5 和 16
回傳：80

輸入範例一：12 和 6
回傳：12
*/

/*
    @param n1:{Integer}
    @param n2:{Integer}
    @return :{Boolean}
*/

function findLCM(n1, n2){
    return (n1*n2)/findGCD(n1,n2);
}
function findGCD(n1,n2){
    let temp;
    while(n2!=0)
    {
        temp=n2;
        n2=n1%n2;
        n1=temp;
    }
    return n1;
    
