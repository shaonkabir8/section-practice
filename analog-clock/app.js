
// grab the elements first!
const hourHand = document.querySelector('.hour__hand');
const minuteHand = document.querySelector('.minute__hand');
const secondHand = document.querySelector('.second__hand');

// execute functionalities for every 1 seconds
setInterval(() => {
    // grab current times
    let hour = new Date().getHours() * 30;
    let minute = new Date().getMinutes() * 6;
    let second = new Date().getSeconds() * 6;

    // rotate the hands according to times
    hourHand.style.transform = `rotateZ(${(hour)+(minute/12)}deg)`
    minuteHand.style.transform = `rotateZ(${minute}deg)`
    secondHand.style.transform = `rotateZ(${second}deg)`
}, 1000)


// Found idea from 'https://www.youtube.com/watch?v=weZFfrjF-k4' [Online Tutorial - Youtube Channel]