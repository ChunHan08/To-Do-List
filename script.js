const inputField = document.querySelector(".input-field textarea"),
todoLists = document.querySelector(".todoLists"),
pendingNum = document.querySelector(".pendingNum"),
clearButton = document.querySelector(".clear-button");
inputField.addEventListener("keyup", (e) => {
  let inputVal = inputField.value.trim();
  console.log(inputVal);
  if (e.key === "Enter" && inputVal.length > 0) {
    let liTag = ` <li class="list">
          <input type="checkbox" />
          <span class="task">Remember to be sigma.</span>
          <i class="uil uil-trash"></i>
        </li>`;
        todoLists.insertAdjacentElement("beforeend", liTag);
  }
});