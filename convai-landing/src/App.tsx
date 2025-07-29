import React, { useState } from 'react';
import HeroSection from './components/HeroSection';
import FeedbackModal from './components/FeedbackModal';
import VisitorCounter from './components/VisitorCounter';
import VisualSections from './components/VisualSections';
import './App.css';

function App() {
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const handleCTAClick = () => {
    setShowThankYou(true);
    setTimeout(() => {
      setShowThankYou(false);
      setShowFeedbackModal(true);
    }, 1500);
  };

  return (
    <div className="App">
      {/* Thank you message */}
      {showThankYou && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="glass-effect rounded-2xl p-8 text-center max-w-md mx-4">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">✅</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Thank you for your response!</h3>
            <p className="text-gray-300">Loading feedback form...</p>
          </div>
        </div>
      )}

      {/* Main content */}
      <main className="relative">
        <HeroSection onCTAClick={handleCTAClick} />
        <VisualSections />
        
        {/* Footer */}
        <footer className="py-16 border-t border-gray-800">
          <div className="container mx-auto px-6 text-center">
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-white mb-4">Ready to transform your meetings?</h3>
              <p className="text-gray-300 mb-6">Join thousands of teams already using ConvAI</p>
              <button 
                onClick={handleCTAClick}
                className="btn-primary"
              >
                Get Early Access
              </button>
            </div>
            
            <div className="text-gray-500 text-sm">
              <p>&copy; 2024 ConvAI. All rights reserved.</p>
              <p className="mt-2">Built with ❤️ for better meetings</p>
            </div>
          </div>
        </footer>
      </main>

      {/* Components */}
      <VisitorCounter />
      <FeedbackModal 
        isOpen={showFeedbackModal} 
        onClose={() => setShowFeedbackModal(false)} 
      />
    </div>
  );
}

export default App;
