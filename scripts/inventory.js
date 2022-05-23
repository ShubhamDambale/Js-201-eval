let catchData = JSON.parse(localStorage.getItem("products")) || [];


catchData.map(function(elem, index){


let image = document.createElement("img");
image.src = elem.image;

let type = document.createElement("P");
type.innerText = elem.type;

let desc = document.createElement("p");
desc.innerText = elem.desc;

let price = document.createElement("p");
price.innerText = elem.price;


let removebtn = document.createElement("button");
removebtn.innerText = "Remove";
removebtn.addEventListener("click", function(){

    remove(elem, index);
});

let div = document.createElement("div");
div.append(image,type,desc,price,removebtn);

document.querySelector("#all_products").append(div);

});

function remove(elem,index){

    catchData.splice(index, 1);

    localStorage.setItem("products", JSON.stringify(catchData));

    window.location.reload();

}