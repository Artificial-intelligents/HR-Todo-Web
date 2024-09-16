const todoTitle = [];
const todoPara = [];

const todoInput = document.querySelector(".todoInput");
const todoTextArea = document.querySelector(".todoText");
// const heading = document.querySelector("#heading");
// const para = document.querySelector("#paragraph");
const todoContainer = document.querySelector(".todos-align");

const deleteTodo = (index) => {
    console.log(index);
    todoTitle.splice(index,1);
    todoPara.splice(index,1);
    renderData();
}

// console.log(todoTitle);
const renderData = () => {
    todoContainer.innerHTML = "";
    let i = 0;
for (const ind in todoTitle) {
    // heading.textContent = titles;
    todoContainer.innerHTML = `<div class="jumbotron myWidth">
                <h4 class="text-center text-uppercase text-teal " id="heading">${todoTitle[ind]}</h4>
                <p class="mt-3 text-center mb-4" id="paragraph">${todoPara[ind]}</p>
                <div class="buttons d-flex justify-content-center">
                <button class="btn btn-warning text-secondary  mx-auto " style="width: 30%;">Edit</button>
                <button onclick="deleteTodo(${i})" class="btn btn-danger   mx-auto " style="width: 30%;">Delete</button>
                </div>
        </div>` + todoContainer.innerHTML;
        // for (const paras of todoPara) {
        //     console.log(paras) ; 
        //     const para = document.querySelector("#paragraph");
        //     para.textContent = paras;
        // }
        i = i + 1;
}
}


const getValue = () => {
    const value1 = todoInput.value;
    const value2 = todoTextArea.value;

    if(value1 === "" || value2 === ""){
        alert("Your enter wrong format");
        return
    }
    todoTitle.push(value1);
    todoPara.push(value2);
    todoInput.value = "";
    todoTextArea.value = "";
    // console.log(todoTitle);
    // console.log(todoPara);
    renderData();


}