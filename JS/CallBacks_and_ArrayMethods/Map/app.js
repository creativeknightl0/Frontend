// const nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];

// const doubles = nums.map(function(num) {
//     return num*2;
// })

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

const titles = movies.map(function(movie) {

    return movie.title.toUpperCase();
}) 