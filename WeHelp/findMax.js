/*
3. 找到最大的整數
輸入包含至少一個整數的陣列 / 列表，找到並回傳其中最大的整數。

輸入範例一：[1, 3, 3, 2, 5, -2]
回傳：5

輸入範例二：[-5, -10, -8, -1, -2]
回傳：-1

輸入範例一：[0, 2, 2]
回傳：2
*/
/*
    @param nums:{[Integer]}
    @return :{Integer}
*/
function findMax(nums){
  let tempN = nums[0];
  for(let i=0;i<nums.length;i++)
  {
    if(tempN<nums[i])
    {
      tempN = nums[i];
    }
  }
  return tempN;
}
