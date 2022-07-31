const button = document.querySelector(`.btn`);
const par = document.querySelector(`.par`);

const quotes = [
    '“You`ve got to get up every morning with determination if you`re going to go to bed with satisfaction.” —George Lorimer',
    '“Go as far as you can see; when you get there, you`ll be able to see further.” —Thomas Carlyle',
    '“Your talent determines what you can do. Your motivation determines how much you`re willing to do. Your attitude determines how well you do it.” —Lou Holtz',
    '“The individual who says it is not possible should move out of the way of those doing it.” —Tricia Cunningham',
    '“When someone tells me `no,` it doesn`t mean I can`t do it, it simply means I can`t do it with them.” —Karen E. Quinones Miller',
    '“Build your own dreams or someone else will hire you to build theirs.” —Farrah Gray',
    '“A year from now you may wish you had started today.” —Karen Lamb',
    '“Light tomorrow with today.” —Elizabeth Barrett Browning',
    '“Never give up on a dream just because of the time it will take to accomplish it. The time will pass anyway.” —Earl Nightingale',
    '“Someday is not a day of the week.” —Janet Dailey',
    '“Make each day your masterpiece.” —John Wooden',
    '“Don`t count the days, make the days count.” —Muhammad Ali',
    '“Believe you can and you`re halfway there.” —Theodore Roosevelt',
    '“The only way to do great work is to love what you do. If you haven`t found it yet, keep looking. Don`t settle.” —Steve Jobs',
    '“Even if you`re on the right track, you`ll get run over if you just sit there.” —Will Rogers',
    '“Nothing can stop the man with the right mental attitude from achieving his goal. Nothing on earth can help the man with the wrong attitude.” —Thomas Jefferson',
    '“The more I want to get something done the less I call it work.” —Richard Bach',
    '“Success is the sum of small efforts repeated day in and day out.” —Robert Collier',
];

button.addEventListener(`click`, function(){
    let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    par.style.display = `block`
    par.textContent = randomQuote;
})