//Making the code being able to run, even if some content of the page haven't been loaded properly
if (document.readyState == 'loading') {

    document.addEventListener('DOMContentLoaded', main)
}
else {
    main();
}

    //  flags
    let ticketUsed = false;


function main() {
    
    updateCartTotal();
    // removeCartItem();
    changeInput();
    // changeStock();
    //  addItemToCart();
    // registerNewItem();
    useTicket();
    // showError();
    // removeById();
    // console.log(JSON.parse(sessionStorage.getItem('Data')))



}






function useTicket() {
    let ticketButton = document.querySelector('.ticket-button')
    if (ticketButton != null)
        ticketButton.addEventListener('click', verifyTicket)


}








//Comfirmation

function verifyTicket() {
    if (ticketUsed == false) {

        let ticket = document.querySelector('.ticket-input');
        let itemPriceElement = document.querySelectorAll('.cart-item-price')
        let title = document.querySelectorAll('.cart-item-title');

        if (ticket) {
            if (ticket.value === 'TrabalheNaTegra') {
                // fun2()
            //   console.log(sessionStorage.getItem('Data'))




                let martin = ["Padrões de Arquitetura de Aplicações Corporativas",
                    "Refactoring: Improving the Design of Existing Code",];
                let robert = ["Clean Architecture: A Craftsman's Guide to SoftwareStructure and Design",
                    "Clean Code: A Handbook of Agile Software Craftsmanship", "Clean Agile: Back to Basics"];

                let currentPrice = [];
                //Convertendo os preços
                for (let i = 0; i < itemPriceElement.length; i++) {

                    currentPrice.push(parseFloat(itemPriceElement[i].innerText.replace(',', '.').replace('R$', '')))
                }
                console.log(currentPrice)

                // Verificando autores e aplicando descontos
                for (let i = 0; i < itemPriceElement.length; i++) {


                    for (let j = 0; j < martin.length; j++) {
                        if (title[i].innerText === martin[j]) {
                            console.log(title[i].innerText)


                            let newPrice = currentPrice[i] - currentPrice[i] * 0.10;
                            itemPriceElement[i].innerText = 'R$' + newPrice.toFixed(2);
                            itemPriceElement[i].innerText.replace('.', ',')

                        }

                    }

                    for (let j = 0; j < robert.length; j++) {
                        if (title[i].innerText === robert[j]) {
                            let newPrice = currentPrice[i] - currentPrice[i] * 0.20;
                            itemPriceElement[i].innerText = 'R$' + newPrice.toFixed(2);
                            itemPriceElement[i].innerText.replace('.', ',')


                        }

                    }


                }


            }
        }
        updateCartTotal();
    }
    ticketUsed = true;
}
// function addButtonClicked(event) {
//     // event.preventDefault()

//     let button = event.target
//     let shopItem = button.parentElement.parentElement
//     let price = shopItem.querySelector('.shop-item-price').innerText;
//     let title = shopItem.querySelector('.shop-item-title').innerText;
//     generateRow(price, title)
//     updateCartTotal();
//     //  addClicked = true;

// }
// function generateRow(price, title){

//     let cartRow = document.createElement('div');
//     let cartItems = document.querySelector('.cart-rows');
//     cartRow.innerText="Hello World";
//     if( cartItems !==null){
//     cartItems.append(cartRow)
//     }
   



// }

// //CART

// function addItemToCart() {

//     let addButtons = document.querySelectorAll('.shop-item-button');

//     for (let i = 0; i < addButtons.length; i++) {
//         let addButton = addButtons[i];
//         addButton.addEventListener('click', addButtonClicked)

//     }

// }
function changeInput() {
    let quantityInputs = document.querySelectorAll('.cart-quantity-input');
    for (let i = 0; i < quantityInputs.length; i++) {
        quantityInputs[i].addEventListener('change', quantityChanged)
    }

}
function removeCartItem() {
    let removeButtons = document.querySelectorAll('.remove-button');

    for (let i = 0; i < removeButtons.length; i++) {
        removeButtons[i].addEventListener('click', removeCartRow)
    }
}
function removeCartRow(event) {
    event.target.parentElement.remove();
    updateCartTotal()

}

function quantityChanged(event) {
    let input = event.target;
    if (input.value < 1 || isNaN(input.value)) {
        input.value = 1;
    }
    updateCartTotal()

}

function updateCartTotal() {
    // Calculating and Showing total

    let quantityInputs = document.querySelectorAll('.cart-quantity-input');
    let prices = document.querySelectorAll('.cart-item-price');
    let total = 0;
    for (let i = 0; i < quantityInputs.length; i++) {
        let quantityInput = quantityInputs[i].value;
        let price = parseFloat(prices[i].innerText.replace('R$', '').replace(',', '.'));

        total += (quantityInput * price)
    }
    let subTotal = document.querySelector('.cart-subtotal-price');

    // veriificando se o subtotal existe na rota atual, caso verdade, faço a atribuição do total, caso não, uma mensagem aparecerá no console e a função se encerrará
    if (subTotal !== null)
        subTotal.value = 'R$' + total.toFixed(2).replace('.', ',');


}