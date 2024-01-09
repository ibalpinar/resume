export const generateLanguages = function(languagesData, resumeConfiguration){
   const othersAside = document.querySelector(".others");

   const languages = document.createElement("article");
   languages.classList.add("languages");
   othersAside.insertAdjacentElement("beforeend", languages);

   const languagesTitle = document.createElement("h3");
   languagesTitle.classList.add("title");
   languagesTitle.textContent = resumeConfiguration.languagesTitle.toUpperCase();
   languages.insertAdjacentElement("beforeend", languagesTitle);

   // Start of Languages List
   languagesData.forEach((language) => {
      const languageContainer = document.createElement("div");
      languageContainer.classList.add("container");
      languages.insertAdjacentElement("beforeend", languageContainer);

      const languageName = document.createElement("div");
      languageName.classList.add("name");
      languageName.textContent = language.name;
      languageContainer.insertAdjacentElement("beforeend", languageName);

      const languageLevel = document.createElement("div");
      languageLevel.classList.add("level");
      languageLevel.textContent = language.level;
      languageContainer.insertAdjacentElement("beforeend", languageLevel);
   });
   // end of Languages List
};
