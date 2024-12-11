const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
function checkSpeed(speed) {
    const speedLimit = 70;
    const demeritPointsPer5Km = 5; 
    if (speed <= speedLimit) {
        console.log("You are driving within the speed limit.");
    } else {
        const overSpeed = speed - speedLimit;
        const fine = overSpeed * demeritPointsPer5Km;
        console.log(`You are ${overSpeed} km/h over the speed limit. Your fine is $${fine}.`);
    }
}
rl.question('Enter car speed: ', (answer) => {
  const speed = parseInt(answer); 
  
  if (isNaN(speed) || speed <= 0) {
    console.log("Please enter a valid positive number for speed.");
  } else {
     checkSpeed(speed);
  }
  rl.close();
});