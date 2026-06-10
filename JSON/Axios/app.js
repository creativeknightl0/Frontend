// axios.get('https://swapi.dev/api/people/1/')
//     .then(res => {
//         console.log('RESPONSE!', res);
//     })
//     .catch(e => {
//         console.log('ERROR! ', e);
//     })

// const getStarWarsPerson = async(id) => {
//     try{
//         const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
//         console.log(res.data);
//     }
//     catch(e) {
//         console.log('ERROR!', e);
//     }
// };

// getStarWarsPerson(5);
// getStarWarsPerson(2);


// setting headers with axios
// const getDadJoke = async() => { try{
//     const config = {headers: {Accept: 'application/json'}};

//     const res = await axios.get('https://icanhazdadjoke.com/', config);

//     // console.log(res.data.joke);
//     return res.data.joke;
// }

// catch(e){
//     return 'NO JOKES AVAILABLE';
// }
// }

// getDadJoke();

// joke site
// const btn = document.querySelector('#btn');
// const list = document.querySelector('#jokes');

// btn.addEventListener('click', async() => {
//     const getJokes = await getDadJoke();
//     const li = document.createElement('li');
//     li.innerText = getJokes;
//     list.append(li);
// })

// axios.get('https://swapi.dev/api/')
//     .then((data) => {
//         console.log(data.data);
//     })
//     .catch((e) => {
//         console.log(e);
//     })

// axios.get('https://swapi.dev/api/films/')
//     .then((data) => {
//         console.log(data.data.results);
//     })
//     .catch((e) => {
//         console.log(e);
//     })

// axios.get('https://swapi.dev/api/films/1')
//     .then((data) => {
//         console.log(data.data);
//         return axios.get('https://swapi.dev/api/films/2');
//     })
//     .then((data) => {
//         console.log(data.data);
//         return axios.get('https://swapi.dev/api/films/3');
//     })
//     .then((data) => {
//         console.log(data.data);
//         return axios.get('https://swapi.dev/api/films/4');
//     })
//     .then((data) => {
//         console.log(data.data);
//         return axios.get('https://swapi.dev/api/films/5');
//     })
//     .then((data) => {
//         console.log(data.data);
//     })
//     .catch((e) => {
//         console.log(e);
//     })

const loadStarWarsFilms = async() => {
    try {
        const film1 = await axios.get('https://swapi.dev/api/films/1');
        console.log(`${film1.data.title} - ${film1.data.release_date.slice(0,4)} by ${film1.data.director}`);

        const film2 = await axios.get('https://swapi.dev/api/films/2');
        console.log(`${film2.data.title} - ${film2.data.release_date.slice(0,4)} by ${film2.data.director}`);

        const film3 = await axios.get('https://swapi.dev/api/films/3');
        console.log(`${film3.data.title} - ${film3.data.release_date.slice(0,4)} by ${film3.data.director}`);

        const film4 = await axios.get('https://swapi.dev/api/films/4');
        console.log(`${film4.data.title} - ${film4.data.release_date.slice(0,4)} by ${film4.data.director}`);

        const film5 = await axios.get('https://swapi.dev/api/films/5');
        console.log(`${film5.data.title} - ${film5.data.release_date.slice(0,4)} by ${film5.data.director}`);
    }
    catch(e) {
        console.log('Error: ', e);
    }
}

loadStarWarsFilms();