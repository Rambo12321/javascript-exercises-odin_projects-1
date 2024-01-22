function removeFromArray(a,...args) {
    let arr = Array.from(args);

    for(let i=0;i<args.length;i++)
    {
        let itr = a.indexOf(arr[i]);
        
        if(itr===-1)
        {
            continue;
        }

        if (arr[i]===a[itr])
            {
                a.splice(itr,1);
            }
    }

    console.log(a);

    return a;
    
};

// Do not edit below this line
module.exports = removeFromArray;
