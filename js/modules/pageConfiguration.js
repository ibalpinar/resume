import { toggleButton } from '../utils.js';

export const setPageConfiguration = function(pageTitleData, resumeConfiguration){
   document.title = pageTitleData.trim();

   const headerElement = document.querySelector(".resume_container");

   const toggleButtonContainer = document.createElement("div");
   toggleButtonContainer.classList.add("toggle_container");
   toggleButtonContainer.innerHTML = toggleButton;
   headerElement.insertAdjacentElement("afterbegin", toggleButtonContainer);
};
