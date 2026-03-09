import React, { useState, useEffect } from 'react';
import './InheritanceCalculator.css';

const InheritanceCalculator = () => {
  const [amount, setAmount] = useState(250000);
  const [spending, setSpending] = useState(2000);
  const [growth, setGrowth] = useState(5);
  const [years, setYears] = useState(0);

  const calculateLongevity = () => {
    let currentBalance = amount;
    let months = 0;
    const monthlyGrowth = growth / 100 / 12;

    while (currentBalance > 0 && months < 1200) { // Cap at 100 years
      currentBalance = currentBalance * (1 + monthlyGrowth) - spending;
      months++;
      if (currentBalance <= 0) break;
    }

    setYears(Math.floor(months / 12));
  };

  useEffect(() => {
    calculateLongevity();
  }, [amount, spending, growth]);

  return (
    <div className="calc-container">
      <div className="calc-header">
        <h3>Inheritance Longevity Projector</h3>
        <p>See how long your wealth will last based on your spending and growth assumptions.</p>
      </div>

      <div className="calc-grid">
        <div className="calc-inputs">
          <div className="input-group">
            <label>Inheritance Amount ($)</label>
            <input 
              type="number" 
              value={amount} 
              onChange={(e) => setAmount(Number(e.target.value))} 
            />
            <input 
              type="range" 
              min="10000" 
              max="5000000" 
              step="10000" 
              value={amount} 
              onChange={(e) => setAmount(Number(e.target.value))} 
            />
          </div>

          <div className="input-group">
            <label>Monthly Spending ($)</label>
            <input 
              type="number" 
              value={spending} 
              onChange={(e) => setSpending(Number(e.target.value))} 
            />
            <input 
              type="range" 
              min="500" 
              max="50000" 
              step="500" 
              value={spending} 
              onChange={(e) => setSpending(Number(e.target.value))} 
            />
          </div>

          <div className="input-group">
            <label>Annual Growth Rate (%)</label>
            <input 
              type="number" 
              value={growth} 
              onChange={(e) => setGrowth(Number(e.target.value))} 
            />
            <input 
              type="range" 
              min="0" 
              max="15" 
              step="0.5" 
              value={growth} 
              onChange={(e) => setGrowth(Number(e.target.value))} 
            />
          </div>
        </div>

        <div className="calc-result">
          <div className="result-circle">
            <div className="result-value">{years >= 100 ? '100+' : years}</div>
            <div className="result-label">Years</div>
          </div>
          <div className="result-note">
            {years < 10 ? (
              <span className="warning">Caution: Your current spending may deplete your inheritance quickly.</span>
            ) : years < 30 ? (
              <span className="info">Stable: Your inheritance provides a solid multi-decade foundation.</span>
            ) : (
              <span className="success">Generational: This level of spending allows for long-term wealth preservation.</span>
            )}
          </div>
          <button className="calc-cta" onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}>
            Build a Professional Plan →
          </button>
        </div>
      </div>
      
      <div className="calc-disclaimer">
        *This is a simplified projection for educational purposes. Actual results will vary based on taxes, inflation, and market volatility. Always consult a CFP for fiduciary advice.
      </div>
    </div>
  );
};

export default InheritanceCalculator;
