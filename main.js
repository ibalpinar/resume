documentReady(function() {
   editTitle(resume.data.header.fullName);
   generateHeader(resume.data.header);
   generateWorkExperience(resume.data.workExperience);
   generateSkills(resume.data.skills);
   generateCourses(resume.data.courses);
   generateInterests(resume.data.interests);
});
