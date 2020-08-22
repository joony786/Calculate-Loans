/*
Date : 21-Aug-2020
project name : Loan Calculator.

*/

document.querySelector('#loan-form').addEventListener('submit',calculateResults);
// calculate results
function calculateResults(e){
    console.log('sucess');
// grab all Variables from our UI
const amount =  document.querySelector('#amount');
const interest =  document.querySelector('#interest');
const years = document.querySelector('#years');
const monthlyPayment = document.querySelector('#monthly-payment');
const totalPayment = document.getElementById('total-payment');
const totalInterest = document.getElementById('total-interest');
// calculate monthly payments
const principle = parseFloat(amount.value);
const claculateIntrestRaate = parseFloat(interest.value)/100/12;
const calculatePayments = parseFloat(years.value);


const y = Math.pow(1+claculateIntrestRaate,calculatePayments);
const monthly = (principle*y*claculateIntrestRaate)/(y-1);
if(isFinite(monthly)){
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly*calculatePayments).toFixed(2);
    totalInterest.value = ((monthly*calculatePayments)-principle).toFixed(2);
}else{
 console.log('you Entered a wrong Value')
}

 // prevent switching to another page when we sumbit
 e.preventDefault();

}