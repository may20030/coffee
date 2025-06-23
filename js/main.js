// =======================start animation===============================================
document.addEventListener("DOMContentLoaded", function () {
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

// =====================end animation===============================
// ======================start login================================
function showLogin(){
let show=document.getElementsByClassName("login-container")[0];
show.classList.toggle("hidden")
}
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    if (email === 'user@gmail.com' && password === '1234') {
        message.style.color = 'green';
        message.textContent = 'Login successful!';
    } else {
        message.style.color = 'red';
        message.textContent = 'the email or password you entered is incorrect please try again';
    }
});
// ===================================end login=========================================
let xhr = new XMLHttpRequest();
xhr.open("GET", "https://dummyjson.com/c/e28f-057e-485e-b3ca");
xhr.send();
xhr.addEventListener("readystatechange", function () {
    if (xhr.readyState == 4) {
        var products = JSON.parse(xhr.response);

        var cont = document.getElementById("left");

        for (let prd of products) {
            let divUp = document.createElement("div");
            divUp.setAttribute("class", 'product-up')
            let label = document.createElement("span");
            label.innerText = "New";
            label.className = "new-label";
            divUp.appendChild(label);
            let img = document.createElement("img");
            img.setAttribute("class", "img-to-product")
            let hr = document.createElement("hr");
            img.src = prd.cover;
            img.addEventListener('mouseover', function () {
                slid = setInterval(function () {
                    img.src = prd.image;
                }, 500)
            })
            img.addEventListener('mouseout', function () {
                clearInterval(slid);
                img.src = prd.cover;
            })
            let h1 = document.createElement("h2");
            h1.innerText = prd.title;
            let p = document.createElement("p");
            p.innerText = prd.price;
            let cartIcon = document.createElement("img");
            cartIcon.setAttribute("class", "cart-bag")
            cartIcon.src = "./images/bag-shopping-solid.svg";
// ================================this is the button one============================
            let btn = document.createElement("h4");
            btn.appendChild(cartIcon);
            btn.append("Add To Cart");
            btn.addEventListener("mouseover", function () {
                cartIcon.style.filter = "brightness(0) invert(1)";
                btn.style.color = "#ffffff";
                btn.style.backgroundColor = "#6c443b";
                btn.style.borderRadius = "2px"
            })
            btn.addEventListener("mouseout", function () {
                cartIcon.style.filter = "brightness(1) invert(0)";
                btn.style.color = "black";
                btn.style.backgroundColor = "#ffffff";
            })
            btn.addEventListener("click", function () {
                localStorage.setItem(`product_${prd.image}`, JSON.stringify({
                    price: prd.price,
                    image: prd.image,
                    title: prd.title
                }));
                updateCartCountSpan();
            })
            cont.appendChild(divUp);
            divUp.appendChild(img);
            divUp.appendChild(h1);
            divUp.appendChild(p);
            divUp.appendChild(hr)
            divUp.appendChild(btn);
        }
    }
})

let xhr2 = new XMLHttpRequest();
xhr2.open("GET", "https://dummyjson.com/c/19d1-780c-41a3-aa3c");
xhr2.send();
xhr2.addEventListener("readystatechange", function () {
    if (xhr2.readyState == 4) {
        let productsRecent = JSON.parse(xhr2.response);

        let cont2 = document.getElementById("recentCoffee");

        for (let prd of productsRecent) {
            let divUp = document.createElement("div");
            divUp.setAttribute("class", 'product-up')
            let label = document.createElement("span");
            label.innerText = "New";
            label.className = "new-label";
            divUp.appendChild(label);
            let img = document.createElement("img");
            img.setAttribute("class", "img-to-product")
            let hr = document.createElement("hr");
            img.src = prd.cover;
            img.addEventListener('mouseover', function () {
                slid = setInterval(function () {
                    img.src = prd.image;
                }, 500)
            })
            img.addEventListener('mouseout', function () {
                clearInterval(slid);
                img.src = prd.cover;
            })
            let h1 = document.createElement("h2");
            h1.innerText = prd.title;
            let p = document.createElement("p");
            p.innerText = prd.price;
            let cartIcon = document.createElement("img");
            cartIcon.setAttribute("class", "cart-bag")
            cartIcon.src = "./images/bag-shopping-solid.svg";

            let btn = document.createElement("h4");
            btn.appendChild(cartIcon);
            btn.append("Add To Cart");
            btn.addEventListener("mouseover", function () {
                cartIcon.style.filter = "brightness(0) invert(1)";
                btn.style.color = "#ffffff";
                btn.style.backgroundColor = "#6c443b";
                btn.style.borderRadius = "2px"
            })
            btn.addEventListener("mouseout", function () {
                cartIcon.style.filter = "brightness(1) invert(0)";
                btn.style.color = "black";
                btn.style.backgroundColor = "#ffffff";
            })
            btn.addEventListener("click", function () {
                localStorage.setItem(`product_${prd.image}`, JSON.stringify({
                    price: prd.price,
                    image: prd.image,
                    title: prd.title
                }));
                updateCartCountSpan();
            })
            cont2.appendChild(divUp);
            divUp.appendChild(img);
            divUp.appendChild(h1);
            divUp.appendChild(p);
            divUp.appendChild(hr)
            divUp.appendChild(btn);
        }
    }
})

let brands = ["./images/logo-1.png", "./images/logo-2.png", "./images/logo-3.png", "./images/logo-4.png"];
let links = ["https://www.bata.com/in/brands/bata-red-label/", "https://www.adidas.com.eg/en", "https://www.apps.disneyplus.com/eg/onboarding", "https://servis.pk/?srsltid=AfmBOorzPPji2zMYwJYOlwpgPZyut6zZ5YWmZDBSp5I-NQcldByX-zoA"]
for (let i = 0; i < brands.length; i++) {
    let cont = document.getElementsByClassName("brand")[0];
    let a = document.createElement("a");
    let img = document.createElement("img");
    a.href = links[i]
    img.src = brands[i];
    cont.appendChild(a);
    a.appendChild(img)
    img.addEventListener("mouseover", function () {
        img.style.filter = "grayscale(0%)"
    })
    img.addEventListener("mouseout", function () {
        img.style.filter = "grayscale(100%)"
    })
}

let xhr3 = new XMLHttpRequest();
xhr3.open("GET", "https://dummyjson.com/c/992c-0052-41e4-9d2b");
xhr3.send();
xhr3.addEventListener("readystatechange", function () {
    if (xhr3.readyState == 4) {
        let productsRecent = JSON.parse(xhr3.response);

        let cont2 = document.getElementById("coffeeCollection");

        for (let prd of productsRecent) {
            let divUp = document.createElement("div");
            divUp.setAttribute("class", 'product-up')
            let label = document.createElement("span");
            label.innerText = "New";
            label.className = "new-label";
            divUp.appendChild(label);
            let img = document.createElement("img");
            img.setAttribute("class", "img-to-product")
            let hr = document.createElement("hr");
            img.src = prd.cover;
            img.addEventListener('mouseover', function () {
                slid = setInterval(function () {
                    img.src = prd.image;
                }, 500)
            })
            img.addEventListener('mouseout', function () {
                clearInterval(slid);
                img.src = prd.cover;
            })
            let h1 = document.createElement("h2");
            h1.innerText = prd.title;
            let p = document.createElement("p");
            p.innerText = prd.price;
            let cartIcon = document.createElement("img");
            cartIcon.setAttribute("class", "cart-bag")
            cartIcon.src = "./images/bag-shopping-solid.svg";

            let btn = document.createElement("h4");
            btn.appendChild(cartIcon);
            btn.append("Add To Cart");
            btn.addEventListener("mouseover", function () {
                cartIcon.style.filter = "brightness(0) invert(1)";
                btn.style.color = "#ffffff";
                btn.style.backgroundColor = "#6c443b";
                btn.style.borderRadius = "2px"
            })
            btn.addEventListener("mouseout", function () {
                cartIcon.style.filter = "brightness(1) invert(0)";
                btn.style.color = "black";
                btn.style.backgroundColor = "#ffffff";
            })
            btn.addEventListener("click", function () {
                localStorage.setItem(`product_${prd.image}`, JSON.stringify({
                    price: prd.price,
                    image: prd.image,
                    title: prd.title
                }));
                updateCartCountSpan();
            })
            cont2.appendChild(divUp);
            divUp.appendChild(img);
            divUp.appendChild(h1);
            divUp.appendChild(p);
            divUp.appendChild(hr)
            divUp.appendChild(btn);
        }
    }
})


function updateCartCountSpan() {
    let count = 0;
    for (let key in localStorage) {
        if (key.startsWith("product_")) {
            count++;
        }
    }
    document.getElementById("cart-count-span").textContent = count;
}
updateCartCountSpan();
