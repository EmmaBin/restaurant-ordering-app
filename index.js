import { menuArray } from "/data.js"
const menuContent = document.getElementById('menu-content')

// when user clicked the add button, get hold of the name and the price 
document.addEventListener('click', function(e){
    if (e.target.dataset.name){
        console.log(e.target.dataset.name)
        console.log(e.target.dataset.price)
    }
})
// when add button clicked, 


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