const inpuTask = document.getElementById("input-task");
const listContainer = document.getElementById("list-container");
document.getElementById("add").addEventListener("click", function (e) {
  if (e.key === " ") {
    e.preventDefault();
  }
});
function addTask() {
  if (inpuTask.value === "") {
    alert("کار جدید را اضافه کنید");
  }
  if (inpuTask.value.trim() !== "") {
    let li = document.createElement("li");
    li.innerHTML = inpuTask.value.trim();
    listContainer.prepend(li);
    // const longText = inpuTask.value;
    // if (longText > maxLenght) {
    //   const truncatedText = longText.subString(0, maxLenght) + "...";
    //   li.innerHTML = truncatedText;
    // }
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inpuTask.value = "";
  saveData();
}

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
