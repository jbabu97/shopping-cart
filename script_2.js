// for phone increase
document.getElementById('phone_increment').addEventListener('click', function () {
    handlePhoneCount(true);
    
})

// phone decrease is call from html attribute 'onclick'
// document.getElementById('phone_decrement').addEventListener('click', function () {
//     const phoneDecrement = document.getElementById('phone_count');
//     const phoneCount = parseInt(phoneDecrement.value);
//     const phoneNewCount = phoneCount - 1;
//     phoneDecrement.value = phoneNewCount; 
//     const phonePrice = phoneNewCount * 1219;
//     document.getElementById('phone_price').innerText = phonePrice;
// });

function handlePhoneCount(isIncrease) {
    const phoneInput = document.getElementById('phone_count');
    const phoneCount = parseInt(phoneInput.value);
    let phoneNewCount = phoneCount;
    if (isIncrease == true) {
        phoneNewCount = phoneCount + 1;
    }
    if (isIncrease == false && phoneCount > 0) {
        phoneNewCount = phoneCount - 1;
    }
    phoneInput.value = phoneNewCount;
    const phonePrice = phoneNewCount * 1219;
    document.getElementById('phone_price').innerText = phonePrice;
}

// for case increase
document.getElementById('case_increase').addEventListener('click', function () {
    handleCaseCount(true);
    // const caseInput = document.getElementById('case_count');
    // const caseCount = parseInt(caseInput.value);
    // let newCaseCount = caseCount + 1;
    // caseInput.value = newCaseCount;
    // const casePrice = newCaseCount * 59;
    // document.getElementById('case_price').innerText = casePrice;
});


// for case decrease
document.getElementById('case_decrease').addEventListener('click', function () {
    handleCaseCount(false);
    // const caseInput = document.getElementById('case_count');
    // const caseCount = parseInt(caseInput.value);
    // let newCaseCount = caseCount -1;
    // caseInput.value = newCaseCount;
    // const casePrice = newCaseCount * 59;
    // document.getElementById('case_price').innerText = casePrice;
});

function handleCaseCount(isIncrease) {
    const caseInput = document.getElementById('case_count');
    const caseCount = parseInt(caseInput.value);
    // let newCaseCount = caseCount -1;
    let newCaseCount = caseCount;
    if (isIncrease == true) {
        newCaseCount = caseCount +1;
    }
    if (isIncrease == false && caseCount > 0) {
        newCaseCount = caseCount -1;
    }

    caseInput.value = newCaseCount;
    const casePrice = newCaseCount * 59;
    document.getElementById('case_price').innerText = casePrice;

}
