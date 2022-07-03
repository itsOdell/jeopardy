"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateTier = exports.validateProject = void 0;
function validateProject(project) {
    if (project.projectName !== undefined && project.projectName !== "" && project.hasOwnProperty("projectName") && project.projectName !== null && project.hasOwnProperty("projectData") && project.projectData !== undefined && project.projectData !== "" && project.projectData !== null)
        return true;
    return false;
}
exports.validateProject = validateProject;
function validateTier(tier, user, projectType) {
    var data = {
        "free": {
            projects: 5,
            privateProjects: 5
        },
        "rookie": {
            projects: 20,
            privateProjects: 20
        }
    };
    if (user[projectType].length >= data[tier][projectType])
        return false;
    return true;
}
exports.validateTier = validateTier;
