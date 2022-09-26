// Write All Home  Page Script Here

let form = document.querySelector("form");
form.addEventListener("submit",submitForm);

let movieData = JSON.parse(localStorage.getItem("movie-list")) || [];

function submitForm(event) {
    event.preventDefault();

    if(form.name.value == "" || form.mainActor.value == "" || form.desc.value == "" || form.release.value == "" || form.category.value == "" || form.price.value == "") {
        alert("Please fill all the details before Submit");
    }

    else {
        let details = {
            name : form.name.value,
            mainActor : form.mainActor.value,
            desc : form.desc.value,
            release : form.release.value,
            category : form.category.value,
            price : form.price.value,
        }
        //console.log(details);
        movieData.push(details);
        localStorage.setItem("movie-list",JSON.stringify(movieData))
    }
}