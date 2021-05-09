import React from 'react'
import './view-pdf.css'
import Navigation from '../Navigation/navigation'
import ResumePreview from '../Builder/ResumePreview/resumePreview'




function ViewPdf(props){
    return(
        <div className="view-resume-container">
            <Navigation id="view-pdf"/>
            <div className="resume-template-container">
               <ResumePreview details={props} id="view"/>
            </div>

        </div>
    )
}
export default ViewPdf;