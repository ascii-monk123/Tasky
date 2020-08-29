import React from 'react';
import Classes from './Header.module.css';

const Header = (props) => {
  return (
    <nav className="teal lighten-2">
      <div className="nav-wrapper">
        <a className={['brand-logo center', Classes.Main__brand].join(' ')}>
          Tasky
        </a>
        <i
          className="material-icons ml-2"
          style={{
            fontSize: '50px',
          }}
        >
          description
        </i>
      </div>
    </nav>
  );
};

export default Header;
