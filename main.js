var menuItems = document.getElementById("menuItems");
menuItems.style.maxHeight = "0px";

function menutoggle() {
    if (menuItems.style.maxHeight == "0px") {
        menuItems.style.maxHeight = "200px"
    } else {
        menuItems.style.maxHeight = "0px"
    }
}



var loginForm = document.getElementById("LoginForm");
var regForm = document.getElementById("RegistrationForm");
var Indicator = document.getElementById("Indicator");

function register() {
    regForm.style.transform = "translateX(0px)";
    loginForm.style.transform = "translateX(0px)";
    Indicator.style.transform = "translateX(100px)";
}

function login() {
    regForm.style.transform = "translateX(300px)";
    loginForm.style.transform = "translateX(300px)";
    Indicator.style.transform = "translateX(0px)";
}

let carts = document.querySelectorAll(".add-cart");
let products = [{
        name: "Red Printed t-shirt",
        tag: "product-0",
        price: 50,
        inCart: 0
    },
    {
        name: "Black Sneakers",
        tag: "BlackSneakers",
        price: 30,
        inCart: 0
    },
    {
        name: "Grey joggers",
        tag: "Greyjoggers",
        price: 25,
        inCart: 0
    },
    {
        name: "Pink off-shoulder",
        tag: "product-0.1",
        price: 20,
        inCart: 0
    }
]
for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i]);
    })
}
// console.log(cartNumbers(product))
// carts.forEach(function(carts) {
//     carts.addEventListener('click', () => {
//             cartNumbers(product )
//     })
// });
function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers')

    if (productNumbers) {
        document.querySelector("a span").textContent = productNumbers;
    }
}

function cartNumbers(product) {
    let productNumbers = localStorage.getItem('cartNumbers')

    productNumbers = parseInt(productNumbers)
    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector("a span").textContent = productNumbers + 1
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector("a span").textContent = 1;
    }
    setItems(product);
}

function setItems(product) {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems)
    //    console.log("my cartitems are", cartItems)
    if (cartItems != null) {

        if (cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    } else {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product

        }
    }
    localStorage.setItem("productsInCart", JSON.stringify(cartItems))
}

function totalCost(product) {
    // console.log("the product price is",product.price)

    let cartCost = localStorage.getItem('totalCost')
    console.log("My cartCost is", cartCost)


    console.log(typeof cartCost)
    if (cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    } else {
        localStorage.setItem("totalCost", product.price)
    }


}

function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);

    if (cartItems) {
        for (let item in cartItems) {
            attachCartItems(cartItems[item]);
            console.log(cartItems[item])
        }
    }
}

function attachCartItems(item) {
    let cartHead = document.querySelector(".cart-head");

    var tr = document.createElement("tr");

    tr.innerHTML = `
    <td class="cart-body">
        <div class="cart-info">
            <img src="images/${item.tag}.jpg" alt="">
            <div>
                <p>${item.name}</p>
                <small>Price:$${item.price}</small>
                <br>
                <a href="" class="remove">Remove</a>
            </div>
        </div>
    </td>
    <td> <input type="number" value=${item.inCart}></td>
    <td>$${item.inCart*item.price}.00</td>
    `;

    cartHead.append(tr);
    totalProductCost();
}

// trying to attach this to the table above to the right side of the page
function totalProductCost(){
    var div = document.createElement("div");
    let cartPage = document.querySelector(".cart-page")
   div.innerHTML = `<div class="col-2 total-price">
    <table>
        <tr>
            <td>Subtotal</td>
            <td>$200.00</td>
        </tr>
        <tr>
            <td>Tax</td>
            <td>$35.00</td>
        </tr>
        <tr>
            <td>Total</td>
            <td>$230.00</td>
        </tr>
    </table>
</div>`
    cartPage.append(div);
}

// function displayCart(){
//       let cartItems = localStorage.getItem("productsInCart");
//     cartItems = JSON.parse(cartItems);
//     let productContainer = document.querySelector(".cart-info");
//     console.log(productContainer);

//     if(cartItems && productContainer){
//         productContainer.innerHTML ='';
//         Object.values(cartItems).map(item =>{
//              productContainer.innerHTML += `
            
//              <td>
//         <div class="cart-info">
//             <img src="images/${item.tag}.jpg" alt="">
//             <div>
//                 <p>${item.name}</p>
//                 <small>Price:$${item.price}</small>
//                 <br>
//                 <a href="" class="remove">Remove</a>
//             </div>
//         </div>
//     </td>
//     <td> <input type="number" value=${item.inCart}></td>
//     <td>$${item.price}</td>
//              `
//         });
//     }


// }
onLoadCartNumbers();
displayCart();



























// var productImg = document.getElementById("productImg");
// var smallImg = document.getElementsByClassName("small-img");
// smallImg[0].onclick = function(){
//     productImg.src =smallImg[0].src;
// }
// smallImg[1].onclick = function(){
//     productImg.src =smallImg[1].src;
// }
// smallImg[2].onclick = function(){
//     productImg.src =smallImg[2].src;
// }
// smallImg[3].onclick = function(){
//     productImg.src =smallImg[3].src;
// }
// cart
// var remove = document.getElementsByClassName("remove");
// // console.log(remove);
// for (var i = 0; i < remove.length; i++){
//     var remBtn = remove[i]
//     remBtn.addEventListener('click',function(e){

//         console.log("clicked")
//     })
// }  
// var removeCartItemButtons = document.getElementsByClassName('remove')
// for (var i = 0; i < removeCartItemButtons.length; i++) {
//     var button = removeCartItemButtons[i]
//     button.addEventListener('click', function(e){
//         e.preventDefault()
//         // console.log("clicked") 
//         var buttonClicked = e.target
//         buttonClicked.parentElement.parentElement.remove()
//     })
// }
// removeCartItemButtons
