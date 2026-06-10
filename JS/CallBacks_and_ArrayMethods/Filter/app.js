const nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];

// nums.filter( (n) => {
//     return n===4;
// })

nums.filter( n => {
    return n<10;
})

const movies = [
    {
        title: 'Alien',
        score: 90,
        year: 1999
    },

    {
        title: 'Prometheus',

        score: 85,
        year: 2004
    },

    {
        title: 'Napoleon',
        score: 65,
        year: 2023
    }
]

const goodMovies = movies.filter(m => m.score>80)
const goodTitles = goodMovies.map(m => m.title)
movies.filter(m => m.score>80).map(m => m.title)
const badMovies = movies.filter(m => m.score<70)
const recentMovies = movies.filter(m => m.year>2000)