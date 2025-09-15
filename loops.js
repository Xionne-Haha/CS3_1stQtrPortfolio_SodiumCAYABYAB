console.log("For the for loop")

let num = 20;
for (let i = 0; i<num; i++){
    console.log(num)
}

// this is the start: let i = 1;
// condition: i<=12;
// update: i++

console.log("  ")
console.log("  ")
console.log("  ")
console.log("For the while loop")
i=1;
while(i<=12){
    console.log(i)
    i++
}

// do-while loop is a loop when you wnat something to happen at least once

console.log("  ")
console.log("  ")
console.log("  ")
console.log("For the do-while loop")
i=1;
do{
    console.log(i);
    i++
} while(i<=3);


console.log("  ")
console.log("  ")
console.log("  ")
console.log("For the even number for loop")

for (let i = 2; i<=6; i = i +2){
    console.log(i)
}


// 3 ways to do for loop
grades = [75, 98, 99, 100]
for(let i = 0; i<grades.length; i++){
    console.log(grades[i])
}

// grades.length is the length of the array

for(var grade of grades){
    console.log("Audrey: " ,grade);
}
// the one above
// for every grade in grades it is outputted