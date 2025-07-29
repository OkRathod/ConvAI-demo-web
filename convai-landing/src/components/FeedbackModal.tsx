import React, { useState } from 'react';
import { X, Check } from 'lucide-react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';

interface FeedbackModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  email: string;
  helpWith: string;
  wouldUse: string;
  suggestions: string;
}

const FeedbackModal: React.FC<FeedbackModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    helpWith: '',
    wouldUse: '',
    suggestions: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await addDoc(collection(db, 'feedback'), {
        ...formData,
        timestamp: new Date(),
        userAgent: navigator.userAgent,
        referrer: document.referrer
      });
      
      setIsSubmitted(true);
      setTimeout(() => {
        onClose();
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          helpWith: '',
          wouldUse: '',
          suggestions: ''
        });
      }, 2000);
    } catch (error) {
      console.error('Error submitting feedback:', error);
      // In a real app, you'd show an error message
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="glass-effect rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {isSubmitted ? (
          <div className="p-8 text-center">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Thank you for your response!</h3>
            <p className="text-gray-300">We appreciate your feedback and will be in touch soon.</p>
          </div>
        ) : (
          <>
            <div className="flex justify-between items-center p-6 border-b border-gray-700">
              <h2 className="text-2xl font-bold text-white">Share Your Thoughts</h2>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Name (optional)
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email (optional)
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  What do you want this AI to help with? *
                </label>
                <textarea
                  name="helpWith"
                  value={formData.helpWith}
                  onChange={handleInputChange}
                  required
                  rows={3}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors resize-none"
                  placeholder="Describe your meeting challenges..."
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Would you use ConvAI when launched? *
                </label>
                <select
                  name="wouldUse"
                  value={formData.wouldUse}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-white transition-colors"
                >
                  <option value="">Select an option</option>
                  <option value="definitely">Definitely yes</option>
                  <option value="probably">Probably yes</option>
                  <option value="maybe">Maybe</option>
                  <option value="probably-not">Probably not</option>
                  <option value="definitely-not">Definitely not</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Suggestions or desired features
                </label>
                <textarea
                  name="suggestions"
                  value={formData.suggestions}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors resize-none"
                  placeholder="Any features you'd love to see..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default FeedbackModal;