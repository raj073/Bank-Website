document.getElementById('btn-deposit').addEventListener('click', function () {

    const depositField = document.getElementById('deposit-field');
    const newDepositAmount = depositField.value;

    if (isNaN(parseFloat(newDepositAmount)) || parseFloat(newDepositAmount) < 0) {
        alert('Please Provide a Valid Number');
    }

    //get the current deposit total amount
    //for non input(element other than input, textarea) use innertext to get the value
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotal = depositTotalElement.innerText;

    const updateDepositTotal = parseFloat(previousDepositTotal) + parseFloat(newDepositAmount);
    depositTotalElement.innerText = updateDepositTotal;
    depositField.value = '';

    // Balance Total Updated
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotal = balanceTotal.innerText;

    const updatedBalanceAfterAdded = parseFloat(newDepositAmount) + parseFloat(previousBalanceTotal);
    balanceTotal.innerText = updatedBalanceAfterAdded;

})


document.getElementById('btn-withdraw').addEventListener('click', function () {

    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmount = withdrawField.value;
    //console.log(newWithdrawAmount);

    if (isNaN(parseFloat(newWithdrawAmount)) || parseFloat(newWithdrawAmount) < 0) {
        alert('Please Provide a Valid Number');
    }

    const withDrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotal = withDrawTotalElement.innerText;
    //console.log(previousWithdrawTotal);

    // Balance Total Updated
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotal = balanceTotal.innerText;

    withdrawField.value = '';
    if (parseFloat(newWithdrawAmount) > parseFloat(previousBalanceTotal)) {
        alert('You Dont have Enough Balance to Withdraw');
        return;
    }

    const updateWithdrawTotal = parseFloat(previousWithdrawTotal) + parseFloat(newWithdrawAmount);
    //console.log(updateWithdrawTotal);
    withDrawTotalElement.innerText = updateWithdrawTotal;
    withdrawField.value = '';



    const updatedBalanceAfterWithdraw = parseFloat(previousBalanceTotal) - parseFloat(newWithdrawAmount);
    balanceTotal.innerText = updatedBalanceAfterWithdraw;

})