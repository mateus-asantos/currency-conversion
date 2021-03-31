import React from 'react';
import PropTypes from 'prop-types';
import { OPERATION_TYPES, IOF_VALUES } from '../../../constants';

function Results({ formData, USDvalue }) {
  const dolarTotalWithTax = () => (
    formData.dolar + (formData.dolar * (formData.tax / 100))
  );

  const realWithTax = () => {
    if (formData.operation_type === OPERATION_TYPES.MONEY) {
      return (
        dolarTotalWithTax() * (USDvalue + (USDvalue * (IOF_VALUES[formData.operation_type] / 100)))
          .toFixed(2)
      );
    }
    if (formData.operation_type === OPERATION_TYPES.CREDIT_CARD) {
      const total = dolarTotalWithTax() * USDvalue;
      return (
        total + (total * (IOF_VALUES[formData.operation_type] / 100))
          .toFixed(2)
      );
    }
    return 0;
  };

  return (
    <div>
      Dolar sem impostos:
      {formData.dolar}
      <br />
      Taxa do estado:
      {formData.tax}
      <br />
      Dolar com imposto
      {dolarTotalWithTax()}
      <br />
      Real com impostos R$
      {realWithTax()}
      <br />
      IOF:
      {IOF_VALUES[OPERATION_TYPES[formData.operation_type]]}
    </div>
  );
}

Results.propTypes = {
  formData: PropTypes.shape({
    dolar: PropTypes.number.isRequired,
    tax: PropTypes.number.isRequired,
    operation_type: PropTypes.oneOf(
      [OPERATION_TYPES.MONEY, OPERATION_TYPES.CREDIT_CARD],
    ).isRequired,
  }).isRequired,
  USDvalue: PropTypes.number.isRequired,
};

export default Results;
