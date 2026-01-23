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
    {quote:`"Life is like riding a bicycle. To keep your balance, you must keep moving."`,
     person: `Albert Einstein`
    },
    {quote:`"Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma, which is living with the results of other people’s thinking. Don’t let the noise of others’ opinions drown out your own inner voice. And most important, have the courage to follow your heart and intuition."`,
     person: `Steve Jobs`
    },
    {quote:`"In three words I can sum up everything I’ve learned about life: It goes on."`,
     person: `Robert Frost`
    },
    {quote:`"Live a good and honorable life. Then, when you are older, you can look back and enjoy it a second time."`,
     person: `Dalai Lama`
    },
    {quote:`"The fear of death follows from the fear of life. A man who lives fully is prepared to die at any time."`,
     person: `Mark Twain`
    },
    {quote:`"Small daily improvements over time lead to stunning results."`,
     person: `Robin Sharma`
    },
    {quote:`"We must accept finite disappointment, but never lose infinite hope."`,
     person: ` Martin Luther King, Jr.`
    },
]

btn.addEventListener('click', function(){
    let random = Math.floor(Math.random()* quotes.length + 1);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;

})
