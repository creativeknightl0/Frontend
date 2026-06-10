const nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];

function print(nums){
    console.log(nums);
}

// print(nums[0]);
// print(nums[1]);

// nums.forEach(print);

// nums.forEach(function(el) {
//     if(el % 2 === 0){
//         console.log(el);   
//     }
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
        titke: 'Napoleon',
        score: 65
    }
]

// 'Alien' - 90/100

movies.forEach(function(el) {
    console.log(`${el.title} - ${el.score}/100`)
})