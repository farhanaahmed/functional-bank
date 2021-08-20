//get input-value function
function getInputValue(inputId) {
    //get the input amount
    const inputField = document.getElementById(inputId);
    const inputAmount = parseFloat(inputField.value);
    //clear the previous input value
    inputField.value = '';
    return inputAmount;
}
//update total-value function
function getTotalValue(currentId, inputAmount) {

    const currentField = document.getElementById(currentId);
    const currentAmount = parseFloat(currentField.innerText);
    const totalAmount = currentAmount + inputAmount;
    currentField.innerText = totalAmount;
}
//update account balance function
function updateBalance(newAmount, isAdd) {
    const currentBalance = document.getElementById('current-balance');
    const currentBalanceAmount = parseFloat(currentBalance.innerText);
    if (isAdd == true) {
        currentBalance.innerText = currentBalanceAmount + newAmount;
    }
    else {
        currentBalance.innerText = currentBalanceAmount - newAmount;
    }
}
//get current balance function
function getBalance() {
    const currentBalance = document.getElementById('current-balance');
    const currentBalanceAmount = parseFloat(currentBalance.innerText);
    return currentBalanceAmount;
}
//handle deposit button event
document.getElementById('deposit-button').addEventListener('click', function () {
    //get the deposited amount
    const depositAmount = getInputValue('deposit-input');
    if (depositAmount > 0) {
        //update deposit total
        getTotalValue('current-deposit', depositAmount);
        //update account balance
        updateBalance(depositAmount, true);
    }

});
//handle withdraw button event
document.getElementById('withdraw-button').addEventListener('click', function () {
    //get the withdrawn amount 
    const withdrawAmount = getInputValue('withdraw-input');
    const accountBalance = getBalance();
    if (withdrawAmount > 0 && withdrawAmount <= accountBalance) {
        //update the withdraw total
        getTotalValue('current-withdraw', withdrawAmount);
        //update account balance
        updateBalance(withdrawAmount, false);
    }
});