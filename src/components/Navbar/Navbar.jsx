import React from 'react';

import NavItem from './NavItem';

import dashboard from "./Assets/dashboard.png";
import loading from './Assets/loading.png';
import station from './Assets/station.png';
import expenses from './Assets/expenses.png';
import exit from './Assets/exit.png';

function Navbar() {
  const [expanded, setExpanded] = React.useState(false);
  return (
    <div
<<<<<<< HEAD
    className={`w-20 h-screen overflow-hidden bg-gray-800 pt-16 flex flex-col sticky top-0
    transition-all duration-200 ${
      expanded ? "w-60" : ""
    }`}

    onMouseEnter={() => setExpanded(true)}
    onMouseLeave={() => setExpanded(false)}
    
=======
    className={`w-9 md:w-12 h-screen overflow-hidden bg-gray-900 pt-16 flex flex-col sticky top-0
    transition-all duration-200 hover:w-40 md:hover:w-60`}
>>>>>>> MAT-6-Dashboard/-parcel
  >
      <div className="flex-grow">
        <NavItem image={dashboard} path='/dashboard' text="Dashboard"/>
        <NavItem image={loading} path='/loading' text="Loading"/>
        <NavItem image={station} path='/station' text="Station"/>
        <NavItem image={expenses} path='/expenses' text="Expenses" flex="1 0 auto"/>
      </div>
      
      <div className="mb-16">
        <NavItem image={exit} path='/' text="Logout" flex="0 0 auto"/>
      </div>
    </div>
  );
}


export default Navbar