


// grab the elements first!
const hour = document.getElementById('hour__hand');
const minute = document.getElementById('minute__hand');
const second = document.getElementById('second__hand');


const degree = 6;
// execute functionalities for every 1 seconds
setInterval(() => {
    // declear initial degree to ratate hands

    let hourHand = new Date().getHours() * 30;
    let minuteHand = new Date().getMinutes() * degree;
    let secondHand = new Date().getSeconds() * degree;

    // rotate the hands according to times
    hour.style.transform = `rotateZ(${(hourHand)+(minuteHand/12)}degree)`
    minute.style.transform = `rotateZ(${minuteHand}degree)`
    second.style.transform = `rotateZ(${secondHand} degree)`

    console.log('eeee')

}, 1000)

