import React from 'react'
import {NavLink} from 'react-router-dom'
import '../Navigation/navigation.css'

function Navigation(props)
{
  return(
 <div className="nav-container">
  <NavLink className="nav-content-right" to='/'>
    ResumeBuilder
  </NavLink>
  {props.id === "home" &&
  <NavLink className="nav-content-left" to='/resume-builder'>
   Create Resume
  </NavLink>}
  {props.id === "create-resume" &&
  <NavLink className="nav-content-left" to='/view-pdf'>
   View Resume
  </NavLink>}
  {props.id === "view-pdf" &&
  <NavLink className="nav-content-left" to='/resume-builder'>
   Edit
  </NavLink>}
 </div>
  )
}
export default Navigation;