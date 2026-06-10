function singSong(){
    console.log("DO");
    console.log("RE");
    console.log("ME");
}

function greet(firstName){
    console.log(`Hey there, ${firstName}!`);
}

function greet2(firstName, lastName){
    console.log(`Hey there, ${firstName} ${lastName[0]}!`);
}

function repeat(str,numTimes){ let result='';
    for(let i=0;i<numTimes;i++){
        result+=str;
    } console.log(result);
}

function add(x,y){

    if(typeof x!=='number' || typeof y!=='number'){
        return false;
    }

    return x+y;
}

singSong();
singSong();
greet();
greet2('Jacques', 'Kallis');
repeat('Hi', 5);
const sum=add(5,2);
sum;
