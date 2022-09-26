// Write All `All Movies`  Page Script Here

let tbody = document.querySelector("tbody");

let filter = document.getElementById("filter");
filter.addEventListener("change",filterMovies);

let movieData = JSON.parse(localStorage.getItem("movie-list")) || [];
//console.log(movieData)

let count = document.getElementById("movie-count");
count.innerText = movieData.length;

let buyData = JSON.parse(localStorage.getItem("buy-list")) || [];

displayData(movieData);

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

        let td7 = document.createElement("td");
        td7.innerText = "Buy";
        td7.style.backgroundColor = "green";
        td7.style.color = "white";
        td7.addEventListener("click",function(){
            addToBuy(el);
            delMovieData(movieData,index);
        })

        tr.append(td1,td2,td3,td4,td5,td6,td7);
        tbody.append(tr);

    })
}

function addToBuy(data) {
    //console.log("hurray")
    buyData.push(data);
    localStorage.setItem("buy-list",JSON.stringify(buyData))
}

function delMovieData(data,index) {
    movieData = data.filter(function(el,i){
        return i != index;
    })
    //console.log(movieData);
    localStorage.setItem("movie-list",JSON.stringify(movieData));
    displayData(movieData);
    count.innerText = movieData.length;
}

function filterMovies(event) {
    if(filter.value == ""){
        displayData(movieData);

    }

    else {
        let filterData = movieData.filter(function(el){
            return el.category == filter.value;
         })
         //console.log(filterData)
         displayData(filterData);
    }
}