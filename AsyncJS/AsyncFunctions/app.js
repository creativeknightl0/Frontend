// async
// async function hello() {

// } 

// const sing = async() => {
//     //throw new Error("Uh oh!")
//     throw "OH NO, PROBLEM!"
//     return 'LA LA LA'
// }

// sing()
// .then((data) => {
//     console.log("PROMISE RESOLVED WITH: ", data)
// })
// .catch((err) => {
//     console.log("OH NO, PROMISE REJECTED!")
//     console.log(err)
// })

// const login = async(username, password) => {
//     if(!username || !password) throw 'MISSING CREDENTIALS'
    
//     if(password === 'corgifeetarecute') return 'WELCOME'
//     throw 'INVALID PASSWORD'
// }

// login('admin', 'corgifee')
// .then((msg) => {
//     console.log("LOGGED IN")
//     console.log(msg)
// })
// .catch((err) => {
//     console.log("ERROR!")
//     console.log(err)
// })

// await
// const delayedColorChange = (color, delay) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             document.body.style.backgroundColor = color;
//             resolve();
//         }, delay);
//     })
// }

// delayedColorChange('red', 1000)
//     .then(() => delayedColorChange('orange', 1000))
//     .then(() => delayedColorChange('yellow', 1000))
//     .then(() => delayedColorChange('green', 1000))
//     .then(() => delayedColorChange('blue', 1000))
//     .then(() => delayedColorChange('indigo', 1000))
//     .then(() => delayedColorChange('violet', 1000))

// async function rainbow() {
//     await delayedColorChange('red', 1000)
//     await delayedColorChange('orange', 1000)
//     await delayedColorChange('yellow', 1000)
//     await delayedColorChange('green', 1000)
//     await delayedColorChange('blue', 1000)
//     await delayedColorChange('indigo', 1000)
//     await delayedColorChange('violet', 1000)
//     return 'ALL DONE!'
// }

// //rainbow().then(() => console.log("END OF RAINBOW!"))

// async function printRainbow() {
//     await rainbow();
//     console.log("END OF RAINBOW!")
// }

// printRainbow();

// const fakeRequest = (url) => {
//     return new Promise((resolve, reject) => {
//         const delay = Math.floor(Math.random() * (4500)) + 500;
//         setTimeout(() => {
//             if(delay > 4000){
//                 reject('Connection Timeout :(')
//             } else{
//                 resolve(`Here is your fake data from ${url}`)
//             }
//         }, delay);
//     })
// }

// async function makeTwoRequests(){
//     try{
//         let data1 = await fakeRequest('/page1');
//         console.log(data1);
//         let data2 = await fakeRequest('/page2');
//         console.log(data2);
//     }
//     catch(e){
//         console.log("CAUGHT AN ERROR!")
//         console.log("error is", e)
//     }
// }

// const displayImages = (imgUrl) => {
//     return new Promise((resolve, reject) => {
//         const delay = Math.floor(Math.random() * 4500) + 500; 
//         setTimeout(() => {
//             if(delay < 4000) {
//                 let imgElem = document.createElement('img');
//                 imgElem.src = imgUrl;
//                 imgElem.style = 'width: 800px; height: 900px';
//                 document.body.appendChild(imgElem);
//                 document.body.style = 'display: flex; flex-direction: column; gap: 2rem; align-items: center';
//                 resolve('Good luck, she says hi!');
//             }
//             else {
//                 reject('ah oh she says no :(');
//             }
//         }, delay);
//     })
// }

// const loveOrNot = async() => {
    
//         await displayImages('https://static.independent.co.uk/2024/11/25/11/Effy.jpg'); 
       
//         await displayImages('https://www.nme.com/wp-content/uploads/2024/10/Hannah-Murray-Game-Of-Thrones.jpg'); 
        
//         await displayImages('https://www.shutterstock.com/editorial/image-editorial/MeTeQ54fO1T0Ma18ODY0NQ==/lily-loveless-440nw-1478018f.jpg'); 
        
//         await displayImages('https://i.ytimg.com/vi/rHqWrXUGtMs/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDHoJptkA5bhQtY6s7uM1ZjMatraA');
        
//         await displayImages('https://media.outnow.ch/Movies/Bilder/2007/HallamFoe/movie.fs/08.jpg');
        
    
// }

// loveOrNot();

// fullfilled promise without value
// const playUkele = async() => {

// }

// fullfilled promise with a value
// const playUkele = async() => {
//     return 'play it 🎶'
// }

// rejected promise
// const playUkele = async() => {
//     throw new Error("Can't play");
// }

const enterTheMusicRoom = async(secretname, roomcode) => {
    // 1. Covers conditions like no secretname but roomcode is there, no roomcode but secret name is there, neither secretname nor roomcode there
    if(!secretname || !roomcode) throw new Error('secretname or roomcode or both not given');

    // 2. Correct combo
    if(secretname === 'skins' && roomcode === 'LoveKatie5') return 'You are allowed';

    // 3. If combo is given, but incorrect
    else throw new Error('Combo is incorrect');
}

const asyncMusicWithoutReturnedData = async() => {
    await enterTheMusicRoom('skins', 'LoveKatie5');
    await enterTheMusicRoom('yolo', 'Pandora');
    await enterTheMusicRoom('skins', 'Love5');
}

const asyncMusicWithReturnedData = async() => {
    let music3 = await enterTheMusicRoom('skins', 'LoveKatie5');
    console.log(music3);
    let music1 = await enterTheMusicRoom('yolo', 'Pandora');
    console.log(music1);
    let music2 = await enterTheMusicRoom('skins', 'Love5');
    console.log(music2);
}

// asyncMusicWithoutReturnedData();
// asyncMusicWithReturnedData();

// with .then async function call
// enterTheMusicRoom('skins', 'LoveKatie5')
//     .then((data) => {
//         console.log(data);
//         return enterTheMusicRoom('skins', 'Love5');
//     })
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log(err);
//     })

// asyncMusicWithReturnedData()
//     .then(() => {
//         console.log('All requests done');
//     })

const printAllDone = async() => {
    try {
        await asyncMusicWithReturnedData();
        console.log('All requests done');
    }
    catch(e) {
        console.log('All requests not done, there are errors in between');
    }
}

printAllDone();