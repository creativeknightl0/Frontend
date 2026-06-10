const websites = [
    {
        name: 'Reddit',
        searchLinkFormat: 'https://www.reddit.com/r/',
        logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIkhKQjKGGr0nFc_W6eNAaVcgnnA7kfQRsqg&s'
    }, 
    {
        name: 'Google',
        searchLinkFormat: 'https://www.google.com/search?q=',
        logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJg75LWB1zIJt1VTZO7O68yKciaDSkk3KMdw&s'
    }, 
    {   
        name: 'Youtube',
        searchLinkFormat: 'https://www.youtube.com/results?search_query=',
        logo: 'https://static.vecteezy.com/system/resources/thumbnails/042/127/234/small/white-square-bordered-youtube-logo-on-transparent-background-free-png.png'
    }, 
    {
        name: 'Instagram',
        searchLinkFormat: 'https://www.instagram.com/',
        logo: 'https://img.freepik.com/premium-psd/instagram-logo_971166-164497.jpg?semt=ais_incoming&w=740&q=80'
    }, 
    { 
        name: 'X/Twitter',
        searchLinkFormat: 'https://www.x.com/search?q=',
        logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1oK3Pg_1pL_n_n1nHYYFZ8D-Jb5tfsPe_FQ&s'
    },
    {
        name: 'Yandex',
        searchLinkFormat: 'https://www.yandex.com/search?text=',
        logo: 'https://i.pinimg.com/474x/64/cf/8b/64cf8bb59b5339f8c309dfc0368bf4ea.jpg'
    }
];

let inpQuery = document.querySelector('#searchInp');
const searchBtn = document.querySelector('#searchBtn');
let uoList = document.querySelector('#list');
let uoList2 = document.querySelector('#list2');

function searchResults() {
    for(let i = 0; i < websites.length; i++) {
        let inpVal = inpQuery.value;
        console.log(inpVal);
        let createUoListNew = document.createElement('ul');
        let createPara = document.createElement('p');
        let createLogo = document.createElement('img');
        let createDiv = document.createElement('div');
        createPara.textContent = websites[i].name;
        createLogo.src = websites[i].logo;
        createLogo.style = 'width: 20px; height: 20px';
        console.log(createLogo);
        createDiv.appendChild(createLogo);
        createDiv.appendChild(createPara);
        createDiv.style = 'display: flex; align-items: center; gap: 8px; justify-content: flex-start';
        console.log(createDiv);
        uoList2.appendChild(createDiv);
        let createLi = document.createElement('li');
        let searchLink = document.createElement('a');
        searchLink.setAttribute('href', `${websites[i].searchLinkFormat}${inpVal}`);
        console.log(searchLink);
        // searchLink.textContent = inpVal;
        let hrefOfSearchLink = searchLink.href;
        // createLi.textContent = hrefOfSearchLink;
        searchLink.textContent = hrefOfSearchLink;
        createLi.appendChild(searchLink);
        console.log(createLi);
        createUoListNew.appendChild(createLi);
        uoList2.appendChild(createUoListNew);
    }
}

function searchHistory() {
    for(let i = 0; i < websites.length; i++) {
        let inpVal = inpQuery.value;
        console.log(inpVal);
        let createUoListNew = document.createElement('ul');
        let createPara = document.createElement('p');
        let createLogo = document.createElement('img');
        let createDiv = document.createElement('div');
        createPara.textContent = websites[i].name;
        createLogo.src = websites[i].logo;
        createLogo.style = 'width: 20px; height: 20px';
        console.log(createLogo);
        createDiv.appendChild(createLogo);
        createDiv.appendChild(createPara);
        createDiv.style = 'display: flex; align-items: center; gap: 8px; justify-content: flex-start';
        console.log(createDiv);
        uoList.appendChild(createDiv);
        let createLi = document.createElement('li');
        let searchLink = document.createElement('a');
        searchLink.setAttribute('href', `${websites[i].searchLinkFormat}${inpVal}`);
        console.log(searchLink);
        // searchLink.textContent = inpVal;
        let hrefOfSearchLink = searchLink.href;
        // createLi.textContent = hrefOfSearchLink;
        searchLink.textContent = hrefOfSearchLink;
        createLi.appendChild(searchLink);
        console.log(createLi);
        createUoListNew.appendChild(createLi);
        uoList.appendChild(createUoListNew);
    }
    inpQuery.value = '';
}

searchBtn.addEventListener('click', searchResults);
searchBtn.addEventListener('click', searchHistory);