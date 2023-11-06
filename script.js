document.addEventListener('DOMContentLoaded', function(){
    let addTocartbuttons = document.querySelectorAll('.add');
    let cartItems = document.querySelector('.cart-items');


    addTocartbuttons.forEach(button =>{
        button.addEventListener('click', function(){
            let product = this.parentElement;
            let productName = product.querySelector('h4').textContent;
             let productPrice = product.querySelector('p').textContent;

             let cartItem = document.createElement('li');
             cartItem.textContent = `${productName} - ${productPrice}`;
             cartItem.setAttribute('data-product-id', this.parentElement.querySelector('.remove-button').getAttribute('data-product-id'));



             cartItems.appendChild(cartItem);
            

          


           



        });
        const removeButtons = document.querySelectorAll(".remove-button");

        removeButtons.forEach(function(button) {
            button.addEventListener("click", function() {
                
                const productId = this.getAttribute("data-product-id");

                
                const cartItems = document.querySelectorAll('.cart-items li');
                cartItems.forEach(function(cartItem) {
                    if (cartItem.getAttribute("data-product-id") === productId) {
                        cartItem.remove();
                    }
                });
            });
        });
    });
});







    
    


 








