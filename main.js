// title

/*
<title>Ilker Balpinar</title>
<link rel="stylesheet" href="css/normalize.css" />
<link rel="stylesheet" href="css/style.css" />
*/

/*
      <div class="resumewrapper">
         <header></header>
         <div class="main">
            <section class="content_wrapper"></section>
            <aside class="skills_and_others"></aside>
         </div>
      </div>
*/

/*
wpuld be 7 main method that to add the
main titles such as title, header, work experience
skills, education, courses and interests

addHeader();
addWorkExperience();
addSkills();
addEducation();
addCourses();
addInterests();


fullName
title
objection
photograph
email
mobile
location
linkedin


<div class="right"">
   <div class="contact">
      <div class="info">ilker[at]balpinar[dot]com</div>
      <div class="icon">
         <img class="icon_email" src="images/email.png" />
      </div>
   </div>
   <div class="contact">
      <div class="info">+90-533-***-****</div>
      <div class="icon">
         <img class="icon_mobile" src="images/mobile.png" />
      </div>
   </div>
   <div class="contact">
      <div class="info">Kadıköy, İstanbul, Turkey</div>
      <div class="icon">
         <img class="icon_location" src="images/location.png" />
      </div>
   </div>
   <div class="contact">
      <div class="info">https://www.linkedin/in/ibalpinar</div>
      <div class="icon">
         <img class="icon_linkedin" src="images/linkedin.png" />
      </div>
   </div>
</div>

*/

let editTitle = function(titleData){
   document.title = titleData.trim();
};

let generateContactDiv = function(contactData, iconName){
   const template = document.createElement("template");

   const contact = document.createElement("div");
   contact.classList.add("contact");

   const info = document.createElement("div");
   info.classList.add("info");
   info.textContent = contactData;
   contact.insertAdjacentElement("beforeend", info);

   const icon = document.createElement("div");
   icon.classList.add("info");

   const iconImage = document.createElement("img");
   iconImage.src = `images/${iconName}`;
   icon.insertAdjacentElement("beforeend", iconImage);
   contact.insertAdjacentElement("beforeend", icon);

   template.insertAdjacentElement("beforeend", contact);

   return template;
};

let generateHeader = function(headerData){
   const headerElement = document.querySelector(".header");

   //Header Start
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

   headerRightContainer.insertAdjacentElement("beforeend", generateContactDiv(headerData.email, "email.png"));
   //Header Right End









};

documentReady(function() {
   editTitle(resume.data.header.fullName);
   generateHeader(resume.data.header);
});



