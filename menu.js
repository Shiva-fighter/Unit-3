var main_div = document.getElementById("main");

var detail = JSON.parse(localStorage.getItem("dishes")) ||  [];

async function showData(){
    var url = "http://www.themealdb.com/api/json/v1/1/categories.php";

    let response = await fetch(url);

    let data = await response.json();

    console.log("data:", data);

    appendProduct(data.categories);
}
showData()

function appendProduct(arr){
    // console.log("arr:", arr);
        arr.forEach(item => {
            let div = document.createElement("div");
            div.style.padding = "30px"

            // let h1 = document.createElement("h1");
            // h1.innerText = "Tasty Dishes";
            // h1.style.color = "teal";
            // h1.style.textDecorationLine = "underline";
            
            

            let image = document.createElement("img");
            image.src = item.strCategoryThumb;
            image.style.height = "200px";
            image.style.width = "250px"

            let p1 = document.createElement("h4");
            p1.innerText = `Dish-Name: ${item.strCategory}`;
            p1.style.paddingTop = "10px"
            p1.style.paddingBottom = "10px"

            let price =  document.createElement("p");
            price =`Dish-Price: ${Math.floor(Math.random() * 500)}`;
            

            let button = document.createElement("button");
            button.style.marginLeft = "15px";
            button.style.marginRight = "15px";
            button.innerText = "Add To Cart";
            button.addEventListener("click", function(){
                addCart();
            });

            let btn = document.createElement("button");
            btn.innerText = "Go To Cart";
            btn.addEventListener("click", function(){
                 window.location.href = "cart.html";
            });

            div.append(image,p1,price,button,btn);
            main_div.append(div);

            function addCart(){
               detail.push(item);

               localStorage.setItem("dishes", JSON.stringify(detail));
            }
        });
}