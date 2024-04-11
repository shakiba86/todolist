let input = document.querySelector(".input-task");
let list = document.querySelector(".list");
let inputValue = "";
function addTask() {
    
    if (inputValue.trim().length === 0){
        alert("please enter a task");
        input.value = "";
        input.focus();
        return;
    }
    if (inputValue.trim().length < 3){
        alert("please enter at least 3 character");
        input.value = "";
        input.focus();
        return;
    }
    let li = document.createElement("LI");
    let span = document.createElement("span");
    let img = document.createElement("img");
    let div = document.createElement("div");
    let spanCircle = document.createElement("span");
    let i = document.createElement("I");
    img.src="./assets/rubbish.svg";
    span.textContent = inputValue;
    div.appendChild(spanCircle);
    div.appendChild(span);
    div.classList.add("row");
    spanCircle.appendChild(i);
    spanCircle.classList.add("bullet");
    spanCircle.classList.add("fa-solid");
    spanCircle.classList.add("fa-check");
    spanCircle.addEventListener("click",downTask);
    li.appendChild(div);
    li.appendChild(img);
    li.classList.add("row");
    li.classList.add("space-between");
    img.addEventListener("click", removeLi)
    list.appendChild(li);
    input.value = "";
    input.focus();

    function removeLi() {
            li.remove();
        }
    function downTask() {
            spanCircle.classList.toggle("active");
            span.classList.toggle("line-through");
        }
       
}
function addwithEnter(event) {
    if (event.keyCode === 13) {
        addTask();
    }
}

input.addEventListener("keypress", addwithEnter)

input.addEventListener("input", function() {
    inputValue = input.value;
});
