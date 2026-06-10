// THIS IS A STRING OF JSON
const data = `{"ticker":{"base":"BTC", "target":"UTC", "price":"112003"}}`;

// convert JSON into Javascript objects
const parsedData = JSON.parse(data);

console.log(parsedData.ticker);

console.log(parsedData.ticker.base);

console.log(parsedData.ticker.price);

// convert Javascript to JSON string
const dog = {breed:'lab', color: 'black', isAlive: true, owner: undefined};

const stringifyData = JSON.stringify(dog);

console.log(stringifyData);

// JSON data 
const dataPerson = `{ "name": "James Cook", "favouritePet": "Dolphin"}`; 
console.log(dataPerson);

const person = JSON.parse(dataPerson);
console.log(person);

const jsonMore = JSON.stringify(person);
console.log(jsonMore);