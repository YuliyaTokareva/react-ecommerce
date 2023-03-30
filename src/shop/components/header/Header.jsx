import React from 'react';
import Logo from '../svg/Logo';
import './header.scss';

const Header = () => {
  return (
    <header className="page-header">
      <div className="page-header__block">
        <div className="page-header__nav">
          <Logo />
          <div className="page-header__name">
            <span>React </span>
            <span>shop</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
