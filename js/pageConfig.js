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
   backButtonElement.style.visibility = (referrer == "" || referrer == document.location)?'hidden':'';
   backButtonElement.onclick = function(){document.location=referrer};
   menuContainer.insertAdjacentElement("afterbegin", backButtonElement);

   let toggleButtonElement = elementFromHtml(toggleButton);
   menuContainer.insertAdjacentElement("beforeend", toggleButtonElement);
   toggleButtonElement.lastElementChild.addEventListener("click", function(){ darkModeToggle();});

   let year = new Date().getFullYear();
   const footerElement = document.createElement("div");
   footerElement.classList.add("footer");
   footerElement.innerHTML = `<a href="./changelog.md" class="version" target="_blank" >v${resumeConfiguration.version}</a> @${year}`;
   resumeContainer.insertAdjacentElement("beforeend", footerElement);


};

const darkModeToggle = function(){
   // let darkModeCheckbox = document.querySelector("#darkmode_toggle");
   // if(darkModeCheckbox.checked){}
   let bodyElement = document.body;
   bodyElement.classList.toggle("dark");
};