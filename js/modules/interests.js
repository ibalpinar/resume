import { elementFromHtml } from '../utils.js';
import { photography } from '../utils.js';
import { book } from '../utils.js';
import { chess } from '../utils.js';
import { basketball } from '../utils.js';
import { swimming } from '../utils.js';
import { travelling } from '../utils.js';
import { science } from '../utils.js';
import { cat } from '../utils.js';

export const generateInterests = function(interestsData, resumeConfiguration){
   const othersAside = document.querySelector(".others");

   const interests = document.createElement("article");
   interests.classList.add("interests");
   othersAside.insertAdjacentElement("beforeend", interests);

   const interestsTitle = document.createElement("h3");
   interestsTitle.classList.add("title");
   interestsTitle.textContent = resumeConfiguration.interestsTitle.toUpperCase();
   interests.insertAdjacentElement("beforeend", interestsTitle);

   // Start of Courses List
   interestsData.forEach((interest) => {
      const interestContainer = document.createElement("div");
      interestContainer.classList.add("container");
      interests.insertAdjacentElement("beforeend", interestContainer);

      const interestIcon = document.createElement("div");
      interestIcon.classList.add("icon");
      interestContainer.insertAdjacentElement("beforeend", interestIcon);

      /**
       * The value of iconName is converted to variables
       * (email, mobile, location, linkedin) imported with
       * eval, and SVG icons in utils are used.
      */

      const iconImage = elementFromHtml(eval(interest.iconName));
      interestIcon.insertAdjacentElement("beforeend", iconImage);

      const interestCompany = document.createElement("div");
      interestCompany.classList.add("name");
      interestCompany.textContent = interest.name;
      interestContainer.insertAdjacentElement("beforeend", interestCompany);
   });
   // end of Courses List
};
