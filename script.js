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
    {quote:`"I’ll leave tomorrow’s problems to tomorrow’s me."`,
     person: `Saitama`},
    {quote:`"The only thing we have to fear is fear itself."`,
     person: `Franklin D. Roosevelt`
    },
    {quote:`"The biggest adventure you can take is to live the life of your dreams."`,
     person: `Oprah Winfrey`
    },
    {quote:`"Some people want it to happen, some wish it would happen, others make it happen."`,
     person: `Micheal Jordan`
    },
    {quote:`"A dropout will beat a genius through hard work."`,
     person: `Rock lee`
    },
    {quote:`"Knowing what it feels to be in pain, is exactly why we try to be kind to others."`,
     person: `Jiraya`
    },
    {quote:`"If you really want to be strong… Stop caring about what your surrounding thinks of you!"`,
     person: `Saitama`},
    {quote:`"Power comes in response to a need, not a desire. You have to create that need."`,
     person: `Son Goku`
    },
]

btn.addEventListener('click', function(){
    let random = Math.floor(Math.random()* quotes.length + 1);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;

})

