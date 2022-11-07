import { menuArray } from "/data.js"
const menuContent = document.getElementById('menu-content')

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
        
                    <div class="item-name">
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
            <i class="fa fa-light fa-circle-plus fa-4x"></i>
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