// Write All `My Movies`  Page Script Here
let tbody = document.querySelector("tbody");

let buyData = JSON.parse(localStorage.getItem("buy-list")) || [];

displayData(buyData);

function displayData(res) {
    tbody.innerHTML = null;
    res.forEach(function(el,index){

        let tr = document.createElement("tr");

        let td1 = document.createElement("td");
        td1.innerText = el.name;

        let td2 = document.createElement("td");
        td2.innerText = el.mainActor;

        let td3 = document.createElement("td");
        td3.innerText = el.desc;

        let td4 = document.createElement("td");
        td4.innerText = el.release;

        let td5 = document.createElement("td");
        td5.innerText = el.category;

        let td6 = document.createElement("td");
        td6.innerText = el.price;

        tr.append(td1,td2,td3,td4,td5,td6);
        tbody.append(tr);

    })
}