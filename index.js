 let Cards = (["Charlie", "Samip", "Ali"], "birthday"); 

 function writeCards(names, event) {
    const thankYouMessages = [];
    for (let i = 0; i < names.length; i++) {
      thankYouMessages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return thankYouMessages;
  }
  
  const cards = writeCards(["Charlie", "Samip", "Ali"], "birthday");
  console.log(cards);
  
  function countDown(number) {
    for (let i = number; i >= 0; i--) {
      console.log(i);
    }
  }

  countDown(10); // This will log the numbers from 10 to 0 in the console.

