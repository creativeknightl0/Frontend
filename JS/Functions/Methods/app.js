// const myMath = {
//     PI: 3.14159,
//     square: function(num){
//         return num*num;
//     },
//     cube: function(num){
//         return num**3;
//     }
// }

// shorthand
const myMath = {
    PI: 3.14159,
    square(num){
        return num*num;
    },
    cube(num){
        return num**3;
    }
}


const cat = {
    name: 'Blue Steel',
    color: 'Grey',

    breed: ' Scottish fold',
    meow(){
        console.log("This: ", this);
        console.log(`${this.name} of ${this.color} color says MEOW!`);
    }
}

cat.meow();

const meow2 = cat.meow;
meow2();