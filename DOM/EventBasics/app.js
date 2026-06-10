const btn=document.querySelector('#v2');

btn.onclick=function(){
    console.log("You clicked me!");
    console.log("I hope it worked!!");
}

function scream(){
    console.log('AAHHH');
    console.log('Stop touching me!');
}

btn.onmouseenter=scream;

document.querySelector('h1').onclick = () => {
    alert('you clicked me. hi!');
}

const btn3=document.querySelector('#v3');
btn3.addEventListener('click', function(){       // dblclick, mouseup
    alert('Clicked!');

})

function twist(){

    console.log('Twist');
}

function shout(){
    console.log('Shout');
}

const tasButton=document.querySelector('#tas');

// tasButton.onclick=twist;
// tasButton.onclick=shout;

tasButton.addEventListener('click', twist, {once:true});
tasButton.addEventListener('click', shout);

