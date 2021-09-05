const quotes = [
    {
        quote: "Age is no guarantee of maturity.",
        author: " -Lawana Blackwell",
    },
    {
        quote: "I'm youth, I'm joy, I'm a little bird that has broken out of the egg.",
        author: " -James M. Barrie",
    },
    {
        quote: "If I'd had some set idea of a finish line, don't you think I would have crossed it years ago?",
        author: "Bill Gates",
    },
    {
        quote: "I remain just one thing, and one thing only, and that is a clown. It places me on a far higher plane than any politician.",
        author: "Charlie Chaplin",
    },
    {
        quote: "Pride sullies the noblest character.",
        author: "Claudianus",
    },
    {
        quote: "There is no great genius without some touch of madness.",
        author: "Seneca"
    },
 
];
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const choseQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = choseQuote.quote;
author.innerText = choseQuote.author;