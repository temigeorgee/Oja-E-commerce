//NAVBAR
function classToggle() {
    const navs = document.querySelectorAll('.navbarItems')

    navs.forEach(nav => nav.classList.toggle('navbarToggleShow'));
}

document.querySelector('.navbarToggle').addEventListener('click', classToggle);

//LOGIN & REGISTER FORM
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
// PRODUCTS
let products = [
    {
        id: 1,
        name: 'KOOVS Tie-Up Off Shoulder Top',
        detail: `<p> Material/Fabric :Main : Poly, Georgette/ Lining : Cotton, Lycra</p>
        <p>Size & Fit :This brand runs true to size. To ensure the best fit, we suggest consulting the size chart.</p> 
        <p> Bandeau Top  by KOOVS</p>
        <p>Made from poly-georgette-cotton-lycra blend
        Off shoulder neckline,
        Tie-up detail in front,
        Sheer style,
        Long fluted Sleeves,
        Regular fit.</p>`,
        cost: 2900,
        inCart: 1,
        image_one: 'https://product.koovs.com/81981_57e16385de0cd38cefb03dd4604310e5.webp',
        image_two: 'https://product.koovs.com/81981_76e9db1e07d8bae7534bd2d2cb01d0c0.webp',
        image_three: 'https://product.koovs.com/81981_76e9db1e07d8bae7534bd2d2cb01d0c0.webp',
        image_four: 'https://product.koovs.com/187x230/81981_2ea26cf01812d377e5804a9c852df704.jpg'
    },
    {
        id: 2,
        name: 'Blue Saint Twin Patch Pocket Denim Jacket',
        detail: `<p>  Material/Fabric :100% Cotton</p>
        <p>Size & Fit :
        This brand runs true to size. To ensure the best fit, we suggest consulting the size chart.</p> 
        <p>Jacket by BLUE SAINT</p>
        <p>
        Made from cotton,
        Spread collar,
        Front button closure,
        Four pockets,
        Long sleeves, 
        Slim fit.</p>`,
        cost: 1020,
        inCart: 1,
        image_one: 'https://product.koovs.com/155086_33b5919cf1a64a6485861ab43789142f_left_super_zoom.webp',
        image_two: 'https://product.koovs.com/155086_33b5919cf1a64a6485861ab43789142f_left_super_zoom.webp',
        image_three: 'https://product.koovs.com/155086_33b5919cf1a64a6485861ab43789142f_left_super_zoom.webp',
        image_four: 'https://product.koovs.com/187x230/155086_33b5919cf1a64a6485861ab43789142f_back_super_zoom.jpg'
    },
    {
        id: 3,
        name: 'Blue Saint Camo Print Shacket',
        detail: `<p>  Material/Fabric :100% Cotton</p>
        <p>Size & Fit :
        Wear it like a jacket or simply throw it over your t-shirt, this Camo Print Shacket will definitely add style to your personality. Pair it with slim-fit jeans and trainers to complete your new-season look.</p> 
        <p>Jacket by BLUE SAINT</p>
        <p>
        Made from cotton
        Spread collar 
        Lightly distressed detail
        Titch-button down closure
        All over camo print
        Twin patch pockets 
        Long sleeves with cuffs
        Regular fit .</p>`,
        cost: 5320,
        inCart: 1,
        image_one: 'https://product.koovs.com/155084_8d808fbfb30043afb415a29b133c58d6_image1_super_zoom.webp',
        image_two: 'https://product.koovs.com/155084_8d808fbfb30043afb415a29b133c58d6_front_super_zoom.webp',
        image_three: 'https://product.koovs.com/155084_8d808fbfb30043afb415a29b133c58d6_left_super_zoom.webp',
        image_four: 'https://product.koovs.com/187x230/155084_8d808fbfb30043afb415a29b133c58d6_back_super_zoom.jpg'
    },
    {
        id: 4,
        name: 'KOOVS PU Desert Boots',
        detail: `<p>Material/Fabric :PU</p>
        <p>Size & Fit :
        This brand runs true to size. To ensure the best fit, we suggest consulting the size chart.</p> 
        <p>Boots by KOOVS</p>
        <p>
        Made from PU
        Round toe
        Lace-up closure
        Mid-top design
        Raised sole</p>`,
        cost: 2009,
        inCart: 1,
        image_one: 'https://product.koovs.com/131820_4889c1f558d8ded2d1f34c3cd8646fa8.webp',
        image_two: 'https://product.koovs.com/131820_b9d1a2134d3b79312649b1ea0cb37865.webp',
        image_three: 'https://product.koovs.com/131820_e0a82f2f3ac933849aa3c2ad3bf68b0f.webp',
        image_four: 'https://product.koovs.com/131820_de5ef3f15fce51faaec96a6fe91d33cc.webp'
    },
    {
        id: 5,
        name: 'Blue Saint Drawcord Waist Slim Trousers',
        detail: `<p>Material/Fabric :98% Cotton, 2% Lycra</p>
        <p>Size & Fit :
        This brand runs true to size. To ensure the best fit, we suggest consulting the size chart.</p> 
        <p>Trousers by BLUE SAINT</p>
        <p>
        Made from cotton-lycra blend,
        Elasticated waist with drawcord,
        Three pockets,
        Slim fit.</p>`,
        cost: 2500,
        inCart: 1,
        image_one: 'https://product.koovs.com/155246_0a8175f32abf4e7b994d2c06b6be3ba4_image1_super_zoom.webp',
        image_two: 'https://product.koovs.com/155246_0a8175f32abf4e7b994d2c06b6be3ba4_front_super_zoom.webp',
        image_three: 'https://product.koovs.com/155246_0a8175f32abf4e7b994d2c06b6be3ba4_back_super_zoom.webp',
        image_four: 'https://product.koovs.com/155246_0a8175f32abf4e7b994d2c06b6be3ba4_left_super_zoom.webp'
    },
    {
        id: 6,
        name: 'Blue Saint Basic Raw Edge T-Shirt',
        detail: `<p>Material/Fabric :100% Cotton</p>
        <p>Size & Fit :
        This brand runs true to size. To ensure the best fit, we suggest consulting the size chart.</p> 
        <p>Boots by KOOVS</p>
        <p>
        Made from cotton
        Round neckline with raw edges
        Short sleeves
        Regular fit </p>`,
        cost: 1020,
        inCart: 1,
        image_one: 'https://product.koovs.com/155190_6f19357f5fb24f0d9fdc477fc3106e5a_image1_super_zoom.webp',
        image_two: 'https://product.koovs.com/155190_6f19357f5fb24f0d9fdc477fc3106e5a_front_super_zoom.webp',
        image_three: 'https://product.koovs.com/155190_6f19357f5fb24f0d9fdc477fc3106e5a_back_super_zoom.webpp',
        image_four: 'https://product.koovs.com/131820_de5ef3f15fce51faaec96a6fe91d33cc.webphttps://product.koovs.com/155190_6f19357f5fb24f0d9fdc477fc3106e5a_left_super_zoom.webp'
    },
    {
        id: 7,
        name: 'REALM Utility Cargo Pockets Slim Trousers',
        detail: `<p>Material/Fabric :100% Cotton</p>
        <p>Size & Fit :
        This brand runs true to size. To ensure the best fit, we suggest consulting the size chart.</p> 
        <p>Boots by KOOVS</p>
        <p>
        Made from cotton-spandex blend
        Button and fly closure
        Utility pockets
        Belt loops
        Slim fit</p>`,
        cost: 2000,
        inCart: 1,
        image_one: 'https://product.koovs.com/154884_75a5de1f6cc84c9f93724c080cde5065_image1_super_zoom.webp',
        image_two: 'https://product.koovs.com/154884_75a5de1f6cc84c9f93724c080cde5065_left_super_zoom.webp',
        image_three: 'https://product.koovs.com/266x230/154884_75a5de1f6cc84c9f93724c080cde5065_image1_super_zoom.jpg',
        image_four: 'https://product.koovs.com/154884_75a5de1f6cc84c9f93724c080cde5065_left_super_zoom.webp',
    },
    {
        id: 8,
        name: 'Blue Saint Contrast Collar Embroidered Slim Shirt',
        detail: `<p>Material/Fabric :100% Cotton</p>
        <p>Size & Fit :
        This brand runs true to size. To ensure the best fit, we suggest consulting the size chart.</p> 
        <p>Casual Shirt by BLUE SAINT</p>
        <p>
        Made from cotton
        Contrast spread collar
        Front button closure
        Embroidered design in front
        Long sleeves
        Slim fit</p>`,
        cost: 1509,
        inCart: 1,
        image_one: 'https://product.koovs.com/155654_a38d2a34bb7c41fa976eae46011679c3_image1_super_zoom.webp',
        image_two: 'https://product.koovs.com/266x230/155654_a38d2a34bb7c41fa976eae46011679c3_image1_super_zoom.jpg',
        image_three: 'https://product.koovs.com/266x230/155654_a38d2a34bb7c41fa976eae46011679c3_back_super_zoom.jpg',
        image_four: 'https://product.koovs.com/155654_a38d2a34bb7c41fa976eae46011679c3_left_super_zoom.webp',
    },
    {
        id: 9,
        name: 'THE SHRINE ( UV & GLOW IN THE DARK)',
        detail: `<p>Material/Fabric :100% Cotton Biowash (180GSM)</p>
        <p>Size & Fit :
        This brand runs true to size. To ensure the best fit, we suggest consulting the size chart.</p> 
        <p>THE SHRINE ( UV & GLOW IN THE DARK)</p>
        <p>
        Prints: We print using state-of-the-art screen-printing processes and other apparel embellishment techniques, including soft-hand inks, water-based inks, speciality inks, foils, and flocks. ArtBlot® is an environmentally friendly company and all of our inks are phthalate-free.
        Wash Care: Machine wash. Wash in cold water, use mild detergent, dry in shade, do not iron directly or scrub on print, do not bleach, do not tumble dry. Dry on a flat surface as hanging may cause measurement variations.
        Please Note: Colours may slightly vary depending on your screen brightness.</p>`,
        cost: 3500,
        inCart: 1,
        image_one: 'https://cdn.shopify.com/s/files/1/0073/8790/6130/products/ArtBlotMen_sBlackGlowInDarkgraphicartT-shirt_TheShrine_frontview_1800x1800.jpg?v=1594547551',
        image_two: 'https://cdn.shopify.com/s/files/1/0073/8790/6130/products/ArtBlotMen_sBlackGlowInDarkgraphicartT-shirt_TheShrineUVtees_frontview_jpg_1800x1800.jpg?v=1594547554',
        image_three: 'https://cdn.shopify.com/s/files/1/0073/8790/6130/products/ArtBlotMen_sBlackGlowInDarkgraphicartT-shirt_TheShrine_Closeupofgraphic_1800x1800.jpg?v=1594547558',
        image_four: 'https://cdn.shopify.com/s/files/1/0073/8790/6130/products/ArtBlotMen_sBlackGlowInDarkgraphicartT-shirt_TheShrine_frontview_1800x1800.jpg?v=1594547551',
    },
    {
        id: 10,
        name: 'NEW H&M SOLID PLUS SIZE SHIRT',
        detail: `<p>Material/Fabric :100% Cotton</p>
        <p>Size & Fit :
        This brand runs true to size. To ensure the best fit, we suggest consulting the size chart.</p> 
        <p>NEW H&M SOLID PLUS SIZE SHIRT</p>
        <p>
        Get this H&M Solid Plus Size Shirt and more on Dexstitches, we deliver all over Nigeria.  Shop the latest trends & quality wears at the best price, we are here to help you dictate your style and express yourself with fashion pieces that let you rock your occasions and also stay in vogue.
        </p>`,
        cost: 910,
        inCart: 1,
        image_one: 'https://dexstitches.com/image/cache/catalog/1131-1080x1440.jpg',
        image_two: 'https://dexstitches.com/image/cache/catalog/1133-1080x1440.jpg',
        image_three: 'https://dexstitches.com/image/cache/catalog/1132-1080x1440.jpg',
        image_four: 'https://dexstitches.com/image/cache/catalog/1131-1080x1440.jpg',
    },
    {
        id: 11,
        name: 'Men Black Full Length Jogger Track',
        detail: `<p>Material/Fabric : Cotton Polyester</p>
        <p>Size & Fit :
        Create a look that highlight your most voguish look and keeps you comfortable by making this black jogger a part of your gym wear. It features a regular fit, stretchable waistband and a solid pattern. Make sure your exercise sessions go well and smooth by pairing it with a cozy t-shirt and shoes. Give yourself a stylish look with a futuristic wristwatch. Model's height is 6.1 ft. & he is wearing size 1.</p> 
        <p>Men Black Full Length Jogger Track</p>
        <p>
        WASH CARE
        Machine Wash 30 Degree Celcius, Tumble Dry Low, Wash Dark Colors Separately, Medium Iron, Do Not Bleach</p>`,
        cost: 450,
        inCart: 1,
        image_one: 'https://www.allonlinestore.in/media/product/68/73/11-wishlist.jpg',
        image_two: 'https://www.allonlinestore.in/media/product/68/73/15-wishlist.jpg',
        image_three: 'https://www.allonlinestore.in/media/product/68/73/14-wishlist.jpg',
        image_four: 'https://www.allonlinestore.in/media/product/68/73/13-wishlist.jpg',
    },
    {
        id: 12,
        name: 'Blue Saint Aqua Blue Short Sleeves Slim Fit Shirt',
        detail: `<p>Material/Fabric :100% Viscose</p>
        <p>Size & Fit :
        This brand runs true to size. To ensure the best fit, we suggest consulting the size chart.</p> 
        <p>Shirt by BLUE SAINT</p>
        <p>
        Made from Viscose
        Spread Collar
        Button Down
        All Over Zebra Print
        Short Sleeves
        Slim Fit</p>`,
        cost: 1790,
        inCart: 1,
        image_one: 'https://product.koovs.com/155439_66b74e33b50343249b9c32d7cefccc1e_image1_super_zoom.webp',
        image_two: 'https://product.koovs.com/146x230/155439_66b74e33b50343249b9c32d7cefccc1e_front_super_zoom.jpg',
        image_three: 'https://product.koovs.com/146x230/155439_66b74e33b50343249b9c32d7cefccc1e_left_super_zoom.jpg',
        image_four: 'https://product.koovs.com/146x230/155439_66b74e33b50343249b9c32d7cefccc1e_back_super_zoom.jpg'
    }
];


// Display all prodects on screen
function addAllProducts() {
    let $productList = $("#product-list");

    products.forEach((item) => {
        var $div = $("<div>");
        $div.addClass("col-4");

        $div.html(`
        <a><img src="${item.image_one}" class="myPrdImg"></a>
        <a href="#"><h4 id=${item.id} class="myPrd">${item.name}</h4></a>
        <div class="rating">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star-o"></i>
        </div>
        <p>$${item.cost}.00</p><span><a href="#" class="btn add-cart clicker" id="mySelectedItem">Add to Cart</a></span>
    `);
        $productList.append($div)
    });

    // HANDLNG THE SELECTED ITEM
    let $selectedItem = $('.clicker');

    $selectedItem.each(function (i, item) {
        $(item).on("click", function (e) {
            e.preventDefault();
            let productId = $(item).parent().prev().prev().prev().find('h4').attr('id');
            let productName = $(item).parent().prev().prev().prev().find('h4').text();
            let productCost = $(item).parent().prev().html();
            let productImage = $(item).parent().prev().prev().prev().prev().find('img').attr('src');

            let transformCost = productCost.split("").slice(1).join("");

            var product = new Product(productId, productName, transformCost, productImage);

            Store.addProduct(product, productId);
            $(item).text('Added to Cart!');
            window.location.reload(1);
        })
    })

}


// INSERT ALL PRODUCTS TO PAGE
addAllProducts();

// Product Class Declaration
class Product {
    constructor(productID, productName, productCost, productImage) {
        this.productID = productID,
            this.productName = productName,
            this.productCost = productCost,
            this.productImage = productImage,
            this.inCart = 1
    }
};

// Store Class: To Handle My storage
class Store {
    static getProducts() {
        let products;
        if (localStorage.getItem('cart') === null) {
            products = [];
        } else {
            products = JSON.parse(localStorage.getItem('cart'));
        }
        return products;
    };

    static addProduct(product, id) {
        const products = Store.getProducts();

        // If the array is empty, create new one
        if (products.length === 0) {
            products.push(product);

            localStorage.setItem('cart', JSON.stringify(products));
        } else if (products.length >= 1) {
            // Check if it exists and add appropraite 
            var index = products.findIndex(x => x.productID == id);

            if (index === -1) {
                products.push(product);
                localStorage.setItem('cart', JSON.stringify(products));
            } else {
                return
            }
        }

    };

    static modifyProduct($el) {
        const products = Store.getProducts();

        $el.on('mouseleave')

        // products.forEach((product, index) => {
        //     if (product.productID == id) {
        //         ++product.inCart;
        //     }
        // });
        // localStorage.setItem('cart', JSON.stringify(products));
    };

    static deleteProduct($el) {
        const products = Store.getProducts();

        if ($el.hasClass('remove')) {
            let element = $el.parent().parent().parent().attr('id');

            products.forEach((product, index) => {
                if (product.productID == element) {
                    products.splice(index, 1);
                }
            });
            localStorage.setItem('cart', JSON.stringify(products));
        }
    };
};




// Display on cart

function displayCart() {
    let cartItems = Store.getProducts();
    if (cartItems.length >= 1) {
        for (let item in cartItems) {
            attachCartItems(cartItems[item]);
        }
    } else if (cartItems.length == 0) {
        
        attachEmptyCartItem()
    }
}
function attachCartItems(item) {
    let $cartMainBody = $(".cart-mainBody");
    let $tr = $("<tr>");
    $tr.html(`
    <td class="cart-body" id=${item.productID}>
        <div class="cart-info">
            <img src="${item.productImage}" alt="">
            <div>
                <p>${item.productName}</p>
                <small>Price:$${item.productCost}</small>
                <br>
                <a href="" class="remove">Remove</a>
            </div>
        </div>
    </td>
    <td> <input type="number" value=${item.inCart} class="incre"></td>
    <td>$${item.inCart * item.productCost}.00</td>
    `);
    $cartMainBody.append($tr);
    // totalProductCost();
}



function attachEmptyCartItem() {
    let $cartMainBody= $(".cart-mainBody");
    // console.log('Carrrt items : ', cartItems[item]);
    let $tr = $("<tr>");
    $tr.html(`
    <div class = "empty">
    <lottie-player src="https://assets8.lottiefiles.com/datafiles/hYQRPx1PLaUw8znMhjLq2LdMbklnAwVSqzrkB4wG/bag_error.json"  background="transparent"  speed="1"  style="width: 300px; height: 300px;"  loop  autoplay></lottie-player>
     <p>Looks Like You Haven't Added Any Product In The Cart</p>
     </div>`);
     $cartMainBody.append($tr);
     console.log($tr)
}
// console.log('Carrrt items : ', cartItems[item]);
displayCart();


function calcTotalProductCost() {
    let currentItems = Store.getProducts();

    if (currentItems) {

        let cartProductsArray = []
        for (let item in currentItems) {
            cartProductsArray.push(currentItems[item])
        }
        let inCartTotal = 0;
        for (let i = 0; i < cartProductsArray.length; i++) {
            let totalItem = cartProductsArray[i].inCart * Number(cartProductsArray[i].productCost);
            inCartTotal += totalItem;
        }
        return inCartTotal;
    }
    else {
        return 0
    }
}



// set total product cost
let taxFactor = 0.2;
function totalProductCost() {
    var $div = $("<div>");
    let cartCost = calcTotalProductCost();
    let $cartPage = $("#tots");
    let tax = cartCost * taxFactor;
    let total = parseInt(tax) + parseInt(cartCost)
    $div.addClass("col-2 total-price");
    $div.html(`
                <table>
                    <tr>
                        <td>Subtotal</td>
                        <td>$${cartCost}.00</td>
                    </tr>
                    <tr>
                        <td>Tax</td>
                        <td>$${tax}.00</td>
                    </tr>
                    <tr>
                        <td>Total</td>
                        <td>$${total}.00</td>
                    </tr>
                </table>`);
    $cartPage.append($div);

}

totalProductCost();


// UPDATE THE CART

function calcInCart() {
    let products = Store.getProducts();

    var allItemsInCart = products.map(product => product.inCart).reduce((a, b) => a + b, 0);

    // Attach to cart icon
    let $myCart = $('#theCart');

    $myCart.text(allItemsInCart);
}

calcInCart();


// DELETE a product in cart
var $tableBody = $('tbody');

$tableBody.on('click', (e) => {
    Store.deleteProduct($(e.target));

    // Implement increment of inCart once the amount of items is increased
    Store.modifyProduct($(e.target));
    // console.log(e.target)
});


// ======================================== PRODUCT DETAILS SCRIPTS =============================================
let $productList = $("#product-list");

$productList.on('click', (e) => {
    // console.log(e.target);
    e.preventDefault();
    productDetailsCreator(e.target);
});



// ===================================== CREATE THE PRODUCT DETAILS ===========================================
function productDetailsCreator(e) {
    localStorage.removeItem("product");
    if ($(e).hasClass('myPrd')) {

        let element = $(e).attr('id');
        var index = products.findIndex(x => x.id == element);

        if (index != -1) {
            let selectedProduct = products[index];

            localStorage.setItem('product', JSON.stringify(selectedProduct));

            window.location.href = "/html/product/product-details.html";

            
        }
    } else if ($(e).hasClass('myPrdImg')) {
        let element = $(e).parent().next().find('h4').attr('id');
        var index = products.findIndex(x => x.id == element);

        if (index != -1) {
            let selectedProduct = products[index];

            localStorage.setItem('product', JSON.stringify(selectedProduct));

            window.location.href = "product-details.html";
        }
    }
}


// ======================================= ATTACH THE PRODUCT DETALS ==============================

displayProductDetails();

function displayProductDetails() {
    // let selectedProductId = localStorage.getItem("selectedProduct");
    let selectedProduct = JSON.parse(localStorage.getItem('product'));

    // let selectedProduct = products[selectedProductId - 1]
    // console.log(selectedProduct)

    let $productList = $("#product-details");
    var $div = $("<div>");
    $div.addClass("row");
    $div.html(`
        <div class="row">
            <div class="col-2">
                <img src="${selectedProduct.image_one}" width="100%"  id="productImg">
                <div class="small-img-row">
                    <div class="small-img-col">
                        <img src="${selectedProduct.image_two}" width="100%" class="small-img">
                    </div>
                    <div class="small-img-col">
                        <img src="${selectedProduct.image_three}" width="100%" class="small-img">
                    </div>
                    <div class="small-img-col">
                        <img src="${selectedProduct.image_four}"  width="100%"class="small-img">
                    </div>
                    <div class="small-img-col">
                        <img src="${selectedProduct.image_one}"width="100%" class="small-img">
                    </div>
                </div>
            </div>
            <div class="col-2">
                <p>Home/T-shirt</p>
                <h1>${selectedProduct.name}</h1>
                <h4>$${selectedProduct.cost}.00</h4>
                <select>
                   <option value="">Select Size</option>
                   <option value="">XXL</option>
                   <option value="">XL</option>
                   <option value="">L</option>
                   <option value="">M</option>
                   <option value="">S</option>
                </select>
                <input type="number" value="1">
                <a href="" class="btn">Add To Cart</a>
                <h3>Product Details <i class="fa fa-indent"></i></h3>
                <p>${selectedProduct.detail}</p>
            </div>
        </div>
    `);

    $productList.append($div)

}



































// // Redirect to product details
// function toPoductDetials(item) {
//     localStorage.setItem("selectedProduct", item);
//     window.location.replace("/product-details.html");
// }
// addAllProducts();

// function CartIsEmpty() {
//     let emptyCart = `<span class='empty-cart'>Looks Like You Haven't Added Any Product In The Cart</span>`;
//     if (cartDetails.length == 0) {
//         document.getElementsByClassName("cart-items")[0].innerHTML = emptyCart;
//     }
// }
// function addToCart(item) {
//     cartNumbers();
//     let cartItems = localStorage.getItem('cartItems');
//     if (cartItems) {
//         let newCartItems = JSON.parse(cartItems);
//         console.log(newCartItems)
//         if (newCartItems.includes(item - 1)) {
//             return
//         } else {
//             newCartItems.push(item)
//             localStorage.setItem('cartItems', JSON.stringify(newCartItems));
//         }
//     } else {
//         let upCartItems = [];
//         upCartItems.push(item)
//         console.log(upCartItems)
//         localStorage.setItem('cartItems', JSON.stringify(upCartItems))
//     }


// }

// function cartNumbers() {
//     let productNumbers = localStorage.getItem('cartNumbers')

//     productNumbers = parseInt(productNumbers)
//     if (productNumbers) {
//         localStorage.setItem('cartNumbers', productNumbers + 1);
//         document.querySelector("a span").textContent = productNumbers + 1;
//     } else {
//         localStorage.setItem('cartNumbers', 1);
//         document.querySelector("a span").textContent = 1;
//     }
// }

// // let subCart = []

// // function addToCart(itemId){
// //     subCart.push(itemId -1)
// //     cartNumbers();

// // }









































// //     {
// //     name: "Red Printed t-shirt",
// //     tag: "product-0",
// //     price: 50,
// //     inCart: 0
// // },
// // {
// //     name: "Black Sneakers",
// //     tag: "BlackSneakers",
// //     price: 30,
// //     inCart: 0
// // },
// // {
// //     name: "Grey joggers",
// //     tag: "Greyjoggers",
// //     price: 25,
// //     inCart: 0
// // },
// // {
// //     name: "Pink off-shoulder",
// //     tag: "product-0.1",
// //     price: 20,
// //     inCart: 0
// // }
// ]






// // let products = [{
// //     name: "Red Printed t-shirt",
// //     tag: "product-0",
// //     price: 50,
// //     inCart: 0
// // },
// // {
// //     name: "Black Sneakers",
// //     tag: "BlackSneakers",
// //     price: 30,
// //     inCart: 0
// // },
// // {
// //     name: "Grey joggers",
// //     tag: "Greyjoggers",
// //     price: 25,
// //     inCart: 0
// // },
// // {
// //     name: "Pink off-shoulder",
// //     tag: "product-0.1",
// //     price: 20,
// //     inCart: 0
// // }
// // ]

// // {
// //     id : 7,
// //     name: 'REALM Utility Cargo Pockets Slim Trousers',
// //     detail: `<p>Material/Fabric :100% Cotton</p>
// //     <p>Size & Fit :
// //     This brand runs true to size. To ensure the best fit, we suggest consulting the size chart.</p> 
// //     <p>Boots by KOOVS</p>
// //     <p>
// //     Made from cotton-spandex blend
// //     Button and fly closure
// //     Utility pockets
// //     Belt loops
// //     Slim fit</p>`,
// //     cost: 20,
// //     image_one: 'https://product.koovs.com/266x230/154884_75a5de1f6cc84c9f93724c080cde5065_image1_super_zoom.jpg',
// //     image_two: 'https://product.koovs.com/154884_75a5de1f6cc84c9f93724c080cde5065_left_super_zoom.webp',
// //     image_three: 'https://product.koovs.com/154884_75a5de1f6cc84c9f93724c080cde5065_left_super_zoom.webp',
// //     image_four: 'https://product.koovs.com/154884_75a5de1f6cc84c9f93724c080cde5065_left_super_zoom.webp'
// // }
// function addAllProducts() {
//     let productList = document.getElementById("product-list");

//     products.forEach((item)=>{
//         var div = document.createElement("div");
//         div.classList.add("col-4");
//         div.innerHTML = `
//         <a><img src="${item.image_one}" onclick="toPoductDetials(${item.id})"></a>
//             <a href="product-details.html"><h4>Red Printed t-shirt</h4></a>
//         <div class="rating">
//             <i class="fa fa-star"></i>
//             <i class="fa fa-star"></i>
//             <i class="fa fa-star"></i>
//             <i class="fa fa-star"></i>
//             <i class="fa fa-star-o"></i>
//         </div>
//         <p onclick="addToCart(${item.id})">$${item.cost}.00</p><span><a href="#" class="btn add-cart">Add to Cart</a></span>
//     `
//     productList.append(div)

//     });

// }

// function toPoductDetials(item) {
//     localStorage.setItem("selectedProduct", item);
//     selectedProduct.push(item)

// }

// addAllProducts();



// // let carts = document.querySelectorAll(".add-cart");
// let cartBtn = document.querySelectorAll(".add-cart");

// let subCart = []

// function addToCart(itemId){
//     subCart.push(itemId -1)
//     cartNumbers();

// }

// function cartNumbers() {
//     let productNumbers = localStorage.getItem('cartNumbers')

//     productNumbers = parseInt(productNumbers)
//     if (productNumbers) {
//         localStorage.setItem('cartNumbers', productNumbers + 1);
//         document.querySelector("a span").textContent = productNumbers + 1
//     } else {
//         localStorage.setItem('cartNumbers', 1);
//         document.querySelector("a span").textContent = 1;
//     }
// }


// // function displayProductDetails() {
// //     let selectedProductId = localStorage.getItem("selectedProduct");

// //     let selectedProduct = products[selectedProductId - 1]
// //     console.log(selectedProduct)

// //     let productList = document.getElementById("product-details");   
// //         var div = document.createElement("div");
// //         div.classList.add("row");
// //         div.innerHTML = `
// //         <div class="row">
// //             <div class="col-2">
// //                 <img src="images/gallery-1.jpg" width="100%" id="productImg">
// //                 <div class="small-img-row">
// //                     <div class="small-img-col">
// //                         <img src="images/gallery-2.jpg" width="100%" class="small-img">
// //                     </div>
// //                     <div class="small-img-col">
// //                         <img src="images/gallery-3.jpg" width="100%" class="small-img">
// //                     </div>
// //                     <div class="small-img-col">
// //                         <img src="images/gallery-4.jpg"  width="100%"class="small-img">
// //                     </div>
// //                     <div class="small-img-col">
// //                         <img src="images/gallery-1.jpg"width="100%" class="small-img">
// //                     </div>
// //                 </div>
// //             </div>
// //             <div class="col-2">
// //                 <p>Home/T-shirt</p>
// //                 <h1>Red T-shirt</h1>
// //                 <h4>$50.00</h4>
// //                 <select>
// //                    <option value="">Select Size</option>
// //                    <option value="">XXL</option>
// //                    <option value="">XL</option>
// //                    <option value="">L</option>
// //                    <option value="">M</option>
// //                    <option value="">S</option>
// //                 </select>
// //                 <input type="number" value="1">
// //                 <a href="" class="btn">Add To Cart</a>
// //                 <h3>Product Details <i class="fa fa-indent"></i></h3>
// //                 <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br> Aliquam recusandae dolore dolor, qui repellat alias amet corrupti iusto iste, veritatis reiciendis. <br> Est soluta illo, magni ad pariatur quo asperiores perspiciatis.</p>
// //             </div>
// //         </div>
// //     `

// //     productList.append(div)

// // }

// // displayProductDetails();





// // for (let i = 0; i < carts.length; i++) {
// //     carts[i].addEventListener('click', () => {
// //         cartNumbers(products[i]);
// //         totalCost(products[i]);
// //     })
// // }


// // console.log(cartNumbers(product))
// // carts.forEach(function(carts) {
// //     carts.addEventListener('click', () => {
// //             cartNumbers(product )
// //     })
// // });


// // function onLoadCartNumbers() {
// //     let productNumbers = localStorage.getItem('cartNumbers')

// //     if (productNumbers) {
// //         document.querySelector("a span").textContent = productNumbers;
// //     }
// // }

// // function cartNumbers(product) {
// //     let productNumbers = localStorage.getItem('cartNumbers')

// //     productNumbers = parseInt(productNumbers)
// //     if (productNumbers) {
// //         localStorage.setItem('cartNumbers', productNumbers + 1);
// //         document.querySelector("a span").textContent = productNumbers + 1
// //     } else {
// //         localStorage.setItem('cartNumbers', 1);
// //         document.querySelector("a span").textContent = 1;
// //     }
// //     setItems(product);
// // }

// // function setItems(product) {
// //     let cartItems = localStorage.getItem("productsInCart");
// //     cartItems = JSON.parse(cartItems)
// //        console.log("my cartitems are", cartItems)
// //     if (cartItems != null) {

// //         if (cartItems[product.tag] == undefined) {
// //             cartItems = {
// //                 ...cartItems,
// //                 [product.tag]: product
// //             }
// //         }
// //         cartItems[product.tag].inCart += 1;
// //     } else {
// //         product.inCart = 1;
// //         cartItems = {
// //             [product.tag]: product

// //         }
// //     }
// //     localStorage.setItem("productsInCart", JSON.stringify(cartItems))
// // }

// // function totalCost(product) {
// //     // console.log("the product price is",product.price)

// //     let cartCost = localStorage.getItem('totalCost')
// //     console.log("My cartCost is", cartCost)


// //     console.log(typeof cartCost)
// //     if (cartCost != null) {
// //         cartCost = parseInt(cartCost);
// //         localStorage.setItem("totalCost", cartCost + product.price);
// //     } else {
// //         localStorage.setItem("totalCost", product.price)
// //     }


// // }

// function displayCart() {
//     let cartItems = localStorage.getItem("productsInCart");
//     cartItems = JSON.parse(cartItems);

//     if (cartItems) {
//         for (let item in cartItems) {
//             attachCartItems(cartItems[item]);
//             console.log(cartItems[item])
//         }
//     }
// }

// function attachCartItems(item) {
//     let cartHead = document.querySelector(".cart-head");

//     var tr = document.createElement("tr");

//     tr.innerHTML = `
//     <td class="cart-body">
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
//     <td>$${item.inCart*item.price}.00</td>
//     `;

//     cartHead.append(tr);
//     // totalProductCost();
// }

// let taxFactor = 0.2;
// // trying to attach this to the table above to the right side of the page
// function totalProductCost(){
//     var div = document.createElement("div");
//     let cartCost = localStorage.getItem('totalCost');
//     let cartPage = document.querySelector("#tots");
//     let tax = cartCost * taxFactor;
//     let total = parseInt(tax) + parseInt(cartCost);

//     div.classList.add("col-2", "total-price");
//    div.innerHTML = `
//                 <table>
//                     <tr>
//                         <td>Subtotal</td>
//                         <td>$${cartCost}</td>
//                     </tr>
//                     <tr>
//                         <td>Tax</td>
//                         <td>$${tax}</td>
//                     </tr>
//                     <tr>
//                         <td>Total</td>
//                         <td>${total}</td>
//                     </tr>
//                 </table>`;
//     cartPage.append(div);
// }


// totalProductCost();
// // function displayCart(){
// //       let cartItems = localStorage.getItem("productsInCart");
// //     cartItems = JSON.parse(cartItems);
// //     let productContainer = document.querySelector(".cart-info");
// //     console.log(productContainer);

// //     if(cartItems && productContainer){
// //         productContainer.innerHTML ='';
// //         Object.values(cartItems).map(item =>{
// //              productContainer.innerHTML += `

// //              <td>
// //         <div class="cart-info">
// //             <img src="images/${item.tag}.jpg" alt="">
// //             <div>
// //                 <p>${item.name}</p>
// //                 <small>Price:$${item.price}</small>
// //                 <br>
// //                 <a href="" class="remove">Remove</a>
// //             </div>
// //         </div>
// //     </td>
// //     <td> <input type="number" value=${item.inCart}></td>
// //     <td>$${item.price}</td>
// //              `
// //         });
// //     }


// // }
// onLoadCartNumbers();
// displayCart();



























// cart
// var remove = document.getElementsByClassName("remove");
// // console.log(remove);
// for (var i = 0; i < remove.length; i++){
//     var remBtn = remove[i]
//     remBtn.addEventListener('click',function(e){

//         console.log("clicked")
//     })
// }  
// // var removeCartItemButtons = document.getElementsByClassName('remove')
// // for (var i = 0; i < removeCartItemButtons.length; i++) {
// //     var button = removeCartItemButtons[i]
// //     button.addEventListener('click', function(e){
// //         e.preventDefault()
// //         // console.log("clicked") 
// //         var buttonClicked = e.target
// //         buttonClicked.parentElement.parentElement.remove()
// //     })
// // }
// // removeCartItemButtons
