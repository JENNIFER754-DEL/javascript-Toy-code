const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function generateGrade(marks) {
    if (marks > 100 || marks < 0) {
        return "Invalid marks. Enter a value between 0 and 100.";
    } else if (marks > 79) {
        return "A";
    } else if (marks >= 60) {
        return "B";
    } else if (marks >= 50) {
        return "C";
    } else if (marks >= 40) {
        return "D";
    } else {
        return "E";
    }
}
rl.question('Enter student marks (0-100): ', (answer) => {
    const marks = parseInt(answer);
    console.log(generateGrade(marks));
    rl.close();
  });
