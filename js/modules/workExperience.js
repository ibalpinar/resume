export const generateWorkExperience = function(workExperienceData, resumeConfiguration){
   const workSection = document.querySelector(".work");

   const workTitle = document.createElement("h3");
   workTitle.classList.add("title");
   workTitle.textContent = resumeConfiguration.workExperienceTitle.toUpperCase();
   workSection.insertAdjacentElement("beforeend", workTitle);

   // Start of Company List
   workExperienceData.forEach((workExperience) => {
      const workContainer = document.createElement("div");
      workContainer.classList.add("container");
      workSection.insertAdjacentElement("beforeend", workContainer);

      const workBox = document.createElement("div");
      workBox.classList.add("box");
      workContainer.insertAdjacentElement("beforeend", workBox);

      // Section of Company
      const experience = document.createElement("article");
      experience.classList.add("experience");
      workContainer.insertAdjacentElement("beforeend", experience);

      const workHeader = document.createElement("header");
      experience.insertAdjacentElement("beforeend", workHeader);

      const position = document.createElement("h4");
      position.classList.add("position");
      position.textContent = workExperience.position;
      workHeader.insertAdjacentElement("beforeend", position);

      const company = document.createElement("h4");
      company.classList.add("company");
      company.textContent = workExperience.company;
      workHeader.insertAdjacentElement("beforeend", company);

      const durationLocation = document.createElement("h5");
      durationLocation.classList.add("duration_location");
      workHeader.insertAdjacentElement("beforeend", durationLocation);

      const duration = document.createElement("div");
      duration.classList.add("duration");
      duration.textContent = workExperience.start + " - " + workExperience.end;
      durationLocation.insertAdjacentElement("beforeend", duration);

      const location = document.createElement("div");
      location.classList.add("location");
      location.textContent = workExperience.location;
      durationLocation.insertAdjacentElement("beforeend", location);

      // Section of Accomplishment
      const accomplishments = document.createElement("div");
      accomplishments.classList.add("accomplishments");
      experience.insertAdjacentElement("beforeend", accomplishments);

      const accomplishmentTitle = document.createElement("h5");
      accomplishmentTitle.classList.add("title");
      accomplishmentTitle.textContent = resumeConfiguration.accomplishmentsTitle
      accomplishments.insertAdjacentElement("beforeend", accomplishmentTitle);

      const accomplishmentList = document.createElement("ul");
      accomplishments.insertAdjacentElement("beforeend", accomplishmentList);

      // Start of Accomplishment List
      workExperience.accomplishments.forEach((accomplishment) => {
         const accomplishmentItem = document.createElement("li");
         accomplishmentList.insertAdjacentElement("beforeend", accomplishmentItem);

         const accomplishmentText = document.createElement("div");
         accomplishmentText.textContent = accomplishment
         accomplishmentItem.insertAdjacentElement("beforeend", accomplishmentText);
      });
      // end of Accomplishment List
   });
   // End of Company List
};
