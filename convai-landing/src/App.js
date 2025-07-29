import React, { useState } from 'react';
import { CheckCircle, Users, Mic, MessageCircle, BarChart3 } from 'lucide-react';
import { UserIcon, ChatBubbleLeftRightIcon, ChartBarIcon } from '@heroicons/react/24/outline';
import './App.css';
import '@fontsource/inter';

const mockVisitorCount = 1294;

const demoImages = [
  {
    src: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80',
    alt: 'Person in a virtual meeting with AI interface',
    caption: 'AI assistant overlay during a video call',
  },
  {
    src: 'https://images.unsplash.com/photo-1556741533-f6acd6477a20?auto=format&fit=crop&w=1200&q=80',
    alt: 'Team collaborating with AI overlay',
    caption: 'Team collaborating with AI overlay',
  },
  {
    src: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1200&q=80',
    alt: 'Laptop with graphs and transcription panels',
    caption: 'Summarized notes and real-time transcription',
  },
];

function App() {
  const [showThankYou, setShowThankYou] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', help: '', use: '', suggestions: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleCTA = () => {
    setShowThankYou(true);
    setTimeout(() => setShowForm(true), 1000);
  };

  const handleFormChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setShowForm(false);
      setShowThankYou(false);
      setForm({ name: '', email: '', help: '', use: '', suggestions: '' });
      setSubmitted(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-inter flex flex-col">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center flex-1 px-4 py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-satoshi font-bold mb-4 tracking-tight">Meetings. Transformed by AI.</h1>
        <p className="text-lg md:text-2xl font-helvetica text-secondary mb-8 max-w-2xl">ConvAI captures, organizes, and understands your team conversations in real-time.</p>
        <button
          className="bg-white text-black font-bold px-8 py-4 rounded-full shadow-lg hover:scale-105 transition-transform text-xl"
          onClick={handleCTA}
        >
          Join In / Interested
        </button>
        {/* Visit Counter */}
        <div className="fixed bottom-6 right-6 bg-accent/80 text-secondary px-4 py-2 rounded-full flex items-center gap-2 text-sm shadow-lg">
          <span role="img" aria-label="visitors">👁️</span> Visitors so far: <span className="font-bold text-primary">{mockVisitorCount.toLocaleString()}</span>
        </div>
      </section>

      {/* Visual Section */}
      <section className="w-full flex flex-col gap-12 mb-24">
        {demoImages.map((img, i) => (
          <div key={i} className="w-full flex flex-col items-center">
            <div className="w-full max-w-5xl rounded-3xl overflow-hidden shadow-2xl border border-accent">
              <img src={img.src} alt={img.alt} className="w-full object-cover h-72 md:h-96 transition-transform hover:scale-105 duration-500" />
            </div>
            <div className="mt-4 flex items-center gap-2 text-secondary text-base">
              {i === 0 && <Mic className="w-5 h-5" />} 
              {i === 1 && <Users className="w-5 h-5" />} 
              {i === 2 && <BarChart3 className="w-5 h-5" />} 
              <span>{img.caption}</span>
            </div>
          </div>
        ))}
      </section>

      {/* Thank You Modal */}
      {showThankYou && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 transition-opacity animate-fade-in">
          <div className="bg-white text-black rounded-2xl px-8 py-12 shadow-2xl flex flex-col items-center">
            <CheckCircle className="w-12 h-12 text-green-500 mb-4" />
            <div className="text-2xl font-bold mb-2">Thank you for your response!</div>
            <div className="text-secondary mb-2">We appreciate your interest.</div>
          </div>
        </div>
      )}

      {/* Feedback Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 transition-opacity animate-fade-in">
          <form
            className="bg-white text-black rounded-2xl px-8 py-10 shadow-2xl w-full max-w-lg flex flex-col gap-4 font-inter"
            onSubmit={handleFormSubmit}
          >
            <div className="text-2xl font-bold mb-2 text-center">ConvAI Feedback</div>
            <label className="flex flex-col gap-1">
              <span className="font-semibold">Name <span className="text-xs text-gray-400">(optional)</span></span>
              <input name="name" value={form.name} onChange={handleFormChange} className="border border-accent rounded px-3 py-2 bg-gray-100" />
            </label>
            <label className="flex flex-col gap-1">
              <span className="font-semibold">Email <span className="text-xs text-gray-400">(optional)</span></span>
              <input name="email" type="email" value={form.email} onChange={handleFormChange} className="border border-accent rounded px-3 py-2 bg-gray-100" />
            </label>
            <label className="flex flex-col gap-1">
              <span className="font-semibold">What do you want this AI to help with?</span>
              <textarea name="help" value={form.help} onChange={handleFormChange} className="border border-accent rounded px-3 py-2 bg-gray-100" required />
            </label>
            <label className="flex flex-col gap-1">
              <span className="font-semibold">Would you use ConvAI when launched?</span>
              <select name="use" value={form.use} onChange={handleFormChange} className="border border-accent rounded px-3 py-2 bg-gray-100" required>
                <option value="">Select</option>
                <option value="yes">Yes</option>
                <option value="maybe">Maybe</option>
                <option value="no">No</option>
              </select>
            </label>
            <label className="flex flex-col gap-1">
              <span className="font-semibold">Suggestions or desired features</span>
              <textarea name="suggestions" value={form.suggestions} onChange={handleFormChange} className="border border-accent rounded px-3 py-2 bg-gray-100" />
            </label>
            <button
              type="submit"
              className="mt-4 bg-black text-white font-bold px-6 py-3 rounded-full hover:bg-accent transition-colors"
              disabled={submitted}
            >
              {submitted ? 'Submitted!' : 'Send Feedback'}
            </button>
            {submitted && <div className="text-green-600 text-center mt-2">Feedback sent. Thank you!</div>}
          </form>
      </div>
      )}

      {/* Footer */}
      <footer className="w-full text-center py-8 text-secondary text-sm font-helvetica">
        &copy; {new Date().getFullYear()} ConvAI. Crafted with <span className="text-red-500">♥</span> for founders & teams.
      </footer>
    </div>
  );
}

export default App;
