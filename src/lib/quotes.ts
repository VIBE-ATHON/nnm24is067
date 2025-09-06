export interface Quote {
  text: string;
  author: string;
  category: 'learning' | 'success' | 'mentorship' | 'innovation' | 'growth';
}

export const inspirationalQuotes: Quote[] = [
  {
    text: "The beautiful thing about learning is that no one can take it away from you.",
    author: "B.B. King",
    category: "learning"
  },
  {
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill",
    category: "success"
  },
  {
    text: "A mentor is someone who allows you to see the hope inside yourself.",
    author: "Oprah Winfrey",
    category: "mentorship"
  },
  {
    text: "Innovation distinguishes between a leader and a follower.",
    author: "Steve Jobs",
    category: "innovation"
  },
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
    category: "success"
  },
  {
    text: "Tell me and I forget, teach me and I may remember, involve me and I learn.",
    author: "Benjamin Franklin",
    category: "learning"
  },
  {
    text: "The best time to plant a tree was 20 years ago. The second best time is now.",
    author: "Chinese Proverb",
    category: "growth"
  },
  {
    text: "Your limitation—it's only your imagination.",
    author: "Unknown",
    category: "growth"
  },
  {
    text: "Code is like humor. When you have to explain it, it's bad.",
    author: "Cory House",
    category: "innovation"
  },
  {
    text: "The expert in anything was once a beginner.",
    author: "Helen Hayes",
    category: "learning"
  },
  {
    text: "Mentoring is a brain to pick, an ear to listen, and a push in the right direction.",
    author: "John C. Crosby",
    category: "mentorship"
  },
  {
    text: "Technology is best when it brings people together.",
    author: "Matt Mullenweg",
    category: "innovation"
  },
  {
    text: "The future belongs to those who learn more skills and combine them in creative ways.",
    author: "Robert Greene",
    category: "growth"
  },
  {
    text: "Don't be afraid to give up the good to go for the great.",
    author: "John D. Rockefeller",
    category: "success"
  },
  {
    text: "Learning never exhausts the mind.",
    author: "Leonardo da Vinci",
    category: "learning"
  }
];

export const getRandomQuote = (category?: Quote['category']): Quote => {
  const filteredQuotes = category 
    ? inspirationalQuotes.filter(quote => quote.category === category)
    : inspirationalQuotes;
  
  return filteredQuotes[Math.floor(Math.random() * filteredQuotes.length)];
};

export const getQuoteOfTheDay = (): Quote => {
  const today = new Date();
  const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000);
  return inspirationalQuotes[dayOfYear % inspirationalQuotes.length];
};