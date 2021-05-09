import * as actions from './actionTypes'

const initialState = {
    name: "",
    email: "",
    address: "",
    phoneNumber: "",
    education: [{ institueName: "", passOutYear: "", degree: "" }],
    project:[{projectName: "", technologies: "", description: "" }],
    experience: [{ companyName: "", numberOfYears: "", designation: "" }],
    skills: "",
}

const contentReducer = (state = initialState, action) => {
    console.log(action)
    let name = action.name;
    let key = action.key;
    switch (action.type) {
        case actions.UPDATE_NAME:return{
            ...state,
            name:action.payload
        }

        case actions.UPDATE_EMAIL:return{
            ...state,
            email:action.payload
        }
        case actions.UPDATE_ADDRESS:return{
            ...state,
            address:action.payload
        }
        case actions.UPDATE_PHONE_NUMBER:return{
            ...state,
            phoneNumber:action.payload
        }
       
        case actions.UPDATE_EDUCATION:
            const education = state.education.map((each, i) => {
                if (i === key) {
                    each[name] = action.payload;
                }
                return each
            })
            return {
                ...state,
                education: education,
            }

        case actions.UPDATE_EXPERIENCE:
            const experience = state.experience.map((each, i) => {
                if (i === key) {
                    each[name] = action.payload;
                }
                return each
            })
            return {
                ...state,
                experience: experience,
            }


        case actions.ADD_EDUCATION:
            const educationCopy = [...state.education];
            educationCopy.push({ institueName: "", passOutYear: "", degree: "" })
            return {
                ...state,
                education: educationCopy,
            }

        case actions.ADD_EXPERIENCE:
            const experienceCopy = [...state.experience];
            experienceCopy.push({ companyName: "", numberOfYears: "", designation: "" });
            return {
                ...state,
                experience: experienceCopy,
            }

        case actions.ADD_SKILLS:
            return{
                ...state,
                skills:action.payload
            }

        case actions.REMOVE_EDUCATION:
            const educationCpy = [...state.education];
            educationCpy.pop();
            return {
                ...state,
                education: educationCpy,
            }

        case actions.REMOVE_EXPERIENCE:
            const experienceCpy = [...state.experience];
            experienceCpy.pop();
            return {
                ...state,
                experience: experienceCpy,
            }

        case actions.ADD_PROJECT:
                const projectCopy = [...state.project];
                projectCopy.push({ projectName: "", technologies: "", description: "" });
                return {
                    ...state,
                    project: projectCopy,
                }
        case actions.UPDATE_PROJECT:
                    const project= state.project.map((each, i) => {
                        if (i === key) {
                            each[name] = action.payload;
                        }
                        return each
                    })
                    return {
                        ...state,
                        project: project,
                    }  
        case actions.REMOVE_PROJECT:
                        const projectCpy = [...state.project];
                        projectCpy.pop();
                        return {
                            ...state,
                            project: projectCpy,
                        }              
        default: return state;

    }

}
export default contentReducer;