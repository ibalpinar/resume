const generateContactDiv = function(contactData, iconName){
   const contact = document.createElement("div");
   contact.classList.add("contact");

   const info = document.createElement("div");
   info.classList.add("info");
   info.textContent = contactData;
   contact.insertAdjacentElement("beforeend", info);

   const icon = document.createElement("div");
   icon.classList.add("icon");

   const iconImage = document.createElement("img");
   iconImage.src = `images/${iconName}.png`;
   iconImage.classList.add(`icon_${iconName}`);
   icon.insertAdjacentElement("beforeend", iconImage);
   contact.insertAdjacentElement("beforeend", icon);

   return contact;
};

export const generateHeader = function(headerData){
   const headerElement = document.querySelector(".header");

   //Header Left Start
   const headerBox = document.createElement("div");
   headerBox.classList.add("box");
   headerElement.insertAdjacentElement("beforeend", headerBox);

   const headerLeftContainer = document.createElement("div");
   headerLeftContainer.classList.add("left");
   headerElement.insertAdjacentElement("beforeend", headerLeftContainer);

   const headerFullName = document.createElement("div");
   headerFullName.classList.add("full_name");
   headerFullName.textContent = headerData.fullName;
   headerLeftContainer.insertAdjacentElement("beforeend", headerFullName);

   const headerTitle = document.createElement("div");
   headerTitle.classList.add("title");
   headerTitle.textContent = headerData.title;
   headerLeftContainer.insertAdjacentElement("beforeend", headerTitle);

   const headerObjective = document.createElement("div");
   headerObjective.classList.add("objective");
   headerObjective.textContent = headerData.objective;
   headerLeftContainer.insertAdjacentElement("beforeend", headerObjective);
   //Header Left End

   //Header Middle Start
   const headerMiddleContainer = document.createElement("div");
   headerMiddleContainer.classList.add("middle");
   headerElement.insertAdjacentElement("beforeend", headerMiddleContainer);

   const headerPhotograph = document.createElement("div");
   headerPhotograph.classList.add("photograph");
   headerMiddleContainer.insertAdjacentElement("beforeend", headerPhotograph);

   const headerImage = document.createElement("img");
   headerImage.src = `images/${headerData.photograph}`;
   headerPhotograph.insertAdjacentElement("beforeend", headerImage);

   //Header Middle End

   //Header Right Start
   const headerRightContainer = document.createElement("div");
   headerRightContainer.classList.add("right");
   headerElement.insertAdjacentElement("beforeend", headerRightContainer);

   headerRightContainer.insertAdjacentElement("beforeend", generateContactDiv(headerData.email, "email"));
   headerRightContainer.insertAdjacentElement("beforeend", generateContactDiv(headerData.mobile, "mobile"));
   headerRightContainer.insertAdjacentElement("beforeend", generateContactDiv(headerData.location, "location"));
   headerRightContainer.insertAdjacentElement("beforeend", generateContactDiv(headerData.linkedin, "linkedin"));
   //Header Right End
};
