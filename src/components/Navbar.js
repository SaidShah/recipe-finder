import React from 'react';

const Navbar = () => (

  <nav className="navbar navbar-expand-lg navbar-dark primary-color">

    <a className="navbar-brand text-dark font-weight-bold" href="/">Recipe Finder</a>

    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
      aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="basicExampleNav">


      <ul className="navbar-nav mr-auto ">
        <li className="nav-item">
          <a className="nav-link text-dark font-weight-bold" href="/recipes">Recipes</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark font-weight-bold" href="/nutrition">Nutrition</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark font-weight-bold" href="/inginfo">Ingredient Info</a>
        </li>

      </ul>

    </div>

  </nav>


);

export default Navbar;
