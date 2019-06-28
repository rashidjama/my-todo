//cache the DOM
const appInputEl = document.querySelector(".input");

const appUlEl = document.querySelector(".app__ul");
const listItemsEl = document.querySelector(".list__items");



function mainLogic() {
  appInputEl.addEventListener("keypress", function(event) {
    if (event.keyCode === 13) {
      const finalListItems = newListItems(appInputEl.value)
      // appUlEl.appendChild(finalListItems);
      appUlEl.insertBefore(finalListItems, appUlEl.childNodes[0]);
      appInputEl.value = "";
    }
  });
}

mainLogic();

function newListItems(text) {
  let myListItems = document.createElement("li");
  let dele = document.createElement("span");
  dele.setAttribute("class", "fas fa-trash-alt span");
  myListItems.textContent = text;
  myListItems.setAttribute("class", "list__items");
  myListItems.appendChild(dele);
  return myListItems;
}
newListItems();

function toggleDone() {
  appUlEl.addEventListener("click", function(event) {
    if (event.target.classList.contains("list__items")) {
      event.target.classList.toggle("done");
    }
  });
}

toggleDone();

function deleteButton() {
  appUlEl.addEventListener("click", function(event){
    if (event.target.classList.contains("fa-trash-alt")) {
      event.target.parentNode.remove();
    }
  });
}

deleteButton();



