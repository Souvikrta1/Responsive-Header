const btn = document.querySelectorAll(".btn");
const main = document.getElementById("main");
const menu = document.getElementById("menu-bar");
const search = document.querySelector(".text-search");
const productSearch = document.getElementById("product-search");
const user = document.querySelector(".user");

const slidingMenu = document.querySelector(".sliding-menu");

btn.forEach(ele=>{
    ele.addEventListener("mouseover",()=>{
        ele.style.color = "Red"
    })
    ele.addEventListener("mouseout",()=>{
        ele.style.color = "black"
    })
    ele.addEventListener("click",()=>{
        if(ele.classList.contains("home")){
            main.innerHTML = "";
            main.innerHTML = `<img src="https://th.bing.com/th/id/R.d58339de61b5d07fd4db988f8e8a7cdd?rik=1%2fUoNcqqIfTiXw&riu=http%3a%2f%2fthewowstyle.com%2fwp-content%2fuploads%2f2015%2f01%2fnature-images..jpg&ehk=%2fG27fwqbQI%2fi%2bxgGclM1BHuObngpvsp27tc36F59T9c%3d&risl=&pid=ImgRaw&r=0">`
        }
        if(ele.classList.contains("features")){
            main.innerHTML = "";
            main.innerHTML = `<img src="https://th.bing.com/th/id/R.33d02c67b4a6e90abe2d7a58f764edd8?rik=JYmQaMVSULpYQg&riu=http%3a%2f%2fthewowstyle.com%2fwp-content%2fuploads%2f2015%2f01%2fnature-images.jpg&ehk=BNPsuSOUR7ATZ3EpRwxx1xFl7LUbO3tYlu1wFLCBrCE%3d&risl=&pid=ImgRaw&r=0">`
        }
        if(ele.classList.contains("products")){
            main.innerHTML = "";
            main.innerHTML = `<img src="https://th.bing.com/th/id/OIP.0vUoFeFRl_RD9_o33r0b2wHaHa?pid=ImgDet&rs=1">`
        }
        if(ele.classList.contains("categories")){
            main.innerHTML = "";
            main.innerHTML = `<img src="https://th.bing.com/th/id/OIP.91GbTtL7C8X6ODut-e8rZwHaJ4?pid=ImgDet&w=1200&h=1600&rs=1">`
        }
        if(ele.classList.contains("reviews")){
            main.innerHTML = "";
            main.innerHTML = `<img src="https://i.pinimg.com/originals/8b/0d/ac/8b0dac881e05ca4af352fad1c54dc7ef.jpg">`
        }
        if(ele.classList.contains("blogs")){
            main.innerHTML = "";
            main.innerHTML = `<img src="https://render.fineartamerica.com/images/rendered/search/canvas-print/mirror/break/images/artworkimages/medium/1/tybee-island-bridge-tammy-wetzel-canvas-print.jpg">`
        }
        if(ele.classList.contains("search")){
            ele.style.background="transparent";
            search.style.display="flex";
            productSearch.focus();
        }
        if(ele.classList.contains("user-login")){
            user.style.display = "flex";
        }
        if(ele.classList.contains("dynamic-menu")){
            slidingMenu.style.display = "flex";
        }
    })
})

search.addEventListener("focusout",()=>{
    search.style.display = "none";
})
user.addEventListener("focusout",()=>{
    user.style.display = "none";
})
slidingMenu.addEventListener("focusout",()=>{
    slidingMenu.style.display = "none";
})