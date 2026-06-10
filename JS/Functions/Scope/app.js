// let totalEggs=0;
// function collectEggs(){
//     totalEggs=6;
// }

// console.log(totalEggs);
// collectEggs();
// console.log(totalEggs);

// let bird='Scarlet Macaw';
// function birdWatch(){
//     let bird='Great Blue Heron';
//     console.log(bird);
// }
// birdWatch();

// let radius = 8;
// if(radius>0){
//     const PI=3.14159;
//     let msg="HIII";
// }

// console.log(radius);
// //console.log(PI);
// console.log(msg);

// for(let i=0;i<5;i++){
//     let msg="nbjfbjabsf";
//     console.log(msg);
// }

// console.log(msg);
// console.log(i);

function bankRobbery(){
    const heroes = ["Batman", "Wonder Women", "Captain America"];
    function cryForHelp(){
        function inner(){
            for(let hero of heroes){
                console.log(`Please help me, ${hero.toUpperCase()}`);
            }
        }
        inner();
    }
    cryForHelp();
}

bankRobbery();
