import React from 'react';

const Footer = () => (

  <footer className="page-footer font-small primary-color">

    <div className="container">

      <div className="row">

        <div className="col-md-12 py-5">
          <div className="mb-5 flex-center">


            <a className="fb-ic" href="/">
              <i className="fab fa-facebook-f fa-lg text-dark font-weight-bold mr-md-5 mr-3 fa-2x"> </i>
            </a>

            <a className="tw-ic" href="/">
              <i className="fab fa-twitter fa-lg text-dark font-weight-bold mr-md-5 mr-3 fa-2x"> </i>
            </a>

            <a className="gplus-ic" href="/">
              <i className="fab fa-google-plus-g fa-lg text-dark font-weight-bold mr-md-5 mr-3 fa-2x"> </i>
            </a>

            <a className="li-ic" href="/">
              <i className="fab fa-linkedin-in fa-lg text-dark font-weight-bold mr-md-5 mr-3 fa-2x"> </i>
            </a>

            <a className="ins-ic" href="/">
              <i className="fab fa-instagram fa-lg text-dark font-weight-bold mr-md-5 mr-3 fa-2x"> </i>
            </a>
            <a className="pin-ic" href="/">
              <i className="fab fa-pinterest fa-lg text-dark font-weight-bold fa-2x"> </i>
            </a>
          </div>
        </div>

      </div>

    </div>
    <div id="edamam-badge" data-color="white"></div>
    <div className="footer-copyright text-center py-3 text-dark font-weight-bold">© 2018 Copyright:
      <a href="/" className="text-dark font-weight-bold"> RecipeFinder.com</a>
    </div>

  </footer>
);

export default Footer;
