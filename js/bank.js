document.getElementById('btn-deposit').addEventListener('click', function () {

    const depositField = document.getElementById('deposit-field');
    const newDepositAmount = depositField.value;

    //get the current deposit total amount
    //for non input(element other than input, textarea) use innertext to get the value
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotal = depositTotalElement.innerText;
    //depositTotalElement.innerText = depositAmount;

    const updateDepositTotal = parseFloat(previousDepositTotal) + parseFloat(newDepositAmount);
    depositTotalElement.innerText = updateDepositTotal;
    depositField.value = '';

    // Balance Total Updated

    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotal = balanceTotal.innerText;

    const updatedBalanceAfterAdded = parseFloat(newDepositAmount) + parseFloat(previousBalanceTotal);
    balanceTotal.innerText = updatedBalanceAfterAdded;

})