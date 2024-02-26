/*
20. 檢查是否為等差數列
輸入包含至少三個整數的陣列 / 列表，你的函式能判斷其中的整數是否形成一個等差數列。若是，回傳真，若否，回傳假。

輸入範例一：[3, 2, 1]
回傳：真

輸入範例二：[0, 0, 0, 0]
回傳：真

輸入範例一：[-17, -13, -9, -5]
回傳：真

輸入範例一：[1, 3, 6]
回傳：假
*/

/*
    @param nums:{[Integer]}
    @return :{Boolean}
*/
function checkArithmeticSequence(nums){
    let d = nums[1]-nums[0];
    let result = true;
    for(let i=nums.length-1;i>0;i--)
    {
        if(nums[i]-nums[i-1]!=d)
        {
            result = false;
        }
    }
    return result;
}
