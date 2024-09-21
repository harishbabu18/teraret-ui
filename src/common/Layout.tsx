import { Outlet, Link } from "react-router-dom";
const Layout = () => {
    return (
      <>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
              <ul>
              <li>
              <Link to="/services/aws-support">AWS Support</Link>
            </li>
            <li>
              <Link to="/services/application-dockerisation">Application Dockerisation</Link>
            </li>
            <li>
              <Link to="/services/azure-support">Azure Support</Link>
            </li>
            <li>
              <Link to="/services/cloud-hosting">Cloud Hosting</Link>
            </li>
            <li>
              <Link to="/services/gcp-support">GCP Support</Link>
            </li>
            <li>
              <Link to="/services/on-premises">On Premises</Link>
            </li>
            <li>
              <Link to="/services/tcl-support">TCL Support</Link>
            </li>
            <li>
              <Link to="/services/vps">VPS</Link>
            </li>
            <li>
              <Link to="/services/web-hosting">Web Hosting</Link>
            </li>
              </ul>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
           
          </ul>
        </nav>
  
        <Outlet />
      </>
    )
  };
  
  export default Layout;