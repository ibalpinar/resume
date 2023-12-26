export const generateCourses = function(coursesData, resumeConfiguration){
   const othersAside = document.querySelector(".others");

   const courses = document.createElement("article");
   courses.classList.add("courses");
   othersAside.insertAdjacentElement("beforeend", courses);

   const coursesTitle = document.createElement("h3");
   coursesTitle.classList.add("title");
   coursesTitle.textContent = resumeConfiguration.coursesTitle.toUpperCase();
   courses.insertAdjacentElement("beforeend", coursesTitle);

   // Start of Courses List
   coursesData.forEach((course) => {
      const courseContainer = document.createElement("div");
      courseContainer.classList.add("container");
      courses.insertAdjacentElement("beforeend", courseContainer);

      const courseName = document.createElement("div");
      courseName.classList.add("name");
      courseName.textContent = course.name;
      courseContainer.insertAdjacentElement("beforeend", courseName);

      const courseCompany = document.createElement("div");
      courseCompany.classList.add("company");
      courseCompany.textContent = course.company;
      courseContainer.insertAdjacentElement("beforeend", courseCompany);
   });
   // end of Courses List
};
