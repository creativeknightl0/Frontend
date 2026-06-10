const form = document.querySelector('#TVSearchForm');
form.addEventListener('submit', async function(e){
    e.preventDefault();
    //console.dir(form.elements.query.value);
    const searchTerm = form.elements.query.value;
    // const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`);
    const config = {params: {q:searchTerm}};
    const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
    // console.log(res.data[0].show.image.medium);
    // display the image - single search and first show image
    // const img = document.createElement('img');
    // img.src = res.data[0].show.image.medium;
    // document.body.append(img);

    // many shows image related to one keyword search
    makeImages(res.data);
    form.elements.query.value='';
})

// now for many shows images related to one search
const makeImages = (shows) => {
    for(let result of shows){
        // console.log(result);
        if(result.show.image){
        
            const img = document.createElement('img');
        img.src = result.show.image.medium;
        document.body.append(img);
    }

    }
}

