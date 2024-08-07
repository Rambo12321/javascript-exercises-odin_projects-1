const removeFromArray = function(arr, ...nums) {

    if(arr.length == 0)
    {
        return [];
    }
    else if(nums.length == 0)
    {
        return arr;
    }

    for(num of nums)
    {
        for(i in arr)
        {
            if(arr[i]===num)
            {
                arr.splice(i, 1);
                break;
            }
        }
    }

    return arr;

};

// Do not edit below this line
module.exports = removeFromArray;