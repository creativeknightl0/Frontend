// const allImages=document.getElementsByTagName('img');

// for(let img of allImages){
//     //console.log(img.src);
//     img.src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg';
// }

// const squareImages = document.getElementsByClassName('square');

// for(let img of squareImages){
//     img.src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg';
// }

const links = document.querySelectorAll('p a');

for(let link of links){
    console.log(link.href);
}

const allImages = document.getElementsByTagName('img');
allImages[2].src = 'https://static.vecteezy.com/system/resources/thumbnails/025/220/125/small/picture-a-captivating-scene-of-a-tranquil-lake-at-sunset-ai-generative-photo.jpg';