document.addEventListener("DOMContentLoaded", function () {
    updateCartCountSpan();
    const targets = document.querySelectorAll('.to-animated');
    const observer = new IntersectionObserver(
        function (entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate__animated', 'animate__fadeInUp', 'animate__delay-0.5s', 'animate__slow');
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.01
        }
    );
    targets.forEach(target => {
        observer.observe(target);
    });
});
// ===============================================================================================================================
let xhr = new XMLHttpRequest();
xhr.open("GET", "https://dummyjson.com/c/421e-1676-48ec-9de1");
xhr.send();
xhr.addEventListener("readystatechange", function () {
    if (xhr.readyState == 4) {
        let products = JSON.parse(xhr.response);

        let cont = document.getElementsByClassName("productsMenuDesserts")[0];

        for (let prd of products) {
            let divall = document.createElement("div");
            divall.setAttribute("class", "all-in-div")
            let divr = document.createElement("div");
            let divl = document.createElement("div");
            divr.setAttribute("class", 'product-right');
            divl.setAttribute("class", 'product-left');
            let title = document.createElement("span");
            let price = document.createElement("span");
            let allspan = document.createElement("div");
            allspan.setAttribute("class", "span-price");
            title.innerText = prd.title;
            price.innerText = prd.price;
            let p = document.createElement("p");
            p.innerHTML = prd.describtion

            let img = document.createElement("img");
            img.setAttribute("class", "product-img-right")
            img.src = prd.image;

            cont.appendChild(divall);
            divall.appendChild(divl);
            divall.appendChild(divr);
            divl.appendChild(img);
            allspan.appendChild(title);
            allspan.appendChild(price);
            divr.appendChild(allspan);
            divr.appendChild(p);
        }
    }
})

// ===============================================================================================================================

let xhr2 = new XMLHttpRequest();
xhr2.open("GET", "https://dummyjson.com/c/2153-197c-4621-9847");
xhr2.send();
xhr2.addEventListener("readystatechange", function () {
    if (xhr2.readyState == 4) {
        let products = JSON.parse(xhr2.response);

        let cont = document.getElementsByClassName("productsMenuDrinks")[0];

        for (let prd of products) {
            let divall = document.createElement("div");
            divall.setAttribute("class", "all-in-div")
            let divr = document.createElement("div");
            let divl = document.createElement("div");
            divr.setAttribute("class", 'product-right');
            divl.setAttribute("class", 'product-left');
            let title = document.createElement("span");
            let price = document.createElement("span");
            let allspan = document.createElement("div");
            allspan.setAttribute("class", "span-price");
            title.innerText = prd.title;
            price.innerText = prd.price;
            let p = document.createElement("p");
            p.innerHTML = prd.describtion

            let img = document.createElement("img");
            img.setAttribute("class", "product-img-right")
            img.src = prd.image;

            cont.appendChild(divall);
            divall.appendChild(divl);
            divall.appendChild(divr);
            divl.appendChild(img);
            allspan.appendChild(title);
            allspan.appendChild(price);
            divr.appendChild(allspan);
            divr.appendChild(p);
        }
    }
})
// ===============================================================================================================================
function showDrinks() {
    let drinksSection = document.querySelector(".drinks-products");
    let dessertsSection = document.querySelector(".desserts-products");

    drinksSection.classList.add("hidden");
    dessertsSection.classList.remove("hidden");
}

function showDesserts() {
    let drinksSection = document.querySelector(".drinks-products");
    let dessertsSection = document.querySelector(".desserts-products");

    dessertsSection.classList.add("hidden");
    drinksSection.classList.remove("hidden");
}

let xhr3 = new XMLHttpRequest();
xhr3.open("GET", "https://dummyjson.com/c/2bed-fba2-4cca-9a3d");
xhr3.send();
xhr3.addEventListener("readystatechange", function () {
    if (xhr3.readyState == 4) {
        let products = JSON.parse(xhr3.response);

        let cont = document.getElementsByClassName("desserts-products")[0];

        for (let prd of products) {
            let div = document.createElement("div");
            div.setAttribute("class", "div-to-add")
            let title = document.createElement("h5");
            let price = document.createElement("h5");
            title.innerText = prd.title;
            price.innerText = prd.price;
            let p = document.createElement("p");
            p.innerHTML = prd.describtion;
            let btn = document.createElement("button");
            btn.innerText = "Add To Cart"
            btn.addEventListener("click", function () {
                localStorage.setItem(`product_${prd.image}`, JSON.stringify({
                    price: prd.price,
                    image: prd.image,
                    title: prd.title
                }));
                updateCartCountSpan();
            })

            let img = document.createElement("img");
            img.setAttribute("class", "product-img-add")
            img.src = prd.image;

            cont.appendChild(div);
            div.appendChild(img);
            div.appendChild(title);
            div.appendChild(p);
            div.appendChild(price);
            div.appendChild(btn)
        }
    }
})




let xhr4 = new XMLHttpRequest();
xhr4.open("GET", "https://dummyjson.com/c/1900-65fa-4e7b-8fd0");
xhr4.send();
xhr4.addEventListener("readystatechange", function () {
    if (xhr4.readyState == 4) {
        let products = JSON.parse(xhr4.response);

        let cont = document.getElementsByClassName("drinks-products")[0];

        for (let prd of products) {
            let div = document.createElement("div");
            div.setAttribute("class", "div-to-add")
            let title = document.createElement("h5");
            let price = document.createElement("h5");
            title.innerText = prd.title;
            price.innerText = prd.price;
            let p = document.createElement("p");
            p.innerHTML = prd.describtion;
            let btn = document.createElement("button");
            btn.innerText = "Add To Cart"
            btn.addEventListener("click", function () {
                localStorage.setItem(`product_${prd.image}`, JSON.stringify({
                    price: prd.price,
                    image: prd.image,
                    title: prd.title
                }));
                updateCartCountSpan();
            })

            let img = document.createElement("img");
            img.setAttribute("class", "product-img-add")
            img.src = prd.image;

            cont.appendChild(div);
            div.appendChild(img);
            div.appendChild(title);
            div.appendChild(p);
            div.appendChild(price);
            div.appendChild(btn)
        }
    }
})


// ===============================================================================================================================
let xhr5 = new XMLHttpRequest();
xhr5.open("GET", "https://dummyjson.com/c/3eba-fc63-4833-ac0a");
xhr5.send();
xhr5.addEventListener("readystatechange", function () {
    if (xhr5.readyState == 4) {
        let products = JSON.parse(xhr5.response);

        let cont = document.getElementsByClassName("product-coffee-cups")[0];

        for (let prd of products) {
            let div = document.createElement("div");
            div.setAttribute("class", "div-to-add")
            let title = document.createElement("h5");
            let price = document.createElement("h5");
            title.innerText = prd.title;
            price.innerText = prd.price;
            let p = document.createElement("p");
            p.innerHTML = prd.describtion;
            let btn = document.createElement("button");
            btn.innerText = "Add To Cart"
            btn.addEventListener("click", function () {
                localStorage.setItem(`product_${prd.image}`, JSON.stringify({
                    price: prd.price,
                    image: prd.image,
                    title: prd.title
                }));
                updateCartCountSpan();
            })

            let img = document.createElement("img");
            img.setAttribute("class", "product-img-add")
            img.src = prd.image;

            cont.appendChild(div);
            div.appendChild(img);
            div.appendChild(title);
            div.appendChild(p);
            div.appendChild(price);
            div.appendChild(btn)
        }
    }
})



// ===============================================================================================================================
let cartContainer = document.getElementById("product-in-cart");

for (let key in localStorage) {
    if (key.startsWith("product_")) {
        let item = JSON.parse(localStorage.getItem(key));

        let div = document.createElement("div");
        div.className = "cart-item";
        let img = document.createElement("img");
        img.src = item.image;
        img.className = "cart-img";
        let title = document.createElement("h4");
        title.innerText = item.title;
        let price = document.createElement("h4");
        price.innerText = item.price;
        let quan = document.createElement("div");
        quan.setAttribute("class", "quantity");
        let increase = document.createElement("button");
        let count = document.createElement("p");
        count.innerText = "1"
        let decrease = document.createElement("button");
        decrease.innerText = "-";
        increase.innerText = "+";
        decrease.addEventListener("click", function () {
            if (Number(count.innerText) > 1) {
                count.innerText = Number(count.innerText) - 1;
                total.innerText = "$" + (numericPrice * Number(count.innerText)).toFixed(2);
                updateSubtotal();
            }
        })
        increase.addEventListener("click", function () {
            if (Number(count.innerText) < 10) {
                count.innerText = Number(count.innerText) + 1;
                total.innerText = "$" + (numericPrice * Number(count.innerText)).toFixed(2);
                updateSubtotal();
            }
        })
        quan.appendChild(decrease);
        quan.appendChild(count);
        quan.appendChild(increase);
        let total = document.createElement("h4");
        let numericPrice = parseFloat(item.price.replace("$", ""));
        total.innerText = "$" + (numericPrice * Number(count.innerText)).toFixed(2);

        let removeBtn = document.createElement("button");
        removeBtn.classList.add("remove-item")
        removeBtn.innerText = "Remove";
        removeBtn.addEventListener("click", function () {
            localStorage.removeItem(key);
            div.remove();
            updateSubtotal();
            updateCartCountSpan();
        });
        div.appendChild(removeBtn);

        div.appendChild(img);
        div.appendChild(title);
        div.appendChild(price);
        div.appendChild(quan);
        div.appendChild(total);
        div.dataset.unitPrice = numericPrice;
        div.dataset.quantityEl = count;

        cartContainer.appendChild(div);
    }
}


// ===============================================================================================================================
let checkoutContainer = document.getElementById("check-out");

let div = document.createElement("div");
div.className = "check-out-div";
checkoutContainer.appendChild(div);
let h2 = document.createElement("h2");
h2.innerText = "Cart Totals";
div.appendChild(h2);
let conLandF = document.createElement("div")
let left = document.createElement("div")
let right = document.createElement("div")
div.appendChild(conLandF)
conLandF.setAttribute("class", "leftAndRightDiv")
conLandF.appendChild(left);
conLandF.appendChild(right);
let Subtotal = document.createElement("p");
Subtotal.innerText = "Subtotal";
let Delivery = document.createElement("p");
Delivery.innerText = "Delivery";
let Discount = document.createElement("p");
Discount.innerText = "Discount";
let lastTotal = document.createElement("p");
lastTotal.innerText = "Total";
left.appendChild(Subtotal);
left.appendChild(Delivery);
left.appendChild(Discount);
left.appendChild(lastTotal);

let SubtotalPrice = document.createElement("p");
SubtotalPrice.innerText = "$0.00"
let DeliveryPrice = document.createElement("p");
DeliveryPrice.innerText = "$0.00";
let DiscountPrice = document.createElement("p");
DiscountPrice.innerText = "$3.00";
let lastTotalPrice = document.createElement("p");
lastTotalPrice.innerText = "$0.00";
right.appendChild(SubtotalPrice);
right.appendChild(DeliveryPrice);
right.appendChild(DiscountPrice);
right.appendChild(lastTotalPrice);
function updateSubtotal() {
    let items = document.querySelectorAll(".cart-item");
    let total = 0;
    items.forEach(item => {
        let price = parseFloat(item.dataset.unitPrice);
        let quantity = Number(item.querySelector("p").innerText);
        total += price * quantity;
    });

    SubtotalPrice.innerText = "$" + total.toFixed(2);

    let delivery = parseFloat(DeliveryPrice.innerText.replace("$", ""));
    let discount = parseFloat(DiscountPrice.innerText.replace("$", ""));
    let finalTotal = total + delivery - discount;

    lastTotalPrice.innerText = "$" + finalTotal.toFixed(2);
}

for (let key in localStorage) {
    if (key.startsWith("product_")) {
        let item = JSON.parse(localStorage.getItem(key));
    }
}

updateSubtotal();
let clearBtnall = document.createElement("button");
clearBtnall.innerText = "Proceed to Checkout";
clearBtnall.className = "clear-cart-btn";
clearBtnall.addEventListener("click", function () {
    localStorage.clear();
    cartContainer.innerHTML = "";
    updateSubtotal();
    updateCartCountSpan();
});
checkoutContainer.appendChild(clearBtnall);



function updateCartCountSpan() {
    let count = 0;
    for (let key in localStorage) {
        if (key.startsWith("product_")) {
            count++;
        }
    }
    document.getElementById("cart-count-span").textContent = count;
}









function animateCountUp(el, target) {
    let current = 0;
    let increment = target / 120;
    let interval = setInterval(() => {
        current += increment;
        if (current >= target) {
            el.innerText = target;
            clearInterval(interval);
        } else {
            el.innerText = Math.floor(current);
        }
    }, 20);
}

let hasAnimated = false;

window.addEventListener('scroll', () => {
    let section = document.querySelector('.rotating-box');
    let rect = section.getBoundingClientRect();
    if (!hasAnimated && rect.top < window.innerHeight) {
        hasAnimated = true;
        let counters = document.querySelectorAll('.h2-sup');
        counters.forEach(counter => {
            let target = parseInt(counter.getAttribute('data-target'));
            let span = counter.querySelector('.span-sup');
            animateCountUp(counter, target);
        });
    }
});




