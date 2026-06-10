//document.body.style.backgroundColor = 'red';
//document.body.style.backgroundColor = 'orange';

// setTimeout(() => {
//     document.body.style.backgroundColor = 'red';
//     setTimeout(() => {
//         document.body.style.backgroundColor = 'orange';
//         setTimeout(() => {
//             document.body.style.backgroundColor = 'yellow';
//             setTimeout(() => {
//                 document.body.style.backgroundColor = 'green';
//                 setTimeout(() => {
//                     document.body.style.backgroundColor = 'blue';
//                 }, 1000)
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000)

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
    
//                 })
//             })
//         })
//     })
// });

function fakeSongAPI (url, success, failure) {
    const delay = Math.floor(Math.random() * 4500) + 500;

    setTimeout(() => {
        if(delay > 4000) {
            failure('Connection Timeout :(');
        }
        else {
            success(`Successfully song fetched from ${url}`);
        }
    }, delay);
}

fakeSongAPI('https://spotify.com/song/1', 
    function success(response) {
        console.log('It worked! (1st request)');
        console.log(response);

        fakeSongAPI('https://spotify.com/song/2', 
            function success(response) {
                console.log('It worked! (2nd request)');
                console.log(response);

                fakeSongAPI('https://spotify.com/song/3', 
                    function success(response) {
                        console.log('It worked! (3rd request)')
                        console.log(response);
                    },

                    function error(err) {
                        console.log('Error (3rd request)', err);
                    }
                )
            },
            function error(err) {
                console.log('Error (2nd request)', err);
            } 
        )
    },
    function error(err) {
        console.log('Error (1st request)', err);
    }
)