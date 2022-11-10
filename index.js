import { menuArray } from "/data.js"
const menuContent = document.getElementById('menu-content')
const checkoutOrder = document.getElementById('checkout-details')
const paymentPage = document.getElementById('payment-form')
const payBtn = document.getElementById('pay-btn')
const message = document.getElementById('thanks-message')


let orders = []


document.addEventListener('click', function(e){
    if (e.target.dataset.name){
        
        addItem(e.target.dataset.name, e.target.dataset.price)
    }
})

payBtn.addEventListener('submit',function(){
    paymentPage.style.display ='none'
    message.style.display = 'flex'

})

function getPrice(){
    let sum = 0 
    orders.forEach(function({ price }){
        sum += price
    })
    return sum;
}


function updateCheckoutItems() {
    const sum = getPrice();
    const checkout = document.createElement('div');
    checkout.innerHTML = `
    <p>Your order</p>

    <div class="checkout-items">
        ${orders.map(order => {
            return `<p>
                <span class="order-name">${order.name} <a href="#" class="remove-button">Remove</a></span> 

                <span class="order-price">$${order.price}</span>
                
            </p>`
        }).join('')}
    </div>



    <div class="total">
        <p>Total Price:</p>
        <p>$${sum}</p>
    </div>
    
    <div class="btn">
    <button id="complete-btn">Complete Order</button>
    </div>
    `
    
    checkout.querySelectorAll('.remove-button').forEach((button, idx) => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            orders.splice(idx, 1);
            updateCheckoutItems();
        })
    })
    
    checkout.querySelector('#complete-btn').addEventListener('click', function(){
        checkoutOrder.style.display='none'
        paymentPage.style.display ='inline'
        
        
    })



    checkoutOrder.replaceChildren(checkout);

}


function addItem(name, price){
    checkoutOrder.style.display='block'
    orders.push({ price: Number(price), name:name })
    updateCheckoutItems();
}



function getMenu(){



    let menuHtml = ""
    menuArray.forEach(function(menu){
        menuHtml +=  `
        <div class="order-container">
            <div class="order-detail-left">
        
                <div class="emoji">
                    ${menu.emoji}
                </div>
        
        
                 <div class="item-details">
        
                    <div class="item-name" id='${menu.id}'>
                        ${menu.name}
                    </div>
        
                    <div class="item-ingredients">
                        ${menu.ingredients}
                    </div>
        
                    <div class="item-price">
                       $ ${menu.price}
                    </div>
        
                 </div>
            </div>
        
            <div class="order-add-btn">
            <i class="fa fa-light fa-circle-plus fa-4x" data-name ='${menu.name}' data-price ='${menu.price}'></i>
            </div>
        </div>
        `


    })
    return menuHtml

}




function render(){
    menuContent.innerHTML = getMenu()
    
}

render()