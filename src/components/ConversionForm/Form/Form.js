import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import './Form.css';
import PropTypes from 'prop-types';
import { OPERATION_TYPES } from '../../../constants';
import buttonIcon from './buttonIcon.svg';

function Form({ submitForm }) {
  const [formData, setFormData] = useState({
    dolar: 0,
    tax: 0,
    operation_type: OPERATION_TYPES.MONEY,
  });

  return (
    <div className="ConversionForm">

      <div className="CurrencyInput">
        Dólar
        <InputMask
          mask="$99.99"
          id="dolar"
          placeholder="$ 1.00"
          onChange={(e) => setFormData({
            ...formData,
            dolar: parseFloat(e.target.value.substring(1)),
          })}
        />
      </div>

      <div className="TaxInput">
        Taxa do estado
        <InputMask
          mask="99.9%"
          id="tax"
          placeholder="0 %"
          min="0"
          max="100"
          onChange={(e) => setFormData({
            ...formData,
            tax: parseFloat(e.target.value),
          })}
        />
      </div>

      <div
        className="Type"
        onChange={(e) => setFormData({ ...formData, operation_type: e.target.value })}
      >
        <div className="typeText">
          Tipo de compra
        </div>

        <label htmlFor="type">
          <input
            name="type"
            id="type"
            type="radio"
            value={OPERATION_TYPES.MONEY}
            defaultChecked
          />
          Dinheiro
        </label>

        <label htmlFor="type">
          <input
            name="type"
            id="type"
            type="radio"
            value={OPERATION_TYPES.CREDIT_CARD}
          />
          Cartão
        </label>
      </div>

      <button type="button" onClick={() => submitForm(formData)}>
        <img src={buttonIcon} alt="icon" />
        Converter
      </button>

    </div>
  );
}

Form.propTypes = {
  submitForm: PropTypes.func.isRequired,
};

export default Form;
