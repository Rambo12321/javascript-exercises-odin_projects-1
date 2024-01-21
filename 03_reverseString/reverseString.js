const reverseString = (a) => {

    if(a=='')
    {
        return '';
    }

    let itr=1;
    let str = '';


    while(itr<=a.length)
    {
        str+=a.charAt(a.length-itr);
        itr++;
    }

    return str;

};

// Do not edit below this line
module.exports = reverseString;
