const repeatString = (a,b) => {

    if(b<0)
    {
        return 'ERROR';
    }
    else if(b===1)
    {
        return a;
    }
    else if(b===0)
    {
        return '';
    }
    else
    {
        let str ='';
        let i=0;

        while(i<b)
        {
            str+=a;
            i++;
        }

        return str;
    }

};

// Do not edit below this line
module.exports = repeatString;