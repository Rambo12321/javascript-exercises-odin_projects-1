const sumAll = function(a,b)   //sums the given numbers
{
    if(typeof a != 'number' || typeof b != 'number' || a<0 || b<0)
    {
        return "ERROR";
    }

    let small;
    let big;

    sum=0;

    if(a>b)
    {
        small = b;
        big = a;
    }
    else
    {
        small = a;
        big = b;
    }

    sum = calcSum(small,big);

    function calcSum(small, big)
    {
        add = 0;
        for (let i = small; i <= big; i++) {
            add += i;
        }
        return add;
    }

    return sum;
}

// Do not edit below this line
module.exports = sumAll;
