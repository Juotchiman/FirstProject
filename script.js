import { CountUp } from './countUp.min.js' 

new Typed('#typed',{
    strings:['Hello world', 'This is JS Library'],
    typespeed:10000,
    loop: true,
});

window.onload = function() {
    var countUp = new CountUp('counter', 2000)
    countUp.start();
}

AOS.init()