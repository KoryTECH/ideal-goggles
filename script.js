let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote')
let person = document.querySelector('.person')

const quotes = [
    {quote: `"If you don't like your destiny, don't accept it. Instead, 
        have the courage to change it the way you want it to be"`,
     person: `Naruto Uzumaki` 
    },
    {quote: `"Mistakes are not shackles that halt one from stepping forward.
         Rather, they are that which sustain and grow one’s heart."`,
     person: `Mavis Vermillion` 
    },
    {quote: `"You are never too old to set another goal or to dream a new dream."`,
     person: `Mahala Yousafzai` 
    },
    {quote: `"Nothing is impossible. The word itself says 'I'm possible!"`,
        person: `Audrey Hepburn` 
    },
    {quote: `"Happiness often sneaks in through a door you didn't know you left open."`,
        person: `John Barrymore` 
    },
    {quote: `"The Future is Something Worth Risking Everything For"`,
     person: `Adekola Oluwakorede` 
    },
]

btn.addEventListener('click', function(){
    let random = Math.floor(Math.random()* quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})