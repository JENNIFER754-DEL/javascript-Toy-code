const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
function calculateNetSalary(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;
    const paye = grossSalary * 0.3; 
    const nhif = Math.min(grossSalary * 0.015, 1700); 
    const nssf = Math.min(grossSalary * 0.06, 1080); 

    const netSalary = grossSalary - paye - nhif - nssf;
    return {
        grossSalary,
        paye,
        nhif,
        nssf,
        netSalary,
    };
}
rl.question('Enter basic salary: ', (basicSalaryAnswer) => {
    const basicSalary = parseFloat(basicSalaryAnswer);

    rl.question('Enter benefits: ', (benefitsAnswer) => {
      const benefits = parseFloat(benefitsAnswer);
      
      if (isNaN(basicSalary) || basicSalary <= 0 || isNaN(benefits) || benefits < 0) {
          console.log("Please enter valid positive numbers for salary and benefits.");
      } else {
          
          const salaryDetails = calculateNetSalary(basicSalary, benefits);
          console.log(`Gross Salary: ${salaryDetails.grossSalary.toFixed(2)}`);
          console.log(`PAYE: ${salaryDetails.paye.toFixed(2)}`);
          console.log(`NHIF: ${salaryDetails.nhif.toFixed(2)}`);
          console.log(`NSSF: ${salaryDetails.nssf.toFixed(2)}`);
          console.log(`Net Salary: ${salaryDetails.netSalary.toFixed(2)}`);
      }
      rl.close();
    });
  });
