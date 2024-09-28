//variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');


const quotes = [{
    quote:`"The greatest glory in living lies not in never falling, but in rising every time we fall."`,
    person:`Nelson Mandela`
}, {
    quote:`If you want to shine like a sun, first burn like a sun.`,
   person:`A.P.J.Abdul Kalam`
}, {
    quote:`"You must be the change you wish to see in the world."`,
    person:`Mahatma Gandhi`
}, {
    quote:`"Spread love everywhere you go. Let no one ever come to you without leaving happier."`,
    person:`Mother Teresa`
}, {
    quote:`"Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that."`,
    person:`Martin Luther King Jr`
}, {
    quote:`"Many of life's failures are people who did not realize how close they were to success when they gave up."`,
    person:`Thomas A. Edison`
}, {
    quote: `"Only a life lived for others is a life worthwhile."`,
    person:`Albert Einstein
`}, {
    quote:`"With great power comes great responsibility"`,
    person:`Voltaire`
}, {
    quote:`"Life is either a daring adventure or nothing."`,
    person:`Helen Keller`
},];

btn.addEventListener("click",function(){

    let random = Math.floor(Math.random()*quotes.length);
    
    quote.innerText = quotes[random].quote;
    person.innerText= quotes[random].person;

})