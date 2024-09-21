import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Layout from './common/Layout';
import AWSSupport from './pages/services/AWSSupport';
import ApplicationDockerisation from './pages/services/ApplicationDockerisation';
import AzureSupport from './pages/services/AzureSupport';
import CloudHosting from './pages/services/CloudHosting';
import Vps from './pages/services/Vps';
import GCPSupport from './pages/services/GCPSupport';
import OnPremises from './pages/services/OnPremises';
import TCLSupport from './pages/services/TCLSupport';
import WebHosting from './pages/services/WebHosting';



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />} >
      <Route index element={<Home />} />     
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services/aws-support" element={<AWSSupport />} />
      <Route path="/services/application-dockerisation" element={<ApplicationDockerisation />} />
      <Route path="/services/azure-support" element={<AzureSupport />} />
      <Route path="/services/cloud-hosting" element={<CloudHosting />} />
      <Route path="/services/gcp-support" element={<GCPSupport />} />
      <Route path="/services/on-premises" element={<OnPremises />} />
      <Route path="/services/tcl-support" element={<TCLSupport />} />
      <Route path="/services/vps" element={<Vps />} />
      <Route path="/services/web-hosting" element={<WebHosting />} />
      
      </Route>
      
    </Routes>

  </BrowserRouter>
  );
}

export default App;
