var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
    return input.value.length;
}

function createListElement(){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";

    var button = document.createElement('button');
    button.appendChild(document.createTextNode("Delete"));
    li.appendChild(button);

    addDoneClass();
    deleteListAfterClick();
}

function addListAfterClick() {
    if(inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if(inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}

button.addEventListener("click", addListAfterClick); //callback function
input.addEventListener("keypress", addListAfterKeypress);


// EXERSCISE //
// add .done to each list once clickon
var li = document.getElementsByTagName("li");
function toggleClass(){
    this.classList.toggle('done');
}

function addDoneClass(){
    for( i=0; i<li.length; i++){
        li[i].addEventListener('click', toggleClass)
    }
}

addDoneClass();

// delete list items once clickon the delete button
function buttonDelete() {
    this.parentNode.remove();
}

function deleteListAfterClick(){
    var buttons = document.querySelectorAll('li button');
	for( i=0; i<buttons.length; i++){
	buttons[i].addEventListener('click', buttonDelete);
	}
}

deleteListAfterClick();


