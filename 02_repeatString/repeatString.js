const repeatString = function(str, num) 
{
    let ansStr = '';

    if (num<0){
        return "ERROR";
    }
    else if (num == 0) {
        return "";
    }
    else if (num == 1) {
        return str;
    }
    else if (str.length == 0) {
        return '';
    }

    for(i=0;i<num;i++)
    {
        ansStr += str;
    }
    return ansStr;

};

repeatString('hey',3);

// Do not edit below this line
module.exports = repeatString;