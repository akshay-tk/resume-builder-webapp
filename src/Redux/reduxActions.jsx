import * as action from './actionTypes'


export const updateName = (payload) => {
    return {
        type:action.UPDATE_NAME,
        payload,
    }
}

export const updateEmail = (payload) => {
    return {
        type: action.UPDATE_EMAIL,
        payload,
    }
}

export const updateAddress = (payload) => {
    return {
        type: action.UPDATE_ADDRESS,
        payload,
    }
}

export const updatePhoneNumber = (payload) => {
    return {
        type: action.UPDATE_PHONE_NUMBER,
        payload,
    }
}

export const addEducation = () => {
    return{
        type: action.ADD_EDUCATION,
        
    }   
}

export const updateEducation = (key,payload,name) => {
    return {
        type: action.UPDATE_EDUCATION,
        key,
        name,
        payload    
    }
}

export const removeEducation = () => {
    return{
        type: action.REMOVE_EDUCATION,
    }   
}

export const addProject = () => {
    return{
        type: action.ADD_PROJECT,
    }   
}

export const updateProject = (key,payload,name) => {
    return {
        type: action.UPDATE_PROJECT,
        key,
        name,
        payload
    }
}

export const removeProject = () => {
    return{
        type: action.REMOVE_PROJECT,
    }   
}

export const addExperience = () => {
    return{
        type: action.ADD_EXPERIENCE,
    }   
}

export const updateExperience = (key,payload,name) => {
    return {
        type: action.UPDATE_EXPERIENCE,
        key,
        name,
        payload
    }
}

export const removeExperience = () => {
    return{
        type: action.REMOVE_EXPERIENCE,
    }   
}

export const addSkills = (payload) => {
    return {
        type: action.ADD_SKILLS,
        payload,
    }
}










