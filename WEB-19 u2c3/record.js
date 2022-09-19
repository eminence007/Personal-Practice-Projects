// fill in javascript code here

let form = document.querySelector("form");

let tbody = document.querySelector("tbody");

form.addEventListener("submit",submitForm);

function submitForm(event) {
    event.preventDefault();

    let obj = {
        name : form.name.value,
        employeeID : form.employeeID.value,
        department : form.department.value,
        exp : +form.exp.value,
        email : form.email.value,
        mbl : form.mbl.value,
    }
    
    let tr = document.createElement("tr");

    let name = document.createElement("td");
    name.innerText = obj.name;
 
    let employeeID = document.createElement("td");
    employeeID.innerText = obj.employeeID;

    let department = document.createElement("td");
    department.innerText = obj.department;

    let exp = document.createElement("td");
    exp.innerText = obj.exp;

    let email = document.createElement("td");
    email.innerText = obj.email;

    let mbl = document.createElement("td");
    mbl.innerText = obj.mbl;

    let role = document.createElement("td");
    if(obj.exp > 5) {
        role.innerText = "Senior";
    }
    else if(obj.exp >= 2) {
        role.innerText = "Junior";
    }
    else {
        role.innerText = "Fresher";
    }
    

    let deleteElement = document.createElement("td");
    deleteElement.innerText = "Delete";
    deleteElement.style.backgroundColor = "red";
    deleteElement.addEventListener("click",function(e){
        e.target.parentNode.remove();
    })

    tr.append(name,employeeID,department,exp,email,mbl,role,deleteElement);
    tbody.append(tr);
}
