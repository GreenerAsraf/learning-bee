import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Footer = () => {
    return (
        <div>
<footer className="text-center text-white" style={{backgroundColor: 'black', color:'white'}}>
  
  <div className="container pt-4">
    {/* <!-- Section: Social media --> */}
    <section className="mb-4">
      {/* <!-- Facebook --> */}
      <a
        className="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        >
        
            <i className="fab fa-facebook-f"></i
      ></a>

      {/* <!-- Twitter --> */}
      <a
        className="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i className="fab fa-twitter"></i
      ></a>

      {/* <!-- Google --> */}
      <a
        className="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i className="fab fa-google"></i
      ></a>

      {/* <!-- Instagram --> */}
      <a
        className="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i className="fab fa-instagram"></i
      ></a>

      {/* <!-- Linkedin --> */}
      <a
        className="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i className="fab fa-linkedin"></i
      ></a>
      {/* <!-- Github --> */}
      <a
        className="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i className="fab fa-github"></i
      ></a>
    </section>
    {/* <!-- Section: Social media --> */}
  </div>
  
  <div className="text-center text-dark p-3" style={{backgroundColor: 'steelblue'}}>
    © 2022 Copyright:
    <a className="text-dark" href="https://mdbootstrap.com/">Programming Bee</a>
  </div>
 
</footer>
        </div>
    );
};

export default Footer;