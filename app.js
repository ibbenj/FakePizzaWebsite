document.getElementById("arrow__buttons").addEventListener("click", function(){
    const block1Img= document.querySelector('.block1');
    block1Img.classList.toggle('active');
});

document.getElementById("navbar__order").addEventListener("click", function(){
    const orderPage= document.querySelector('.order');
    orderPage.classList.toggle('active');
})

document.getElementById("cancelOrder").addEventListener("click", function(){
    const orderPage= document.querySelector('.order');
    orderPage.classList.toggle('active');
    document.getElementById('order__form').reset();
})

document.getElementById("confirmOrder").addEventListener("click", function(){
    const orderPage= document.querySelector('.order');
    orderPage.classList.toggle('active');
    document.getElementById('order__form').reset();    /*Clears form text*/
    alert("Thank you for submitting your order!")
})