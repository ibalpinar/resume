import { resume } from './data/resumeData.js';
import { setPageConfiguration } from './pageConfig.js';
import { generateHeader } from './modules/header.js';
import { generateWorkExperience } from './modules/workExperience.js';
import { generateSkills } from './modules/skills.js';
import { generateEducation } from './modules/education.js';
import { generateCourses } from './modules/courses.js';
import { generateInterests } from './modules/interests.js';

setPageConfiguration(resume.data.header.fullName, resume.configuration);
generateHeader(resume.data.header, resume.configuration);
generateWorkExperience(resume.data.workExperience, resume.configuration);
generateSkills(resume.data.skills, resume.configuration);
generateEducation(resume.data.education, resume.configuration);
generateCourses(resume.data.courses, resume.configuration);
generateInterests(resume.data.interests, resume.configuration);
