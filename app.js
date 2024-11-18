const express = require('express');
const path = require('path');


const app = express();

// Set up EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));
const quote =[
  { "author": "Albert Einstein", "quote": "Life is like riding a bicycle. To keep your balance, you must keep moving." },
  { "author": "Maya Angelou", "quote": "You will face many defeats in life, but never let yourself be defeated." },
  { "author": "Mahatma Gandhi", "quote": "Be the change that you wish to see in the world." },
  { "author": "Oscar Wilde", "quote": "Be yourself; everyone else is already taken." },
  { "author": "Dr. Seuss", "quote": "Don't cry because it's over, smile because it happened." },
  { "author": "Eleanor Roosevelt", "quote": "The future belongs to those who believe in the beauty of their dreams." },
  { "author": "Confucius", "quote": "It does not matter how slowly you go as long as you do not stop." },
  { "author": "Theodore Roosevelt", "quote": "Believe you can and you're halfway there." },
  { "author": "Babe Ruth", "quote": "Never let the fear of striking out keep you from playing the game." },
  { "author": "Steve Jobs", "quote": "The only way to do great work is to love what you do." },
  { "author": "Helen Keller", "quote": "Life is either a daring adventure or nothing at all." },
  { "author": "John Lennon", "quote": "Life is what happens when you're busy making other plans." },
  { "author": "Dalai Lama", "quote": "Happiness is not something ready-made. It comes from your own actions." },
  { "author": "Benjamin Franklin", "quote": "An investment in knowledge pays the best interest." },
  { "author": "Mark Twain", "quote": "The secret of getting ahead is getting started." },
  { "author": "Walt Disney", "quote": "The way to get started is to quit talking and begin doing." },
  { "author": "Mother Teresa", "quote": "Spread love everywhere you go. Let no one ever come to you without leaving happier." },
  { "author": "Nelson Mandela", "quote": "The greatest glory in living lies not in never falling, but in rising every time we fall." },
  { "author": "Aristotle", "quote": "It is during our darkest moments that we must focus to see the light." },
  { "author": "Winston Churchill", "quote": "Success is not final, failure is not fatal: It is the courage to continue that counts." },
  { "author": "Ralph Waldo Emerson", "quote": "What lies behind us and what lies before us are tiny matters compared to what lies within us." },
  { "author": "George Eliot", "quote": "It is never too late to be what you might have been." },
  { "author": "Bruce Lee", "quote": "Knowing is not enough; we must apply. Willing is not enough; we must do." },
  { "author": "Tony Robbins", "quote": "Setting goals is the first step in turning the invisible into the visible." },
  { "author": "Henry Ford", "quote": "Whether you think you can or you think you can't, you're right." },
  { "author": "Oprah Winfrey", "quote": "The biggest adventure you can take is to live the life of your dreams." },
  { "author": "Marie Curie", "quote": "Nothing in life is to be feared; it is only to be understood." },
  { "author": "Vince Lombardi", "quote": "Perfection is not attainable, but if we chase perfection we can catch excellence." },
  { "author": "Robert H. Schuller", "quote": "Tough times never last, but tough people do." },
  { "author": "Confucius", "quote": "Our greatest glory is not in never falling, but in rising every time we fall." },
  { "author": "C.S. Lewis", "quote": "You are never too old to set another goal or to dream a new dream." },
  { "author": "H. Jackson Brown, Jr.", "quote": "The best preparation for tomorrow is doing your best today." },
  { "author": "Lao Tzu", "quote": "The journey of a thousand miles begins with one step." },
  { "author": "Jim Rohn", "quote": "Happiness is not something you postpone for the future; it is something you design for the present." },
  { "author": "Zig Ziglar", "quote": "You don’t have to be great to start, but you have to start to be great." },
  { "author": "Plato", "quote": "The beginning is the most important part of the work." },
  { "author": "J.K. Rowling", "quote": "It is our choices, that show what we truly are, far more than our abilities." },
  { "author": "Rumi", "quote": "Do not be satisfied with the stories that come before you. Unfold your own myth." },
  { "author": "Franklin D. Roosevelt", "quote": "The only thing we have to fear is fear itself." },
  { "author": "Anne Frank", "quote": "How wonderful it is that nobody need wait a single moment before starting to improve the world." },
  { "author": "Charles Darwin", "quote": "It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change." },
  { "author": "Henry David Thoreau", "quote": "Go confidently in the direction of your dreams. Live the life you have imagined." },
  { "author": "Leonardo da Vinci", "quote": "Learning never exhausts the mind." },
  { "author": "Malcolm X", "quote": "Education is the passport to the future, for tomorrow belongs to those who prepare for it today." },
  { "author": "Unknown", "quote": "The best time to plant a tree was 20 years ago. The second best time is now." },
  { "author": "Buddha", "quote": "What we think, we become." },
  { "author": "William Shakespeare", "quote": "We know what we are, but know not what we may be." },
  { "author": "Seneca", "quote": "Luck is what happens when preparation meets opportunity." }
]

app.get("/",(req,res)=>{
  let random_quote=Math.ceil(Math.random()*(quote.length-1));
  console.log(random_quote);
  res.render("index",{
    authorname : quote[random_quote].author,
    quote : quote[random_quote].quote,
  })
})

app.post("/",(req,res)=>{
  let random_quote=Math.ceil(Math.random()*(quote.length-1));
  console.log(random_quote);
 res.send(quote[random_quote]);
})

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
