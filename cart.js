var main_box = document.getElementById("main");


    var datas = JSON.parse(localStorage.getItem("dishes"));

    // console.log(datas);

    appendDish(datas);

    function appendDish(array){
        console.log("array:", array);
        array.forEach(element => {
            let div = document.createElement("div");
            div.style.padding = "30px"

            // let h1 = document.createElement("h1");
            //     h1.innerText = "Cart Page";
            //     // h1.style.color = "teal";
            //     h1.style.textDecorationLine = "underline";

            

                let image = document.createElement("img");
                image.src = element.strCategoryThumb;
                image.style.height = "200px";
                image.style.width = "250px"

                let p1 = document.createElement("h3");
                p1.style.paddingBottom = "10px";
                p1.style.paddingTop = "10px";
                p1.innerText =  `Dish-Name: ${element.strCategory}`;

                let price =  document.createElement("p");
                price = `Dish-Price: ${Math.floor(Math.random() * 500)}`;

                let button = document.createElement("button");
                button.style.marginLeft = "100px"
                button.innerText = "Delete";
                button.addEventListener("click", function(){
                    div.remove();
                });

                div.append(image,p1,price,button);
                main_box.append(div);
        });
    }
