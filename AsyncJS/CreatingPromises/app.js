// const fakeRequest = (url) => {
//     return new Promise((resolve, reject) => {
//         const rand = Math.random();
//         setTimeout(() => {
//             if(rand<0.7){
//                 resolve('Here is your fake data');
//             }
//             reject('Request error!')
//         }, 1000);
//     })
// }

// fakeRequest('/dogs/1')
//     .then((data) => {
//         console.log("DONE WITH REQUEST!!!")
//         console.log("data is:", data);
//     })
//     .catch((err) => {
//         console.log("Oh,no!", err);
//     })


// const delayedColorChange = (newColor, delay, doNext) => {
//     setTimeout(() => {
//         document.body.style.backgroundColor = newColor;
//         doNext && doNext();
//         doNext();
//     }, delay)

// }


// delayedColorChange('red', 1000, () => {
//     delayedColorChange('orange', 1000, () => {
//         delayedColorChange('yellow', 1000, () => {
//             delayedColorChange('green', 1000, () => {
//                 delayedColorChange('blue', 1000, () => {
//                     delayedColorChange('indigo', 1000, () => {
//                         delayedColorChange('violet', 1000, () => {

//                         })
//                     })
//                 })
//             })
//         })
//     })
// });

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


const displayImages = (imgUrl) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 4500) + 500; 
        setTimeout(() => {
            if(delay < 4000) {
                let imgElem = document.createElement('img');
                imgElem.src = imgUrl;
                document.body.appendChild(imgElem);
                resolve('Good luck, she says hi!');
            }
            else {
                reject('oh oh she says no :(');
            }
        }, delay);
    })
}

displayImages('https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fntvb.tmsimg.com%2Fassets%2Fassets%2F533946_v9_bc.jpg&sp=1775774715T25246cf62b60b99369aa24f11098d5a23bd660c8618f1ea6dd3c47f97c9d5878')
    .then((data) => {
        console.log(data);
        return displayImages('https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fi0.wp.com%2Flezwatchtv.com%2Fwp-content%2Fuploads%2F2017%2F12%2FHannah-Murray-1.jpg%3Ffit%3D1075%252C1600%26ssl%3D1&sp=1775774765Tb157129f4c02299dc7bff1271fe14f25b765296648e073a701d58df709265b5f');
    })
    .then((data) => {
        console.log(data);
        return displayImages('https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fimg4.hotnessrater.com%2F667155%2Flily-loveless.jpg%3Fw%3D4000%26h%3D6000&sp=1775775180T942dc1d077604f1c1a8a05802ea85d05eb144929e84d1c1950a1e9ed7b9f0b1e');
    })
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    })