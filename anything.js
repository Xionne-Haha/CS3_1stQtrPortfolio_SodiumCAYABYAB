

// we are importing somebody's library of funtions


// start of import
const rl = require ('readline') // this line is the library that has the function "const rl = require ('readline')". 
// Alternate version: "const rl = require ('readline').createInterface({input: process.stdin,})"

const rli =rl.createInterface({input: process.stdin,}) /*allows you to type stuff */

rli.on('line', give_channel_name) // "rli.on('line'" ---> when it sees a line it will call this ", give_channel_name)"
// // "rli.on('line'" waits for a line and does the function once there's a line
// end of import

// Alternate version of the whole import: "const rl = require ('readline').createInterface({input: process.stdin,}).on('line', give_channel_name)"


function give_channel_name (num){
    switch(num){
        case '7':
            console.log("gma");
            break;
            case '2':
                console.log("abs-cbn");
                break;
                // doing ("abs", "cbn") outputs "abs -cbn". The comma makes a space
                case '13':
                    console.log("ibc");
                    break;
                    case '4':
                        console.log("ptv");
                        break;
                        case '5':
                            console.log("tv5");
                            break;

                            default:
                                console.log("unknown channel");
                                
    }
}