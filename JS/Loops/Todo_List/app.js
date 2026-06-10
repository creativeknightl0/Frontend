let ask=prompt("Enter any option? ");
const todos = [];

while(ask!=='quit' && ask!=='q'){
    if(ask==='list'){
        console.log("**************");
        for(let i=0;i<todos.length;i++){
            console.log(`${i} : ${todos[i]}`);
        }
        console.log("**************");
    }
    else if(ask==='new'){
        const newtodo=prompt("Enter the item to be added");
        todos.push(newtodo);
        console.log(` ${newtodo} added to the list`);
    }
    else if(ask==='delete'){
        const index=parseInt(prompt("OK, enter an index to delete:"));
        if(!Number.isNaN(index)){
            const deleted=todos.splice(index, 1);
            
            console.log(`Ok, deleted ${deleted[0]}`);
        }    
        else{
            console.log("Unknown index");

        }
    }


    ask=prompt("Enter any option? ");
}

console.log("OK, you quit!");