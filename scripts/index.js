//store the products array in localstorage as "products"

document.querySelector("form").addEventListener("submit", myFunction);

dataArr = JSON.parse(localStorage.getItem("products")) || [];

function myFunction(e){
    e.preventDefault();

    let type = document.getElementById("type").value;
    let desc = document.getElementById("desc").value;
    let price = document.getElementById("price").value;
    let image = document.getElementById("image").value;


    function brandData(){
        this.type = type;
        this.desc = desc;
        this.price = price;
        this.image = image;
    }

    let data = new brandData()

    console.log(data)

    dataArr.push(data);

    localStorage.setItem("products", JSON.stringify(dataArr));

    // window.location.href = "inventory.html"
}