rli = require('readline').createInterface({ input: process.stdin }).on('line', get_line)
function get_line(line){
    line == 'END' ? rli.close() : solve(line)
}


    // put your code below vvvvv

let age;
function get_line(age){
   
     if ( age == 13){
        console.log("You can watch movies with ratings: G and PG (with a parent).");
        
    }
    else if(13 <= age < 16){
        console.log("You can watch movies with ratings: G, PG, and R-13.");
        
    }
    else if(16 <= age < 18){
        console.log("You can watch movies with ratings: G, PG, R-13, and R-16.");
        
    }
    else if(age >= 18){
        console.log("You can watch movies with ratings: G, PG, R-13, R-16, R-18 .");
        
    }
    else{
        console.log("You can watch movies with ratings: G.");
        
    }
}

 

    // put your code about ^^^^^