// const nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];

// const movies = [
//     {
//         title: 'Alien',
//         score: 90
//     },

//     {
//         title: 'Prometheus',

//         score: 85
//     },

//     {
//         title: 'Napoleon',
//         score: 65
//     }
// ]

// const add = function(x,y){

//     return x+y;
// }


// Arrow functions
const add = (x,y) => {
    return x+y;
}

const square = num => {
    return num*num;
}

const rollDie = () => {
    return Math.floor(Math.random()*6)+1
}

// implicit returns
const rollDie1 = () => (
    Math.floor(Math.random()*6)+1
)

// one-liner implicit returns
const add1 = (x,y) => x+y;

// with arrow functions
const movies = [
    {
        title: 'Alien',
        score: 90
    },

    {
        title: 'Prometheus',

        score: 85
    },

    {
        title: 'Napoleon',
        score: 65
    }
]

// const newMovies = movies.map(function(movie) {
//     return `${movie.title} - ${movie.score/10}`
// })

const newMovies = movies.map(movie => (
    `${movie.title} - ${movie.score/10}`
))