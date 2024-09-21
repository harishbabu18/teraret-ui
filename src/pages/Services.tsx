import React from 'react'
import { Outlet, Link } from "react-router-dom";


type Props = {}

export default function Services({}: Props) {
  return (
    <div><h1>Services</h1>
    <ul>
    <li><Link to="/services/web-hosting">Web Hosting-Small to Medium Business</Link></li>
    <li><Link to="/services/cloud-hosting">Cloud Hosting-Medium to Large Business</Link></li>
    <li><Link to="/services/vps">VPS-Dedicated Resources for Large Business</Link></li>
    <li><Link to="/services/on-premises">On Premises Server Hosting-Dedicated Resources for Large Business</Link></li>
    <li><Link to="/services/aws-support">AWS Support</Link></li>
    <li><Link to="/services/application-dockerisation">ApplicationDockerisation</Link></li>
    <li><Link to="/services/azure-support">AzureSupport</Link></li>
    <li><Link to="/services/gcp-support">GCPSupport</Link></li>
    <li><Link to="/services/tcl-support">TCLSupport</Link></li>    
    </ul>
    </div>
  )
}