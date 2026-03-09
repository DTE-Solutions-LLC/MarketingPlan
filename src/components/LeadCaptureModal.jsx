import React, { useState } from 'react';
import './LeadCaptureModal.css';

const LeadCaptureModal = ({ isOpen, onClose, source }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inheritanceRange: '100k-500k',
    timeframe: 'immediate'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Lead Captured from ${source}:`, formData);
    setIsSubmitted(true);
    setTimeout(() => {
      onClose();
      setIsSubmitted(false);
    }, 2000);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-window">
        <button className="modal-close" onClick={onClose}>&times;</button>
        
        {!isSubmitted ? (
          <div className="modal-content">
            <div className="modal-header">
              <div className="modal-tag">Secure Data Transmission</div>
              <h3>Secure Your High-Fidelity Plan</h3>
              <p>Provide your details to receive your customized inheritance longevity report and schedule your discovery call.</p>
            </div>

            <form onSubmit={handleSubmit} className="lead-form">
              <div className="form-group">
                <label>Full Name</label>
                <input 
                  type="text" 
                  required 
                  placeholder="Andrew Waggoner"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div className="form-group">
                <label>Primary Email</label>
                <input 
                  type="email" 
                  required 
                  placeholder="andrew@pulseapp.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Inheritance Range</label>
                  <select 
                    value={formData.inheritanceRange}
                    onChange={(e) => setFormData({...formData, inheritanceRange: e.target.value})}
                  >
                    <option value="under-100k">Under $100k</option>
                    <option value="100k-500k">$100k - $500k</option>
                    <option value="500k-1m">$500k - $1M</option>
                    <option value="1m-plus">$1M+</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Timeframe</label>
                  <select 
                    value={formData.timeframe}
                    onChange={(e) => setFormData({...formData, timeframe: e.target.value})}
                  >
                    <option value="immediate">Immediate</option>
                    <option value="3-6-months">3-6 Months</option>
                    <option value="exploring">Just Exploring</option>
                  </select>
                </div>
              </div>
              <button type="submit" className="submit-btn">
                Generate My Report →
              </button>
            </form>
          </div>
        ) : (
          <div className="modal-success">
            <div className="success-icon">✓</div>
            <h3>Data Secured</h3>
            <p>Your high-fidelity report is being generated. A CFP will contact you shortly to align on your discovery call.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LeadCaptureModal;
