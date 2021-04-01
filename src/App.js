import React, { useState, useEffect } from 'react';
import './App.css';
import ConversionForm from './components/ConversionForm/ConversionForm';
import Header from './components/Header/Header';
import { QUOTATION_URL } from './constants';

function App() {
  const [quotationRate, setQuotationRate] = useState();

  // Getting info from the API
  const fetchQuotation = async () => {
    try {
      const result = await fetch(QUOTATION_URL);

      if (result.status === 200) {
        const data = await result.json();
        setQuotationRate(data.USD);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchQuotation();
  }, []);

  return (
    <div className="App">
      <Header
        quotation={quotationRate ? parseFloat(quotationRate.ask).toFixed(2) : 'loading'}
        fetchDateTime={quotationRate ? quotationRate.create_date : 0}
      />
      <ConversionForm
        USDvalue={quotationRate ? parseFloat(quotationRate.ask) : 0}
      />

    </div>
  );
}

export default App;
