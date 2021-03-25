import React from 'react';
import moment from 'moment';
import 'moment/locale/pt-br';
import './Header.css';
import mainLogo from './MainLogo.png';

function Header() {
  moment.locale('pt-br');
  const currentDate = moment().format('LL | HH:mm UTC');

  return (
    <header className="Header">
      <img src={mainLogo} alt="Logo" />
      <div className="HeaderContainer">
        <div className="DateTime">
          {currentDate}
        </div>
        <div className="DataOriginInfo">
          Dados de câmbio disponibilizados pela Morningstar.
        </div>
      </div>
    </header>
  );
}

export default Header;
