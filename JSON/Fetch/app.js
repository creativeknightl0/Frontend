// fetch("https://swapi.dev/api/people/1/") // returns promise 
//     .then((res) => {
//         console.log("RESOLVED", res);
//         return res.json()
//     })
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((e) => {
//         console.log("ERROR!", e);
//     });


// fetch('https://swapi.dev/api/people/1/')
//     .then(res => {
//         console.log('1st request resolved');
//         return res.json();
//     })
//     .then(data => {
//         console.log(data);
//         return fetch('https://swapi.dev/api/people/2/');
    
//     })
//     .then(res => {
//         console.log('SECOND REQUEST resolved');

//         return res.json();

//     })
//     .then(data => {
//         console.log(data);
//     })
//     .catch(e => {
//         console.log('ERROR!', e);
//     })

// with async
// const loadStarWarsPeople = async() => {
//     try{
//         const res = await fetch('https://swapi.dev/api/people/1/');
//         const data = await res.json();
//         console.log(data);
//         const res2 = await fetch('https://swapi.dev/api/people/2/');
//         const data2 = await res2.json();
//         console.log(data2);
//     } 
//     catch(e){
//         console.log('ERROR', e);
//     }
// }

// loadStarWarsPeople();

// fetch('https://swapi.dev/api/')
//     .then((data) => {
//         const jsonData = data.json();
//         console.log(data);
//         console.log(jsonData);
//     })
//     .catch((e) => {
//         console.log(e);
//     })

// fetch('https://swapi.dev/api/films/1')
//     .then((data) => {
//         const jsonData = data.json();
//         console.log(data);
//         console.log(jsonData);
//         return fetch('https://swapi.dev/api/films/2');
//     })
//     .then((data) => {
//         const jsonData = data.json();
//         console.log(data);
//         console.log(jsonData);
//         return fetch('https://swapi.dev/api/films/3');
//     })
//     .then((data) => {
//         const jsonData = data.json();
//         console.log(data);
//         console.log(jsonData);
//         return fetch('https://swapi.dev/api/films/4');
//     })
//     .then((data) => {
//         const jsonData = data.json();
//         console.log(data);
//         console.log(jsonData);
//         return fetch('https://swapi.dev/api/films/5');
//     })
//     .then((data) => {
//         const jsonData = data.json();
//         console.log(data);
//         console.log(jsonData);
//     })
//     .catch((e) => {
//         console.log(e);
//     })

const loadStarWarsMovies = async() => {
    try {
        const movie1 = await fetch('https://swapi.dev/api/films/1');
        console.log(movie1.json());
        
        const movie2 = await fetch('https://swapi.dev/api/films/2');
        console.log(movie2.json());
        
        const movie3 = await fetch('https://swapi.dev/api/films/3');
        console.log(movie3.json());
        
        const movie4 = await fetch('https://swapi.dev/api/films/4');
        console.log(movie4.json());
        
        const movie5 = await fetch('https://swapi.dev/api/films/5');
        console.log(movie5.json());
    }

    catch(e) {
        console.log('Error: ', e);
    }
}

loadStarWarsMovies();