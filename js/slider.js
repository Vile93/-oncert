const img = document.getElementById('slider-img');
const title = document.getElementById('slider-title');
const subtitle = document.getElementById('slider-subtitle');

const slider = [
    {
        imgSrc: "img/slider/la.jpg",
        title: "Los Angeles",
        subtitle: "We had the best time playing at Venice Beach!"
    },
    {
        imgSrc: "img/slider/ny.jpg",
        title: "New York",
        subtitle: "The atmosphere in New York is lorem ipsum."
    },
    {
        imgSrc: "img/slider/chicago.jpg",
        title: "Chicago",
        subtitle: "Thank you, Chicago - A night we won't forget."
    }
];
let timer;
let index = 0;

const makeTimer = () => {
    clearInterval(timer);
    timer = setInterval(nextSlide, 5000);
}

const nextSlide = () => {
    if (index == slider.length - 1) {
        index = 0;
    } else {
        index++;
    }
    activeSlide();
}
const activeSlide = () => {
    makeTimer();
    img.src = slider[index].imgSrc;
    title.innerHTML = slider[index].title;
    subtitle.innerHTML = slider[index].subtitle;
}

window.addEventListener('load', makeTimer);