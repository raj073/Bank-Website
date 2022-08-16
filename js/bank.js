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
})