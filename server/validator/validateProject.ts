interface Column {
    "part": string,
    "one": {
        "question": string,
        "value": number,
        "answer": string
    },
    "two": {
        "question": string,
        "value": number,
        "answer": string
    },
    "three": {
        "question": string,
        "value": number,
        "answer": string
    },
    "four": {
        "question": string,
        "value": number,
        "answer": string
    },
    "five": {
        "question": string,
        "value": number,
        "answer": string
    }
}
interface tierData {
    free: {
            projects: number,
            privateProjects: number
        },
        rookie: {
            projects: number,
            privateProjects: number
        }
}
export interface Project {
    "projectName": string,
    "projectData": [Column, Column, Column, Column, Column]
}
// export interface userInterface {
//     username: string,
//     email: string,
//     password: string,
//     tier: string,
//     profilePicture?: string,
//     projects: Project[],
//     privateProjects: Project[]
// }

export function validateProject(project): boolean {
    if (project.projectName !== undefined && project.projectName !== "" && project.hasOwnProperty("projectName") && project.projectName !== null && project.hasOwnProperty("projectData") && project.projectData !== undefined && project.projectData !== "" && project.projectData !== null) return true;
    return false;
}

export function validateTier(tier, user, projectType): boolean {
    const data: tierData = {
        "free": {
            projects: 5,
            privateProjects: 5
        },
        "rookie": {
            projects: 20,
            privateProjects: 20
        }
    }
    if (user[projectType].length >= data[tier][projectType]) return false;
    return true;
}
