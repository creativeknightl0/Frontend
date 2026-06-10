const exams=[80,98,92,78,70,90,89,84,81,77];

exams.every(score => score>=75);

exams.some(score => score>=75);

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

movies.some(movie => movie.year>=2015);