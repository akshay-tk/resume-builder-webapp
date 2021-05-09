import React from 'react';
import './resumePreview.css';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faHome,faFilePdf} from '@fortawesome/free-solid-svg-icons';
import Pdf from "react-to-pdf";

function ResumePreview(details) {
    const phone = <FontAwesomeIcon icon={faPhone} />
    const envelope = <FontAwesomeIcon icon={faEnvelope} />
    const home = <FontAwesomeIcon icon={faHome} />
    const pdf = <FontAwesomeIcon icon={faFilePdf} />
    const ref = React.createRef();
    console.log(details.state.actions.skills)
    return(
        <div className="pdf-button-container">
             {details.id ==="view" && 
            <Pdf targetRef={ref} filename="resume.pdf">
                {({ toPdf }) =><i id="pdf-icon" onClick={toPdf} aria-hidden="true">{pdf}</i>}
            </Pdf>}
             <div ref={ref} className='resume-template-main-container'>
             <div className='details-container'>
                    <h1>{details.state.actions.name}</h1>
                    {details.state.actions.address && <h4>{home} {details.state.actions.address}</h4>}
                    {details.state.actions.email && <h4>{envelope} {details.state.actions.email}</h4>}
                    {details.state.actions.phoneNumber && <h4>{phone} {details.state.actions.phoneNumber}</h4>}
                </div>
                <div className="resume-container">
                    {details.state.actions.education[0].institueName &&
                    <div className="objective-container">
                        <div className="title-heading">OBJECTIVE </div>
                        <div  className="objective-content">Looking for a challenging career which demands the best of my professional ability in terms of technical and analytical skills and helps me broadening and enhancing my skills and knowledge</div>

                    </div>
                       
                    }
                    {details.state.actions.education[0].institueName &&
                    <div className="education-container">
                        <div className="title-heading">EDUCATION</div>
                        {details.state.actions.education.map((each, i) => (
                        <div className="education-body">
                             <div>Pass Out:{each.passOutYear}</div>
                             <div className="education-body-right">
                                 <div>{each.institueName}</div>
                                 <div>{each.degree}</div>
                             </div>
                        </div>
                        ))}
                    </div>
                       
                    }
                   

                    

                   {details.state.actions.project[0].projectName &&
                    <div className="project-container">
                    <div className="title-heading">PROJECTS</div>
                    {details.state.actions.project.map((each, i) => (
                       <div className="project-body">
                          <div className="project-name">{each.projectName}</div>
                          <div>Technologies:{each.technologies}</div>
                          <div className="description-box">  {each.description}</div>
                  </div>))}
                   </div>
                   
                    
                    }
                     {details.state.actions.experience[0].companyName &&
                    <div className="education-container">
                        <div className="title-heading">EXPERIENCE</div>
                        {details.state.actions.experience.map((each, i) => (
                        <div className="education-body">
                             <div>Number of years:{each.numberOfYears}</div>
                             <div className="education-body-right">
                                 <div className="company-name">{each.companyName}</div>
                                 <div className="designation-text">{each.designation}{console.log(details.state.actions.skills)}</div>
                             </div>
                        </div>
                        ))}
                        
                
                        
                    </div>
                       
                    }
                    {details.state.actions.skills &&
                    <div className="objective-container">
                        <div className="title-heading">SKILLS</div>
                        <div>{details.state.actions.skills}</div>

                    </div>
                       
                    }
                    
                </div>
             </div>

       
  </div>   
    )}
    const mapStateToProps = state => {
        return {
            state: state
        }
    }
    export default connect(
        mapStateToProps
    )(ResumePreview);