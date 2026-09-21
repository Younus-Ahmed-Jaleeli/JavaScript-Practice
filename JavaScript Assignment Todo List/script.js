const inputText = document.querySelector("#main-inp")
const button = document.querySelector("#add-task")
const taskContainer = document.querySelector("#task-container")


button.addEventListener("click", () => {

    const div = document.createElement("div");
    // console.log(div);

    const inpText = document.createElement("input");
    // console.log(inpText);
    inpText.classList.add("new-task-input");
    inpText.value = inputText.value;
    inpText.readOnly = true;

    const editbtn = document.createElement("button");
    // console.log(btn);
    editbtn.innerText = "Edit";

    let isEdit = false;

    editbtn.addEventListener("click", () => {

        if (isEdit === false) {
            isEdit = true;
            inpText.readOnly = false;
            inpText.focus();
            editbtn.innerText = "Save";

        } else {
            
            isEdit = false;
            inpText.readOnly = true;
            editbtn.innerText = "Edit";
        }

    });

    const dltbtn = document.createElement("button");
    // console.log(dltbtn);
    dltbtn.innerText = "Delete";

    dltbtn.addEventListener("click", () => {
        // console.log(Hello);
        dltbtn.parentElement.remove();
    })

    div.insertAdjacentElement("afterbegin", dltbtn);
    div.insertAdjacentElement("afterbegin", editbtn);
    div.insertAdjacentElement("afterbegin", inpText);

    taskContainer.insertAdjacentElement("beforeend", div);

    inputText.value = "";

})