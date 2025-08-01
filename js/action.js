import { reload } from "./app.js";

const user = document.getElementById("user");
const form = document.getElementById("form");
const formButton = document.getElementById("form__button");
const clearBtn = document.getElementById("clear__button");

// refresh
formButton.addEventListener("click", (e) => {
  e.preventDefault();
  reload();
  clearBtn.classList.remove("hidden");
});

//clear
clearBtn.addEventListener("click", (e) => {
  e.preventDefault();
  user.innerHTML = "";
  clearBtn.classList.add("hidden");
});

// search by name
form["form__input"].addEventListener("input", () => {
  const inputValue = form["form__input"].value.toLocaleLowerCase();
  const name = document.querySelectorAll(".user__name");

  name.forEach((item) => {
    if (
      item.lastElementChild.textContent.toLocaleLowerCase().includes(inputValue)
    ) {
      item.parentElement.classList.remove("hidden");
    } else {
      item.parentElement.classList.add("hidden");
    }
  });
});

// delete user
document.addEventListener("click", (e) => {
  if (e.target.classList[0] === "user__delete--btn") {
    e.target.parentElement.remove();
  }
  if (!user.children.length) {
    clearBtn.classList.add("hidden");
  }
});
