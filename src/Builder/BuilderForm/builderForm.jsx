import React, { useEffect, useState } from 'react';
import '../BuilderForm/builderForm.css'
import {updateName} from '../../Redux/index';
import {updateEmail} from '../../Redux/index';
import {updateAddress} from '../../Redux/index';
import {updatePhoneNumber} from '../../Redux/index';
import {updateEducation} from '../../Redux/index';
import {updateExperience} from '../../Redux/index';
import {addExperience} from '../../Redux/index';
import {addEducation} from '../../Redux/index';
import {addSkills} from '../../Redux/index';
import {removeEducation} from '../../Redux/index';
import {removeExperience} from '../../Redux/index';
import {addProject} from '../../Redux/index';
import {updateProject} from '../../Redux/index';
import {removeProject} from '../../Redux/index';
import { connect } from 'react-redux';
import ResumePreview from '../ResumePreview/resumePreview'
import Navigation from '../../Navigation/navigation'



    function BuilderForm (props){

        const [experienceDiv, setExperienceDiv] = useState(['div1']);
        const [projectDiv, setProjectDiv] = useState(['div1']);
        const [educationDiv, setEducationDiv] = useState(['div1']);
        const [showExperienceRemoveButton, setShowExperienceRemoveButton] = useState(false);
        const [showEducationRemoveButton, setShowEducationRemoveButton] = useState(false);
        const [showProjectRemoveButton, setShowProjectRemoveButton] = useState(false);

    
        useEffect((props) => {
            window.scrollTo(0, 0);
    
        }, [])
      

        
        const addEducationDiv = () => {
            props.addEducation();
            setShowEducationRemoveButton(true);
            let eduDivs = [...educationDiv, "newDiv"];
            setEducationDiv(eduDivs);
        }

        const removeEducationDiv = () => {
            props.removeEducation();
            if (educationDiv.length !== 1) {
                let eduDivs = [...educationDiv];
                eduDivs.pop();
                setEducationDiv(eduDivs)
                if (educationDiv.length === 2)
                    setShowEducationRemoveButton(false);
            }
        }
        const addProjectDiv = () => {
            props.addProject();
            setShowProjectRemoveButton(true);
            let projectDivs = [...projectDiv, "newDiv"];
            setProjectDiv(projectDivs);
        }

        const removeProjectDiv = () => {
            props.removeProject();
            if (projectDiv.length !== 1) {
                let projectDivs = [...projectDiv];
                projectDivs.pop();
                setProjectDiv(projectDivs)
                if (projectDiv.length === 2)
                    setShowProjectRemoveButton(false);
            }
        }

        const addExperienceDiv = () => {
            props.addExperience();
            setShowExperienceRemoveButton(true);
            let expDivs = [...experienceDiv, "newDiv"];
            setExperienceDiv(expDivs);
        }

        const removeExperienceDiv = () => {
            props.removeExperience();
            if (experienceDiv.length !== 1) {
                let expDivs = [...experienceDiv];
                expDivs.pop();
                setExperienceDiv(expDivs)
                if (experienceDiv.length === 2)
                    setShowExperienceRemoveButton(false);
            }
        }
        
        
   
        
   
        return(
            <div>
                <Navigation id="create-resume"/>
        <div className="resume-builder-wrapper">
            
         <div className="formContainer" >
                <form  >
               {console.log(props.state.actions)}
                    <div className="form-element">
                        <label className="label">Name</label>
                        <input className="input" value={props.state.actions.name} type="text" placeholder="Enter Name" onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault() }} onChange={(e) => props.updateName(e.target.value)} />
                        
                    </div>

                    <div className="form-element">
                        <label className="label">Email</label>
                        <input className="input" value={props.state.actions.email} type="email" placeholder="Enter Email" onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault() }} onChange={(e) => props.updateEmail(e.target.value)} />
                    </div>

                    <div className="form-element">
                        <label className="label">Phone Number</label>
                        <input className="input" value={props.state.actions.phoneNumber} type="text" placeholder="Phone Number" onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault() }} onChange={(e) => props.updatePhoneNumber(e.target.value)} />
                    </div>

                    <div className="form-element">
                        <label className="label">Address</label>
                         <input className="paragraph-input" value={props.state.actions.address} type="text" placeholder="Enter Address" onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault() }} onChange={(e) => props.updateAddress(e.target.value)} />
                    </div>

                   {educationDiv.map((eduDivs, i) => (
                                <div key={i}>
                    <div className="form-element">
                        <label className="label">Education{i+1}</label>
                        <input className="input" value={props.state.actions.education[i].institueName} type="text" placeholder="Enter Institute Name" name="institueName" onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault() }} onChange={(e) => {
                                        props.updateEducation(i, e.target.value, e.target.name);
                                    }}/>
                        <input className="input" value={props.state.actions.education[i].passOutYear} type="text" placeholder="Enter pass Out Year" name="passOutYear" onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault() }} onChange={(e) => {
                                        props.updateEducation(i, e.target.value, e.target.name);
                                    }}/>  
                        <input className="input" value={props.state.actions.education[i].degree} type="text" placeholder="Enter degree" name="degree" onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault() }} onChange={(e) => {
                                        props.updateEducation(i, e.target.value, e.target.name);
                                    }}/>
                    </div>
                   </div>))}
                   <div className="button-div">
                   {showEducationRemoveButton && (<button id="remove-button"
                                onClick={(e) => {
                                    e.preventDefault();
                                    removeEducationDiv();
                                }
                                }>Remove</button>)}

                            <button id="add-button"
                                onClick={(e) => {
                                    e.preventDefault();
                                    addEducationDiv();
                                }
                                }>Add another degree</button>
                            </div>
                    {projectDiv.map((projectDivs, i) => (
                                <div key={i}>
                    <div className="form-element">
                        <label className="label">Project{i+1}</label>
                        <input className="input" value={props.state.actions.project[i].projectName} type="text" placeholder="Enter Project Name" name="projectName" onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault() }} onChange={(e) => {
                                        props.updateProject(i, e.target.value, e.target.name);
                                    }}/>
                        <input className="input" value={props.state.actions.project[i].technologies} type="text" placeholder="Enter technologies used" name="technologies" onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault() }} onChange={(e) => {
                                        props.updateProject(i, e.target.value, e.target.name);
                                    }}/>  
                        <input className="paragraph-input" value={props.state.actions.project[i].description} type="text" placeholder="Enter project Description" name="description" onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault() }} onChange={(e) => {
                                        props.updateProject(i, e.target.value, e.target.name);
                                    }}/>
                    </div>
                   </div>))}
                   <div className="button-div">
                   {showProjectRemoveButton && (<button id="remove-button"
                                onClick={(e) => {
                                    e.preventDefault();
                                    removeProjectDiv();
                                }
                                }>Remove</button>)}

                            <button id="add-button"

                                onClick={(e) => {
                                    e.preventDefault();
                                    addProjectDiv();
                                }
                                }>Add another project</button>
                            </div>
                        {experienceDiv.map((expDivs, i) => (
                                <div key={i}>
                    <div className="form-element">
                        <label className="label">Experience{i+1}</label>
                        <input className="input" value={props.state.actions.experience[i].companyName} type="text" placeholder="Enter Company Name" name="companyName" onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault() }} onChange={(e) => {
                                        props.updateExperience(i, e.target.value, e.target.name);
                                    }}/>
                        <input className="input" value={props.state.actions.experience[i].numberOfYears} type="text" placeholder="Enter number of years" name="numberOfYears" onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault() }} onChange={(e) => {
                                        props.updateExperience(i, e.target.value, e.target.name);
                                    }}/>  
                        <input className="input" value={props.state.actions.experience[i].designation} type="text" placeholder="Enter Designetion" name="designation" onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault() }} onChange={(e) => {
                                        props.updateExperience(i, e.target.value, e.target.name);
                                    }}/>
                    </div>
                  
                    </div>))}
                    <div className="button-div">
                    {showExperienceRemoveButton && (<button id="remove-button"
                                onClick={(e) => {
                                    e.preventDefault();
                                    removeExperienceDiv();
                                }
                                }>Remove</button>)}

                            <button id="add-button"

                                onClick={(e) => {
                                    e.preventDefault();
                                    addExperienceDiv();
                                }
                                }>Add another degree</button>
                           </div>
                    <div className="form-element">
                        <label className="label">Skills</label>
                        <input className="input" value={props.state.actions.skills} type="text" placeholder="Enter Skills" onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault() }} onChange={(e) => props.addSkills(e.target.value)} />

                        </div>
    
                </form> 
            </div>
        <div className="template-container">
        <ResumePreview details={props} />
        </div>
        </div>
        </div>
        )
    }

    const mapStateToProps = state => {
        return {
            state: state
    
        }
    }

    const mapDispatchToProps = dispatch => {
        return {
            updateName: (e) => dispatch(updateName(e)),
            updateEmail: (e) => dispatch(updateEmail(e)),
            updateAddress: (e) => dispatch(updateAddress(e)),
            updatePhoneNumber: (e) => dispatch(updatePhoneNumber(e)),
            updateEducation: (key, payload, name) => dispatch(updateEducation(key, payload, name)),
            updateExperience: (key, payload, name) => dispatch(updateExperience(key, payload, name)),
            addExperience: () => dispatch(addExperience()),
            addEducation: () => dispatch(addEducation()),
            addSkills: (e) => dispatch(addSkills(e)),
            removeEducation: () => dispatch(removeEducation()),
            removeExperience: () => dispatch(removeExperience()),
            updateProject: (key, payload, name) => dispatch(updateProject(key, payload, name)),
            addProject: () => dispatch(addProject()),
            removeProject: () => dispatch(removeProject()),
        }
    }
   


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BuilderForm);