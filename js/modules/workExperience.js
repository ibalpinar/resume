export const generateWorkExperience = function(workExperienceData){
   const headerWork = document.querySelector(".work");

   const workTitle = document.createElement("h3");
   workTitle.classList.add("title");
   workTitle.textContent = workExperienceData.title.toUpperCase();
   headerWork.insertAdjacentElement("beforeend", workTitle);

   // Start of Company List

   const workContainer = document.createElement("div");
   workContainer.classList.add("container");
   headerWork.insertAdjacentElement("beforeend", workContainer);

   const workBox = document.createElement("div");
   workBox.classList.add("box");
   workContainer.insertAdjacentElement("beforeend", workBox);

   const experience = document.createElement("article");
   experience.classList.add("experience");
   workContainer.insertAdjacentElement("beforeend", experience);

   const workHeader = document.createElement("header");
   experience.insertAdjacentElement("beforeend", workHeader);

   const position = document.createElement("h4");
   position.classList.add("position");
   position.textContent = workExperienceData.list[0].position;
   workHeader.insertAdjacentElement("beforeend", position);

   const company = document.createElement("h4");
   company.classList.add("company");
   position.textContent = workExperienceData.list[0].company;
   workHeader.insertAdjacentElement("beforeend", company);

   const durationLocation = document.createElement("h5");
   durationLocation.classList.add("duration_location");
   workHeader.insertAdjacentElement("beforeend", durationLocation);

   const duration = document.createElement("div");
   duration.classList.add("duration");
   duration.textContent = workExperienceData.list[0].start + " - " + workExperienceData.list[0].end;
   durationLocation.insertAdjacentElement("beforeend", duration);

   const location = document.createElement("div");
   location.classList.add("location");
   location.textContent = workExperienceData.list[0].location;
   durationLocation.insertAdjacentElement("beforeend", location);


   /////////////////
   const accomplishments = document.createElement("div");
   accomplishments.classList.add("accomplishments");
   experience.insertAdjacentElement("beforeend", accomplishments);

   const accomplishmentTitle = document.createElement("h5");
   accomplishmentTitle.classList.add("title");
   accomplishments.insertAdjacentElement("beforeend", accomplishmentTitle);

   const accomplishmentList = document.createElement("ul");
   accomplishments.insertAdjacentElement("beforeend", accomplishmentList);

   const accomplishmentItem = document.createElement("li");
   accomplishmentList.insertAdjacentElement("beforeend", accomplishmentItem);

   // Start of Accomplishment List
   const accomplishmentText = document.createElement("div");
   accomplishmentText.textContent = workExperienceData.list[0].accomplishments[0];
   accomplishmentItem.insertAdjacentElement("beforeend", accomplishmentText);
   // end of Accomplishment List

   // End of Company List

};
