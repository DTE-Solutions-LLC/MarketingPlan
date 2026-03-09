import React, { useState, useEffect, useRef } from 'react';
import './NovaAssistant.css';

const NovaAssistant = ({ onLeadCapture }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [userRole, setUserRole] = useState(null); // 'inheritor', 'cpa', 'cfp'
  const [step, setStep] = useState('initial');
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'nova',
      text: "Systems online. I'm Nova, the analytical focal point for the NestLegacy ecosystem. To better align our session, are you an inheritor seeking guidance, or a financial professional exploring our acquisition infrastructure?",
      timestamp: new Date().toISOString(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  const addMessage = (type, text) => {
    setMessages((prev) => [...prev, {
      id: Date.now(),
      type,
      text,
      timestamp: new Date().toISOString(),
    }]);
  };

  const processResponse = (input) => {
    const lowerInput = input.toLowerCase();
    setIsTyping(true);

    setTimeout(() => {
      let response = "";

      if (step === 'initial') {
        if (lowerInput.includes('inheritor') || lowerInput.includes('guidance') || lowerInput.includes('money')) {
          setUserRole('inheritor');
          setStep('qualifying_inheritor');
          response = "Understood. Managing a wealth event requires high-fidelity data integrity. Have you calculated the longevity of your inheritance using our tool yet, or would you like me to identify potential tax traps for your specific amount?";
        } else if (lowerInput.includes('cpa') || lowerInput.includes('professional') || lowerInput.includes('cfp')) {
          setUserRole('pro');
          setStep('qualifying_pro');
          response = "Excellent. NestLegacy is engineered to bridge the trust gap. Are you looking to deploy this acquisition ecosystem for your own practice, or are you interested in our CPA-to-CFP referral architecture?";
        } else {
          response = "I've logged your input. My primary function is to optimize the bridge between inheritors and fiduciary experts. Which side of that bridge are you on?";
        }
      } else if (step === 'qualifying_inheritor') {
        setStep('lead_capture');
        response = "I've analyzed the behavioral patterns of similar wealth events. To provide a high-fidelity longevity projection and connect you with a vetted CFP, I'll need to secure your primary email. Shall we proceed?";
        setTimeout(onLeadCapture, 2000);
      } else if (step === 'qualifying_pro') {
        setStep('demo_setup');
        response = "Our architecture is modular and compliance-first. I can generate a technical breakdown of our lead-scoring algorithm for you. Would you like to schedule a 15-minute system walkthrough?";
        setTimeout(onLeadCapture, 2000);
      } else {
        response = "Processing... I'm ready to move this to a high-fidelity discovery call. You can click the 'Schedule' button above or provide your details here.";
      }

      addMessage('nova', response);
      setIsTyping(false);
    }, 1200);
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;
    addMessage('user', inputValue);
    const input = inputValue;
    setInputValue('');
    processResponse(input);
  };

  return (
    <div className={`nova-assistant-container ${isOpen ? 'open' : ''}`}>
      {!isOpen && (
        <button className="nova-trigger" onClick={() => setIsOpen(true)}>
          <div className="nova-pulse"></div>
          <span className="nova-icon">N</span>
          <span className="nova-label">Analytical Twin Active</span>
        </button>
      )}

      {isOpen && (
        <div className="nova-window">
          <div className="nova-header">
            <div className="nova-header-info">
              <div className="nova-avatar">N</div>
              <div>
                <h3>Nova Assistant</h3>
                <span className="nova-status">Lead Intelligence Engine</span>
              </div>
            </div>
            <button className="nova-close" onClick={() => setIsOpen(false)}>&times;</button>
          </div>

          <div className="nova-messages">
            {messages.map((msg) => (
              <div key={msg.id} className={`nova-message-wrapper ${msg.type}`}>
                <div className="nova-message">
                  {msg.text}
                </div>
                <span className="nova-time">
                  {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
            ))}
            {isTyping && (
              <div className="nova-message-wrapper nova">
                <div className="nova-message typing">
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="nova-input-area">
            <input
              type="text"
              placeholder="System prompt..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            />
            <button className="nova-send" onClick={handleSend}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
              </svg>
            </button>
          </div>
          
          <div className="nova-footer">
            DTE SOLUTIONS | DATA · INTEGRITY · ENGINEERING
          </div>
        </div>
      )}
    </div>
  );
};

export default NovaAssistant;
