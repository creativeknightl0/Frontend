function sum(){
    // let total=0;
    // for(let i=0;i<arguments.length;i++){
    //     total+=arguments[i];
    // }
    // return total;

    return arguments.reduce((total, el) => total+el);  // not allowed
}

// rest params
function sum1(...nums){
    return nums.reduce((total, el) => total+el);
}

function raceResults(gold, silver, ...everyOneElse){
    console.log(`GOLD medal goes to: ${gold}`);
    console.log(`SILVER medal goes to ${silver}`);
    console.log(`Everyone else gets: ${everyOneElse}`);
}