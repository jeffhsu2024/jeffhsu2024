/*
4. 找到第二大的整數
輸入包含至少兩個不同整數的陣列 / 列表，找到並回傳其中第二大的整數。

輸入範例一：[1, 3, 3, 2, 5, -2]
回傳：3

輸入範例二：[-5, -10, -8, 1, -1]
回傳：-1

輸入範例一：[0, 2]
回傳：0
*/
function findSecond(nums){
    if(nums.length<=2)
    {
        return nums[0];
    }
    nums = sort(nums);
    for(let i=nums.length-1;i>0;i--)
    {
        if(nums[i]>nums[i-1])
        {
            return nums[i-1];
            
        }
    }
    
    
}
function sort(nums){
    let temp;
    for(i=nums.length-1;i>0;i--)
    {
        for(j=0;j<=i-1;j++)
        {
            if(nums[j]>nums[j+1])
            {
                temp=nums[j+1];
                nums[j+1]=nums[j];
                nums[j]=temp;
            }
        }
    }
    return nums;
}
