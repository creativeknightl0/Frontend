const prices = [9.99, 1.50, 19.99, 49.99, 30.50];

// let total = 0;
// for(let price of prices){
//     total+=price;
// }

// console.log(total);

// const total = prices.reduce((total,price) => {
//     return total+price;
// })

const total = prices.reduce((total, price)  => total * price);

const minPrice = prices.reduce((min, price) => {
    if(price < min){
        return price;
    }
    return min;
})

const maxPrice = prices.reduce((max, price) => {
    if(price > max){
        return price;
    }
    return max;
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
    },

    {
        title: 'Interstellar',
        score: 99,
        year: 2014
    }
]

const higestRated = movies.reduce((bestMovie, currMovie) => {
    if(bestMovie.score>currMovie.score){
        return bestMovie;
    }
    else{
        return currMovie;
    }
})

const evens = [2,4,6,8];
evens.reduce((sum,num) => sum+num, 100);
