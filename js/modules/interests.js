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

      const iconImage = document.createElement("img");
      iconImage.src = `./images/${interest.iconName}`;
      interestIcon.insertAdjacentElement("beforeend", iconImage);

      const interestCompany = document.createElement("div");
      interestCompany.classList.add("name");
      interestCompany.textContent = interest.name;
      interestContainer.insertAdjacentElement("beforeend", interestCompany);
   });
   // end of Courses List
};
