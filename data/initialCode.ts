export const initialCode = `const colors = require('colors'); 

function typeWriter(message, delay) {
  let i = 0;
  const intervalId = setInterval(() => {
    process.stdout.write(message[i]);
    i++;
    if (i === message.length) {
      clearInterval(intervalId);
      console.log("\n"); // Add a newline after typing
    }
  }, delay);
}

const momMessage = "Hello".red + " Mom!".green;
typeWriter(momMessage, 50);
`;
