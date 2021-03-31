import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import 'moment/locale/pt-br';
import './Header.css';
import mainLogo from './MainLogo.png';

function Header({ fetchDateTime, quotation }) {
  moment.locale('pt-br');

  let currentDate = '';

  currentDate = moment(fetchDateTime).format('LL | HH:mm UTC');

  return (
    <header className="Header">
      <img src={mainLogo} alt="Logo" />
      <div className="HeaderContainer">
        <div className="Quotation">
          Cotação do dia: R$
          {quotation}
        </div>
        <div className="DataOriginInfo">
          Dados de câmbio disponibilizados pela Morningstar.
        </div>
        <div className="DateTime">
          <b>Última atualização: </b>
          {currentDate}
        </div>
      </div>
    </header>
  );
}

Header.defaultProps = {
  quotation: '',
};

Header.propTypes = {
  fetchDateTime: PropTypes.string.isRequired.isRequired,
  quotation: PropTypes.string,
};

export default Header;
