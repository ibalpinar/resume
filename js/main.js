import { resume } from './data/resumeData.js';
import { editTitle } from './modules/title.js';
import { generateHeader } from './modules/header.js';
import { generateWorkExperience } from './modules/workExperience.js';
import { generateSkills } from './modules/skills.js';
import { generateEducation } from './modules/education.js';
import { generateCourses } from './modules/courses.js';
import { generateInterests } from './modules/interests.js';

editTitle(resume.data.header.fullName);
generateHeader(resume.data.header);
generateWorkExperience(resume.data.workExperience);
generateSkills(resume.data.skills);
generateEducation(resume.data.education);
generateCourses(resume.data.courses);
generateInterests(resume.data.interests);
