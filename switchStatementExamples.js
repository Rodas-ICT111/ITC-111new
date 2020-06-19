//Switch Statement - give multiple outcomes based on the value of the condition

/*
    Syntax
        switch (condition){
            case 'result1' :
                code to run;
                break;
            case 'result2':
                code to run;
                break;
            case 'result3'
            code to run;
                break;
            default:
                default code to run;
                break;
        }

*/


var seasons = ['spring','summer','fall','winter'];

var seasons = 'spring';
var result = '';



switch(seasons){
    case 'summer':
        result = 'It\'s summer!';
        break;
    case 'winter':
        result = 'It\'s winter!';
        break;
    case 'spring':
        result = 'It\'s spring!';
        break;
    case 'fall':
        result = 'It\'s fall!';
        break;
    default:
        result = 'There are only 4 seasons'
}

console.log(result)