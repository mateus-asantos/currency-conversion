import React, { useState } from 'react';
import './Form.css';
import PropTypes from 'prop-types';
import { OPERATION_TYPES } from '../../../constants';

function Form({ submitForm }) {
  const [formData, setFormData] = useState({
    dolar: 0,
    tax: 0,
    operation_type: OPERATION_TYPES.MONEY,
  });

  return (
    <div className="ConversionForm">
      <label htmlFor="dolar">
        Dólar
        <input
          type="number"
          id="dolar"
          onChange={(e) => setFormData({ ...formData, dolar: parseFloat(e.target.value) })}
        />
      </label>

      <label htmlFor="tax">
        Taxa do estado
        <input
          type="number"
          id="tax"
          onChange={(e) => setFormData({ ...formData, tax: parseFloat(e.target.value) })}
        />
      </label>

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

      <input type="button" value="Converter" onClick={() => submitForm(formData)} />

    </div>
  );
}

Form.propTypes = {
  submitForm: PropTypes.func.isRequired,
};

export default Form;
