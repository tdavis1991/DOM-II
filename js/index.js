// Your code goes here
function textBlack(e) {
    e.currentTarget.style.color = 'black'
};

function textRed(e) {
    e.currentTarget.style.color = 'red'
};

window.addEventListener('load', (e) => {
    alert('Welcome to the site!')
});

//Body
const body = document.querySelector('body');
body.addEventListener('keydown', (e) => {
    alert(`You pressed ${e.key}`)
});

//Headers
const title = document.querySelector('.nav-container h1');
title.addEventListener('mouseover', textRed);
title.addEventListener('mouseout', textBlack);

const headerOne = document.querySelectorAll('.home h2');
headerOne[0].addEventListener('mouseover', textRed);
headerOne[0].addEventListener('mouseout', textBlack);

headerOne[1].addEventListener('mouseover', textRed);
headerOne[1].addEventListener('mouseout', textBlack);

headerOne[2].addEventListener('mouseover', textRed);
headerOne[2].addEventListener('mouseout', textBlack);

headerOne[3].addEventListener('mouseover', textRed);
headerOne[3].addEventListener('mouseout', textBlack);

const headerTwo = document.querySelectorAll('.home h4');
headerTwo[0].addEventListener('mouseover', textRed);
headerTwo[0].addEventListener('mouseout', textBlack);

headerTwo[1].addEventListener('mouseover', textRed);
headerTwo[1].addEventListener('mouseout', textBlack);

headerTwo[2].addEventListener('mouseover', textRed);
headerTwo[2].addEventListener('mouseout', textBlack);

//Images
const images = document.querySelectorAll('img');
images[1].addEventListener('wheel', (e) => {
    e.currentTarget.style.transform = 'scale(0.7)'
});
images[1].addEventListener('dblclick', (e) => {
    e.currentTarget.style.transform = 'scale(1)'
});


images[0].addEventListener('dblclick', (e) => {
    e.preventDefault()
    e.currentTarget.style.transform = 'scale(1.2)'
});
images[0].addEventListener('mouseout', (e) => {
    e.currentTarget.style.transform = 'scale(1)'
});

// const destination = document.querySelector('.content-destination img');
// destination.addEventListener('drag')

const destination = document.querySelector('.content-pick .destination');
destination.addEventListener('scroll', (e) => {
    alert('Choose your destination!!')
});