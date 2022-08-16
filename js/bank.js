document.getElementById('btn-deposit').addEventListener('click', function () {

    const depositField = document.getElementById('deposit-field');
    const newDepositAmount = depositField.value;

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

    const withDrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotal = withDrawTotalElement.innerText;
    //console.log(previousWithdrawTotal);

    const updateWithdrawTotal = parseFloat(previousWithdrawTotal) + parseFloat(newWithdrawAmount);
    //console.log(updateWithdrawTotal);
    withDrawTotalElement.innerText = updateWithdrawTotal;
    withdrawField.value = '';

    // Balance Total Updated
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotal = balanceTotal.innerText;

    const updatedBalanceAfterWithdraw = parseFloat(previousBalanceTotal) - parseFloat(newWithdrawAmount);
    balanceTotal.innerText = updatedBalanceAfterWithdraw;
})