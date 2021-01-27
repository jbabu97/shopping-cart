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
        document.getElementById(id).innerText = total;
        console.log(total);

        const grandTotal = document.getElementById('grand_total').innerText;
        const grandTotalNum = parseFloat(grandTotal);

        const grandGrandTotal = grandTotalNum + price;
        document.getElementById('grand_total').innerText = grandGrandTotal;
}





