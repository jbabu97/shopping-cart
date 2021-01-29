// for phone increase
document.getElementById('phone_increment').addEventListener('click', function () {
    handleProductCount('phone', true);    
});

// phone decrease is call from html attribute 'onclick'
// document.getElementById('phone_increment').addEventListener('click', function () {
//     handleProductCount('phone', false);    
// });

// function for phone
// function handlePhoneCount(isIncrease) {
//     const phoneInput = document.getElementById('phone_count');
//     const phoneCount = parseInt(phoneInput.value);
//     let phoneNewCount = phoneCount;
//     if (isIncrease == true) {
//         phoneNewCount = phoneCount + 1;
//     }
//     if (isIncrease == false && phoneCount > 0) {
//         phoneNewCount = phoneCount - 1;
//     }
//     phoneInput.value = phoneNewCount;
//     const phonePrice = phoneNewCount * 1219;
//     document.getElementById('phone_price').innerText = phonePrice;

//     calculateTotal();
// }

// for case increase
document.getElementById('case_increase').addEventListener('click', function () {
    handleProductCount('case', true);
});


// for case decrease
document.getElementById('case_decrease').addEventListener('click', function () {
    handleProductCount('case', false);
});

// function for case
// function handleCaseCount(isIncrease) {
//     const caseInput = document.getElementById('case_count');
//     const caseCount = parseInt(caseInput.value);
//     // let newCaseCount = caseCount -1;
//     let newCaseCount = caseCount;
//     if (isIncrease == true) {
//         newCaseCount = caseCount +1;
//     }
//     if (isIncrease == false && caseCount > 0) {
//         newCaseCount = caseCount -1;
//     }
//     caseInput.value = newCaseCount;
//     const casePrice = newCaseCount * 59;
//     document.getElementById('case_price').innerText = casePrice;

//     calculateTotal();
// };

function handleProductCount(product, isIncrease) {
    const productInput = document.getElementById(product + '_count');
    const productCount = parseInt(productInput.value);
    let newProductCount = productCount;
    if (isIncrease == true) {
        newProductCount = productCount +1;
    }
    if (isIncrease == false && productCount > 0) {
        newProductCount = productCount -1;
    }
    productInput.value = newProductCount;
    let productPrice = 0;
    if (product == 'phone') {
        productPrice = newProductCount * 1219;
    }
    if (product == 'case') {
        productPrice = newProductCount * 59;
    }
    document.getElementById(product + '_price').innerText = productPrice;

    calculateTotal();  // use calculateTotal function
};


function calculateTotal() {
    const phoneCount = productInput('phone')    // use productInput function
    const caseCount = productInput('case')      // use productInput function

    const totalPrice = phoneCount * 1219 + caseCount * 59;
    document.getElementById('sub_total').innerText = totalPrice;
    console.log(totalPrice);

    const taxAmount = Math.round(totalPrice * .1);
    document.getElementById('tax').innerText = taxAmount;

    const grandTotal = totalPrice + taxAmount;
    document.getElementById('grand_total').innerText = grandTotal;
};


function productInput(product) {
    const productInput = document.getElementById(product + '_count');
    const productCount = parseInt(productInput.value);
    return productCount;
};

// for checkout button
const checkOut = document.querySelector('.check_out');
checkOut.addEventListener('click',function () {
        alert('Thank You being with us.');
});


// for remove cart item
let removeBtnPhone = document.getElementById('remove_item_1');
removeBtnPhone.addEventListener('click', function () {
        removeCart('cart_item_1')
});

let removeBtnCase = document.getElementById('remove_item_2');
removeBtnCase.addEventListener('click', function () {        
        removeCart('cart_item_2')
});

function removeCart(id) {
        let removeParent = document.getElementById(id);
        removeParent.remove();
};
