import { elementFromHtml } from '../utils.js';
import { backButton } from '../utils.js';
import { toggleButton } from '../utils.js';
import { referrer } from '../utils.js';

export const setPageConfiguration = function(pageTitleData, resumeConfiguration){
   document.title = pageTitleData.trim();

   const resumeContainer = document.querySelector(".resume_container");
   const menuContainer = document.createElement("div");
   menuContainer.classList.add("menu_container");
   resumeContainer.insertAdjacentElement("afterbegin", menuContainer);

   let backButtonElement = elementFromHtml(backButton);
   backButtonElement.style.visibility = (referrer == "")?'hidden':'';
   backButtonElement.onclick = function(){document.location=referrer};
   menuContainer.insertAdjacentElement("afterbegin", backButtonElement);

   const darkmodeToggleContainer = document.createElement("div");
   darkmodeToggleContainer.classList.add("darkmode_toggle_container");
   let toggleButtonElement = elementFromHtml(toggleButton);
   darkmodeToggleContainer.insertAdjacentElement("afterbegin", toggleButtonElement);

   menuContainer.insertAdjacentElement("beforeend", darkmodeToggleContainer);

};
