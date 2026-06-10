console.log("Hello...");
setTimeout( () => {
    console.log("are you there??");
}, 3000)
console.log("exit");

const id = setInterval(() => {
    console.log(Math.random());
}, 2000)

// clearInterval(id);