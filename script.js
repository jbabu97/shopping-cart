// for phone
const phonePlusBtn = document.getElementById('plus_btn_1');

phonePlusBtn.addEventListener('click', function () {
        let incrementCount = document.getElementById('phone_count').value;
        let incrementNumber = parseFloat(incrementCount);
        let increment = document.getElementById('phone_count').value = incrementNumber + 1;

        let phonePrice = 1219;
        let totalPhonePrice = increment * phonePrice;
        document.getElementById('phone_price').innerText = totalPhonePrice;
        console.log(totalPhonePrice);

        totalUpdate('sub_total', phonePrice);
        
});

const phoneMinusBtn = document.getElementById('minus_btn_1');
phoneMinusBtn.addEventListener('click', function () {
        let decrementCount = document.getElementById('phone_count').value;
        let decrementNumber = parseFloat(decrementCount);
        let decrement = document.getElementById('phone_count').value = decrementNumber - 1;

        let phonePrice = 1219;
        if (decrementNumber < 1) {
                return document.getElementById('phone_count').value = '0';
        }
        else {  
                
                let totalPhonePrice = decrement * phonePrice;
                document.getElementById('phone_price').innerText = totalPhonePrice;
                console.log(totalPhonePrice);
        }  

        totalUpdate('sub_total', (-1 * phonePrice));
});


// for case

const casePlusBtn = document.getElementById('plus_btn_2');

casePlusBtn.addEventListener('click', function () {
        let incrementCount = document.getElementById('case_count').value;
        let incrementNumber = parseFloat(incrementCount);
        let increment = document.getElementById('case_count').value = incrementNumber + 1;
        
        let casePrice = 59;
        let totalCasePrice = increment * casePrice;
        document.getElementById('case_price').innerText = totalCasePrice;
        // let finalCasePrice = document.getElementById('case_price').innerText;
        // let finalCasePriceNumber = parseInt(finalCasePrice);
        console.log(totalCasePrice);

        totalUpdate('sub_total', casePrice);

});

const caseMinusBtn = document.getElementById('minus_btn_2');
caseMinusBtn.addEventListener('click', function () {
        const decrementCount = document.getElementById('case_count').value;
        const decrementNumber = parseInt(decrementCount);
        const decrement = document.getElementById('case_count').value = decrementNumber - 1;
        
        let casePrice = 59;
        if (decrementNumber < 1) {
                return document.getElementById('case_count').value = '0';
        }
        else {  
                let totalCasePrice = decrement * casePrice;
                document.getElementById('case_price').innerText = totalCasePrice;
        }   

        totalUpdate('sub_total', (-1 * casePrice));
});

function totalUpdate(id, price) {
        const subTotal = document.getElementById(id).innerText;
        const subTotalNum = parseFloat(subTotal);
        console.log(subTotal);
        const total = subTotalNum + price;
        finalSubTotal = document.getElementById(id).innerText = total;
        console.log(total);

        let tax = document.getElementById('tax').innerText;
        let taxNumber = parseFloat(tax);
        let taxOfSubTotal = parseFloat((finalSubTotal * .05).toFixed(2));
        let finalSubTotalOfTax = document.getElementById('tax').innerText = taxOfSubTotal;
        console.log(taxOfSubTotal);

        const grandTotal = document.getElementById('grand_total').innerText;
        const grandTotalNum = parseFloat(grandTotal);

        const grandGrandTotal = parseFloat((grandTotalNum + price + finalSubTotalOfTax).toFixed(2));
        document.getElementById('grand_total').innerText = grandGrandTotal;

};

const checkOut = document.querySelector('.check_out');
checkOut.addEventListener('click',function () {
        alert('Thank You being with us.');

        // if (condition) {
                
        // } else {
                
        // }
        return (document.getElementById('phone_count').value = '0',
        document.getElementById('case_count').value = '0',
        document.getElementById('phone_price').innerText = '00.00',
        document.getElementById('case_price').innerText = '00.00',
        document.getElementById('sub_total').innerText = '00.00',
        document.getElementById('tax').innerText = '00.00',
        document.getElementById('grand_total').innerText = '00.00'
        )
})





