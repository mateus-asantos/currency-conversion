import React from 'react';
import PropTypes from 'prop-types';
import { OPERATION_TYPES, IOF_VALUES } from '../../../constants';

function Results({ formData, USDvalue, handleBack }) {
  const dolarTotalWithTax = () => (
    formData.dolar + (formData.dolar * (formData.tax / 100))
  );

  const realTotalWithoutTax = () => (
    dolarTotalWithTax() * USDvalue
  );

  const realWithTax = () => {
    if (formData.operation_type === OPERATION_TYPES.MONEY) {
      return (
        dolarTotalWithTax() * (USDvalue + (USDvalue * (IOF_VALUES[formData.operation_type] / 100)))
      );
    }
    if (formData.operation_type === OPERATION_TYPES.CREDIT_CARD) {
      const total = realTotalWithoutTax();
      return (
        total + (total * (IOF_VALUES[formData.operation_type] / 100))
      );
    }
    return 0;
  };

  return (
    <div className="Results">
      <button type="button" onClick={() => handleBack()}>
        Voltar
      </button>
      <div className="ResultTitle">
        O resultado do cálculo é
      </div>
      <div className="ResultValue">
        R$
        {realWithTax().toFixed(2)}
      </div>
      <div className="ResultDetails">
        Compra de &nbsp;
        <b>
          $
          {formData.dolar}
        </b>
        &nbsp;
        (
        R$
        {realTotalWithoutTax().toFixed(2)}
        )
        com taxa de &nbsp;
        <b>
          {formData.tax}
          %
        </b>
        <div className="ResultIOFinfo">
          IOF para compras em&nbsp;
          {formData.operation_type === OPERATION_TYPES.MONEY ? 'dinheiro' : 'cartão de crédito'}
          :&nbsp;
          <b>
            {IOF_VALUES[OPERATION_TYPES[formData.operation_type]]}
            %
          </b>
        </div>
      </div>

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
  handleBack: PropTypes.func.isRequired,
};

export default Results;
