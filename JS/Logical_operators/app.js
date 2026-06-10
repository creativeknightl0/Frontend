// Logical AND
// const password=prompt("Enter the password: ");
// if(password.length>=6 && password.indexOf(' ')===-1){
//     console.log("Valid password");
// }
// else{
//     console.log("Incorrect! Invalid formmat for the password");
// }

// Logical OR
// 0-5 - FREE
// 5-10 - 10$
// 10-65 - 20$
// 65+ - FREE

// const age=10;
// if((age>=0 && age<5) || age>=65){
//     console.log("FREE");
// }
// else if(age>=5 && age<10){
//     console.log("$10");
// }
// else if(age>=10 && age<65){
//     console.log("$20");
// }

// else{
//     console.log("Invalid age!");
// }

// Logical NOT
// let firstName=prompt("Enter the first name: ");
// if(!firstName){
//     firstName=prompt("TRY AGAIN!!");
// }

// const age=0;
// if(!((age>=0 && age<5) || age>=65)){
//     console.log("YOU ARE NOT A BABY OR A SENIOR");
// }

// switch conditionals
const day=870;
switch(day){
    case 1:
        console.log("MON");
        break;
    case 2:
        console.log("TUES");
        break;
    case 3:
        console.log("WED");
        break;
    case 4:
        console.log("THURS");
        break;
    case 5:
        console.log("FRI");
        break;
    case 6:
    case 7:
        console.log("WEEKEND!");
        break;
    default:
        console.log("INVALID!");                         
}



// if(day===1){
//     console.log("MON");
// }
// else if(day==2){
//     console.log("TUES");
// }
// else if(day==3){
//     console.log("WED");
// }
// else if(day==4){
//     console.log("THURS");
// }
// else if(day==5){
//     console.log("FRI");
// }
// else{
//     console.log("INVALID");
// }