/*
7. 將整數陣列 / 列表，轉換為逗號隔開的字串
輸入一個整數陣列，你的函式能將其轉換為逗號隔開的單一字串。

輸入範例一：[3, 5, -4, 2]
回傳：3,5,-4,2

輸入範例二：[]
回傳：空字串

輸入範例一：[1000]
回傳：1000
*/

/*
    @param nums:{[Integer]}
    @return :{String}
*/

function toCSVString(nums){
    let count = nums.length;
    let s = "";
    if(count==0)
    {
        return "";
        
    }
    else if(count==1)
    {
        return nums[0].toString();
    }
    for(let i=0;i<nums.length-1;i++)
    {
        s=s+nums[i]+",";
    }
    s=s+nums[nums.length-1];
    return s;
}
