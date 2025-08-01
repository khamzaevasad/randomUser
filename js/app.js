import { getData, API } from "./request.js";
import { updatedUI } from "./updateUI.js";
import "./mode.js";
import "./action.js";
// load
export const reload = () => {
  getData(API)
    .then((data) => {
      updatedUI(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

document.addEventListener("DOMContentLoaded", reload());
