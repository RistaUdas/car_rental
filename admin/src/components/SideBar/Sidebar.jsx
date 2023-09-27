import React from 'react';

import { NavLink } from 'react-router-dom';
import navLinks from "../../assets/dummy-data/navLinks";
import reportLinks from '../../assets/dummy-data/reportLinks';

import "./sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__top"> 
        <h2>
         <span>
           <i class="ri-taxi-line"></i>
          </span>{" "}
          CarRental
        </h2>
      </div>

      <div className="sidebar__content">
        <div className="menu">
          <ul className="nav__list">
            {
              navLinks.map((item, index) => (
                <li className="nav__item" key={index}>
                  <NavLink 
                  to={item.path} 
                  className={(navClass) => navClass.isActive ? 
                    "nav__active nav__link" : "nav__link"}
                  >  
                    <i className={item.icon}></i>  
                    {item.display}
                  </NavLink>

                </li>
              ))
            }

            <div className='report'><h4>Report</h4></div>
            {
              reportLinks.map((item, index) => (
                <li className="nav__item" key={index}>
                  <NavLink 
                  to={item.path} 
                  className={(navClass) => navClass.isActive ? 
                    "nav__active nav__link" : "nav__link"}
                  >  
                    <i className={item.icon}></i>  
                    {item.display}
                  </NavLink>

                </li>
              ))
            }
            
          </ul>
        </div>

        <div className="sidebar__bottom">
          <span>
            Logout <i class="ri-logout-box-r-line"></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
