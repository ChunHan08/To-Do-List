const inputField = document.querySelector(".input-field textarea"),
todoLists = document.querySelector(".todoLists"),
pendingNum = document.querySelector(".pending-num"),
clearButton = document.querySelector(".clear-button");
function allTasks() {
  let tasks = document.querySelectorAll(".pending");
  pendingNum.textContent = tasks.length === 0 ? "no" : tasks.length;
}
inputField.addEventListener("keyup", (e) => {
  let inputVal = inputField.value.trim();
  console.log(inputVal);
  if (e.key === "Enter" && inputVal.length > 0) {
    let liTag = ` <li class="list pending" onclick="handleStatus(this)">
          <input type="checkbox" />
          <span class="task">${inputVal}</span>
          <i class="uil uil-trash" onclick="deleteTask(this)"></i>
        </li>`;
        todoLists.insertAdjacentHTML("beforeend", liTag);
        inputField.value = "";
        allTasks();
  }
});
function handleStatus(e) {
  const checkbox = e.querySelector("input");
  checkbox.checked = checkbox.checked ? false : true;
  e.classList.toggle("pending");
  allTasks();
}
function deleteTask() {
  e.parentElement.remove();
}
clearButton.addEventListener("click", () => {
  todoLists.innerHTML = "";
  allTasks()
})