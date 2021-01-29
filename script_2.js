document.getElementById('phone_increment').addEventListener('click', function () {
    const phoneInput = document.getElementById('phone_count');
    const phoneCount = parseInt(phoneInput.value);
    const phoneNewCount = phoneCount + 1;
    phoneInput.value = phoneNewCount;
    const phonePrice = phoneNewCount * 1219;
    document.getElementById('phone_price').innerText = phonePrice;
})


document.getElementById('phone_decrement').addEventListener('click', function () {
    const phoneDecrement = document.getElementById('phone_count');
    const phoneCount = parseInt(phoneDecrement.value);
    const phoneNewCount = phoneCount - 1;
    phoneDecrement.value = phoneNewCount; 
    const phonePrice = phoneNewCount * 1219;
    document.getElementById('phone_price').innerText = phonePrice;

    if (phoneCount < 1) {
        return phoneDecrement.value = 0;
    }
})