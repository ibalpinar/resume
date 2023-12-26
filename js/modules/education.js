/*
<article class="education">
   <h3 class="title">EDUCATION</h3>
   <div class="school">
      <div class="name">Yıldız Technical University</div>
      <div class="department">BSc, Mathematical Engineering</div>
      <div class="location">Istanbul, Turkey</div>
   </div>
   [LOOP]
</article>
*/
export const generateEducation = function(educationData, resumeConfiguration){
   const othersAside = document.querySelector(".others");

   const educations = document.createElement("article");
   educations.classList.add("education");
   othersAside.insertAdjacentElement("beforeend", educations);

   const educationsTitle = document.createElement("h3");
   educationsTitle.classList.add("title");
   educationsTitle.textContent = resumeConfiguration.educationTitle.toUpperCase();
   educations.insertAdjacentElement("beforeend", educationsTitle);

   // Start of Education List
   educationData.forEach((education) => {
      const school = document.createElement("div");
      school.classList.add("school");
      educations.insertAdjacentElement("beforeend", school);

      const schoolName = document.createElement("div");
      schoolName.classList.add("name");
      schoolName.textContent = education.school;
      school.insertAdjacentElement("beforeend", schoolName);

      const schoolDepartment = document.createElement("div");
      schoolDepartment.classList.add("department");
      schoolDepartment.textContent = education.department;
      school.insertAdjacentElement("beforeend", schoolDepartment);

      const schoolLocation = document.createElement("div");
      schoolLocation.classList.add("location");
      schoolLocation.textContent = education.location;
      school.insertAdjacentElement("beforeend", schoolLocation);
   });
   // end of Education List
};
