/*
<article class="skills">
   <h3 class="title">SKILLS</h3>
   <div class="container">
      <div class="skill">Effective Hiring</div>
      [LOOP]
   </div>
</article>
*/
export const generateSkills = function(skillsData, resumeConfiguration){
   const othersAside = document.querySelector(".others");

   const skills = document.createElement("article");
   skills.classList.add("skills");
   othersAside.insertAdjacentElement("beforeend", skills);

   const skillsTitle = document.createElement("h3");
   skillsTitle.classList.add("title");
   skillsTitle.textContent = resumeConfiguration.skillsTitle.toUpperCase();
   skills.insertAdjacentElement("beforeend", skillsTitle);

   const skillsContainer = document.createElement("div");
   skillsContainer.classList.add("container");
   skills.insertAdjacentElement("beforeend", skillsContainer);


   // Start of Skills List
   skillsData.forEach((skillText) => {
      const skill = document.createElement("div");
      skill.classList.add("skill");
      skill.textContent = skillText;
      skillsContainer.insertAdjacentElement("beforeend", skill);
   });
   // end of Skills List
};
