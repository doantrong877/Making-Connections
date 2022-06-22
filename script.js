function changeName(){
    document.getElementById("name").innerText= "Trong Doan"
}
function removed(e){
    var num = Number(document.querySelector(".badge-1").innerText) - 1;
    console.log(Number((document.querySelector(".badge-1").innerText)));
    document.querySelector(".badge-1").innerText = num;
    e.closest(".card-list-item").remove();
    console.log(e.closest(".card-list-item"));

}

function add(e){

    var num = Number((document.querySelector(".badge-2").innerText)) + 1;
    document.querySelector(".badge-2").innerText = num;
    console.log(e.closest(".card-list-item").firstElementChild);
    var node = document.createElement("li");
    node.appendChild(e.closest(".card-list-item").firstElementChild);
    document.querySelector(".add-connection").appendChild(node);
    removed(e);
}