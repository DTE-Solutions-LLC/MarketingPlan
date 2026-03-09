import React, { useState, useEffect, useRef } from 'react';
import './NovaAssistant.css';

const NovaAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'nova',
      text: "Welcome to the NestLegacy Digital Trust Layer. I'm Nova, your analytical partner. How can I help you navigate the Great Wealth Transfer today?",
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

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMessage = {
      id: Date.now(),
      type: 'user',
      text: inputValue,
      timestamp: new Date().toISOString(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulated Nova response
    setTimeout(() => {
      let novaResponseText = "I'm processing your inquiry with DTE high-fidelity standards. As a CFP Digital Acquisition Ecosystem, I'm here to bridge the gap between complex inheritance scenarios and professional guidance. Would you like to explore our Inheritance Calculator or schedule a discovery call with a CFP?";
      
      if (inputValue.toLowerCase().includes('inheritance') || inputValue.toLowerCase().includes('money')) {
        novaResponseText = "Inheritance events are often accompanied by significant emotional and financial complexity. My internal modeling suggests that early alignment with a CFP can reduce long-term tax exposure by up to 30%. Shall we run a quick longevity projection for your specific case?";
      } else if (inputValue.toLowerCase().includes('cpa') || inputValue.toLowerCase().includes('partner')) {
        novaResponseText = "For CPAs, NestLegacy acts as a high-fidelity referral bridge. We qualify the leads behaviorally and financially before they reach the advisory level. This ensures data integrity across the entire partnership ecosystem.";
      }

      const novaMessage = {
        id: Date.now() + 1,
        type: 'nova',
        text: novaResponseText,
        timestamp: new Date().toISOString(),
      };

      setMessages((prev) => [...prev, novaMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className={`nova-assistant-container ${isOpen ? 'open' : ''}`}>
      {!isOpen && (
        <button className="nova-trigger" onClick={() => setIsOpen(true)}>
          <div className="nova-pulse"></div>
          <span className="nova-icon">N</span>
          <span className="nova-label">Talk to Nova</span>
        </button>
      )}

      {isOpen && (
        <div className="nova-window">
          <div className="nova-header">
            <div className="nova-header-info">
              <div className="nova-avatar">N</div>
              <div>
                <h3>Nova AI</h3>
                <span className="nova-status">Analytical Twin Active</span>
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
              placeholder="Ask Nova about your inheritance strategy..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button className="nova-send" onClick={handleSend}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
              </svg>
            </button>
          </div>
          
          <div className="nova-footer">
            Powered by DTE Solutions | Data · Integrity · Engineering
          </div>
        </div>
      )}
    </div>
  );
};

export default NovaAssistant;
