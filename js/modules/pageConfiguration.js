import { toggleButton } from '../utils.js';
import { referrer } from '../utils.js';

export const setPageConfiguration = function(pageTitleData, resumeConfiguration){
   document.title = pageTitleData.trim();

   const resumeContainer = document.querySelector(".resume_container");

   const menuContainer = document.createElement("div");
   menuContainer.classList.add("menu_container");
   resumeContainer.insertAdjacentElement("afterbegin", menuContainer);

   const backLinkContainer = document.createElement("div");
   backLinkContainer.classList.add("back_link");
   menuContainer.insertAdjacentElement("afterbegin", backLinkContainer);

   if(referrer != ""){
      const backLink = document.createElement("a");
      backLink.innerHTML = "Back";
      backLink.href = referrer;
      backLinkContainer.insertAdjacentElement("afterbegin", backLink);
   }

   const darkmodeToggleContainer = document.createElement("div");
   darkmodeToggleContainer.classList.add("darkmode_toggle_container");
   darkmodeToggleContainer.innerHTML = toggleButton;
   menuContainer.insertAdjacentElement("beforeend", darkmodeToggleContainer);
};
