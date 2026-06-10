// const fakeRequestCallback = (url, success, failure) => {
//     const delay = Math.floor(Math.random() * 4500) + 500;
//     setTimeout(() => {
//         if(delay > 4000){
//             failure('Connection Timeout :(')
//         } else{
//             success(`Here is your fake data from ${url}`);
//         }
//     }, delay)
// }

// const fakeRequestPromise = (url) => {
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
// Callback hell
// fakeRequestCallback('books.com/page1', function(response){

//     console.log("IT WORKED!!!");
//     console.log(response);
//     fakeRequestCallback('books.com/page2', 
//         function(response){
//             console.log("IT WORKED AGAIN!!!");
//             console.log(response);
//             fakeRequestCallback('books.com/page3', 
//                 function(response){
//                     console.log("IT WORKED AGAIN (3rd req)");
//                     console.log(response);
//                 }, 
//                 function(err){
//                     console.log("ERROR (3rd req)", err);
//                 })
//         }, 
//         function(err){
//             console.log("ERROR!!! (2nd reuest)", err);
//         })
//     }, function(err) {
//     console.log("ERROR!!!", err);
// })

// Promises
// const request = fakeRequestPromise('yelp.com/api/coffee');
// request
//     .then(() => {
//         console.log("PROMISE RESOLVED!")
//         console.log("IT WORKED!!!");
//     })
//     .catch(() => {
//         console.log("PROMISE REJECTED!")
//         console.log("OH NO! THERE IS ERROR!!!");
//     })

// fakeRequestPromise('yelp.com/api/coffee/page1')
//     .then(() => {
//         console.log("IT WORKED!!!");
//         fakeRequestPromise('yelp.com/api/coffee/page2')
//             .then(() => {
//                 console.log("IT WORKED!!! (page 2)");
//                 fakeRequestPromise('yelp.com/api/coffee/page3')
//                     .then(() => {
//                         console.log("IT WORKED!!! (page 3)");
//                     })
//                     .catch(() => {
//                         console.log("OH NO! THERE IS ERROR!!! (page 3)")
//                     })
//             })
//             .catch(() => {
//                 console.log("OH NO! THERE IS ERROR!!! (page 2)")
//             })
//         })
//     .catch(() => {
//         console.log("OH NO! THERE IS ERROR!!! (page 1)");
//     })

// above nested code is converted to this simple code
// fakeRequestPromise('yelp.com/api/coffee/page1')
//     .then ((data) => {
//         console.log("IT WORKED!!! (page 1)")
//         console.log(data)
//         return fakeRequestPromise('yelp.com/api/coffee/page2')
//     })    
//     .then((data) => {
//         console.log("IT WORKED!!! (page 2)")
//         console.log(data)
//         return fakeRequestPromise('yelp.com/api/coffee/page3')
//     })
//     .then((data) => {
//         console.log("IT WORKED!!! (page 3)")
//         console.log(data)
//     })
//     .catch((err) => {
//         console.log("OH NO, A REQUEST FAILED!!!", err)
//     })

function fakeSongAPIPromise (url) {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 4500) + 500;

        setTimeout(() => {
            if(delay > 4000) {
                reject('Connection timeout :(');
            }
            else {
                resolve(`Successfully fetched the song from ${url}`);
            }
        }, delay);
    })
}

// fakeSongAPIPromise('https://spotify/song/1')
//     .then((data) => {
//         console.log('Fetched (1)');
//         console.log(data);

//         fakeSongAPIPromise('https://spotify/song/2')
//             .then((data) => {
//                 console.log('Fetched (2)');
//                 console.log(data);
            
//                 fakeSongAPIPromise('https://spotify/song/3')
//                     .then((data) => {
//                         console.log('Fetched (3)');
//                         console.log(data);
//                     })
//                     .catch((err) => {
//                         console.log('Failed 3', err);
//                     })
//             })
//             .catch((err) => {
//                 console.log('Failed 2', err);
//             })
//     }) 
//     .catch((err) => {
//         console.log('Failed 1', err);
//     }) 

fakeSongAPIPromise('https://spotify/song/1')
    .then((data) => {
        console.log('Fetched (1)');
        console.log(data);
        return fakeSongAPIPromise('https://spotify/song/2');
    })
    .then((data) => {
        console.log('Fetched(2)');
        console.log(data);
        return fakeSongAPIPromise('https://spotify/song/3');
    })
    .then((data) => {
        console.log('Fetched (3)');
        console.log(data);
    })
    .catch((err) => {
        console.log('Failed request', err);
    })