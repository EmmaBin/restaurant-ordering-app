import { menuArray } from "/data.js"
const menuContent = document.getElementById('menu-content')
const checkoutOrder = document.getElementById('checkout-details')


document.addEventListener('click', function(e){
    if (e.target.dataset.name){
        
        getOrderDetails(e.target.dataset.name, e.target.dataset.price)

    }
})



function getOrderDetails(name, price){
    checkoutOrder.style.display='block'

    let checkout = `
    <p>Your order</p>

    <div class="checkout-items">
        <p>${name}</p>
        <p>$${price}</p>
    </div>

    <div class="total">
        <p>Total Price:</p>
        <p>${price}</p>
    </div>
    
    <div class="btn">
    <button id="order-btn">Complete Order</button>
    </div>


    `
    return checkoutOrder.innerHTML = checkout
    
    



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