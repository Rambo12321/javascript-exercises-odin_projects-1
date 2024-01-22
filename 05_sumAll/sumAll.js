const sumAll = function(a,b)   //sums the given numbers
{
    if(a<0 || b<0 || check(a) || check(b))
    {
        return 'ERROR';
    }

    let sum=0;

    if(a<b)
    {
        for(let i=a;i<=b;i++)
        {
            sum+=i;
        }
        return sum;
    }

    else
    {
        for(let i=a;i>=b;i--)
        {
            sum+=i;
        }
        return sum;
    }
    
};

function check(a)   //check if Integer value is provided or not
{
    if(Number.isInteger(a))
    {
        return false;
    }
    return true;
}

// Do not edit below this line
module.exports = sumAll;
