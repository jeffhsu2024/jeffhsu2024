/*
23. 總秒數轉換為日、時、分、秒
輸入一個非負整數代表一段時間的總秒數，請將這個總秒數轉換為：日、時、分、秒，四個欄位，按照順序用陣列 / 列表的格式輸出。

輸入範例：0
回傳：[0, 0, 0, 0]

輸入範例：65
回傳：[0, 0, 1, 5]

輸入範例：7500
回傳：[0, 2, 5, 0]

輸入範例：100000
回傳：[1, 3, 46, 40]
*/

/*
    @param sec:{Integer}
    @return :{[Integer]}
*/

function convertSeconds(sec){
    let day=0,hour=0,min=0;
    if(sec/86400>=1)
    {
        day = sec/86400;
        day = parseInt(day);
        sec = sec - day * 86400;
    }
    if(sec/3600>=1)
    {
        hour = sec/3600;
        hour = parseInt(hour);
        sec = sec - hour * 3600;
    }
    if(sec/60>=1)
    {
        min = sec/60;
        min = parseInt(min);
        sec = sec - min * 60;
    }
    return [day,hour,min,sec];
}
