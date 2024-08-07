const reverseString = function(str) {

    if(str.length == 0)
    {
        return "";
    }

    let ansStr = "";

    for(i=str.length-1;i>=0;i--)
    {
        ansStr += str.charAt(i);
    }

    return ansStr;
};

// Do not edit below this line
module.exports = reverseString;