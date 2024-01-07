import { elementFromHtml } from './utils.js';
import { backButton } from './utils.js';
import { toggleButton } from './utils.js';
import { referrer } from './utils.js';

export const setPageConfiguration = function(pageTitleData, resumeConfiguration){
   document.title = pageTitleData.trim();

   const resumeContainer = document.querySelector(".resume_container");
   const menuContainer = document.createElement("div");
   menuContainer.classList.add("menu_container");
   resumeContainer.insertAdjacentElement("afterbegin", menuContainer);

   let backButtonElement = elementFromHtml(backButton);
   // console.log("referrer -> " + referrer);
   // console.log("document.location -> " + document.location);
   backButtonElement.style.visibility = (referrer == "" || referrer == document.location)?'hidden':'';
   backButtonElement.onclick = function(){document.location=referrer};
   menuContainer.insertAdjacentElement("afterbegin", backButtonElement);

   const darkmodeToggleContainer = document.createElement("div");
   darkmodeToggleContainer.classList.add("darkmode_toggle_container");
   let toggleButtonElement = elementFromHtml(toggleButton);
   darkmodeToggleContainer.insertAdjacentElement("afterbegin", toggleButtonElement);

   menuContainer.insertAdjacentElement("beforeend", darkmodeToggleContainer);
   let year = new Date().getFullYear();
   const footerElement = document.createElement("div");
   footerElement.classList.add("footer");
   footerElement.innerHTML = `<a href="./changelog.md" class="version" target="_blank" >v${resumeConfiguration.version}</a> @${year}`;
   resumeContainer.insertAdjacentElement("beforeend", footerElement);
};
