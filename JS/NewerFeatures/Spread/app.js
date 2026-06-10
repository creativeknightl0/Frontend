const nums = [13, 4, 5, 21, 3, 3, 1, 2, 7, 6, 4, 2, 53456];

Math.max(...nums);
Math.max(nums);

// spread with arrays
const cats = ['Blue', 'Scout', 'Rocket'];
const dogs = ['Rusty', 'Wyatt'];

const allPets = [...cats, ...dogs];

// spread with objects
const feline = {legs: 4, family: 'Felidae'};
const canine = {family: 'caninae', furry: true};

const catDog = {...feline, ...canine};

const dataFromForm = {
    email: 'blueman@gmail.com',
    password: 'tobias123!',
    username: 'tfunke'
} 

const newUser = {...dataFromForm, id:12345, isAdmin: false};