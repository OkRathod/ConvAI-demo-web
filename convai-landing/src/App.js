import React, { useState } from 'react';
import { Eye, CheckCircle, User, Users, Laptop, Mic, MessageCircle } from 'lucide-react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const VISITORS = 1294; // Mocked visitor count

const visuals = [
  {
    src: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80',
    alt: 'Person in virtual meeting with AI overlay',
    caption: 'AI assistant overlay during a video call',
  },
  {
    src: 'https://images.unsplash.com/photo-1556741533-f6acd6477a20?auto=format&fit=crop&w=1200&q=80',
    alt: 'Summarized notes from a meeting',
    caption: 'Summarized notes from a meeting',
  },
  {
    src: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80',
    alt: 'Laptop with transcription panel',
    caption: 'Real-time transcription mockup',
  },
];

function App() {
  const [showThankYou, setShowThankYou] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [feedback, setFeedback] = useState({
    name: '',
    email: '',
    help: '',
    use: '',
    suggestions: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCTA = () => {
    setShowThankYou(true);
    setTimeout(() => setShowForm(true), 1200);
  };

  const handleChange = (e) => {
    setFeedback({ ...feedback, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setShowForm(false);
      setShowThankYou(false);
      setFeedback({ name: '', email: '', help: '', use: '', suggestions: '' });
      setSubmitted(false);
    }, 1800);
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-[80vh] px-4 text-center relative">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight animate-fade-in">
          Meetings. <span className="text-white/80">Transformed by AI.</span>
        </h1>
        <p className="text-lg md:text-2xl text-white/70 mb-8 max-w-xl animate-fade-in delay-100">
          ConvAI captures, organizes, and understands your team conversations in real-time.
        </p>
        <button
          className="bg-white text-black font-semibold rounded-full px-8 py-4 text-lg shadow-lg hover:scale-105 hover:bg-gray-100 transition-all duration-200 flex items-center gap-2 animate-fade-in delay-200"
          onClick={handleCTA}
        >
          Join In / Interested <ArrowRightIcon className="w-5 h-5" />
        </button>
        {/* Visit Counter */}
        <div className="absolute right-4 bottom-4 flex items-center gap-2 text-white/60 text-sm animate-fade-in delay-300">
          <Eye className="w-5 h-5" />
          Visitors so far: <span className="font-bold text-white/80">{VISITORS.toLocaleString()}</span>
        </div>
      </section>

      {/* Visual Section */}
      <section className="w-full flex flex-col gap-12 my-12">
        {visuals.map((v, i) => (
          <div key={i} className="w-full flex flex-col items-center animate-fade-in-up" style={{ animationDelay: `${i * 150}ms` }}>
            <div className="w-full max-w-5xl overflow-hidden rounded-3xl shadow-2xl border border-white/10">
              <img src={v.src} alt={v.alt} className="w-full h-72 md:h-96 object-cover object-center transition-transform duration-500 hover:scale-105" />
            </div>
            <div className="mt-4 text-white/80 text-base md:text-lg flex items-center gap-2">
              {i === 0 && <Mic className="w-5 h-5" />} 
              {i === 1 && <Users className="w-5 h-5" />} 
              {i === 2 && <Laptop className="w-5 h-5" />} 
              {v.caption}
            </div>
          </div>
        ))}
      </section>

      {/* Feedback Modal */}
      {(showThankYou || showForm) && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-white text-black rounded-2xl shadow-2xl p-8 w-full max-w-md relative animate-fade-in-up">
            {showThankYou && !showForm && (
              <div className="flex flex-col items-center justify-center gap-4 min-h-[200px]">
                <CheckCircle className="w-12 h-12 text-green-500 animate-pop-in" />
                <div className="text-xl font-semibold">Thank you for your response!</div>
              </div>
            )}
            {showForm && !submitted && (
              <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <div className="text-2xl font-bold mb-2">ConvAI Feedback</div>
                <label className="flex flex-col gap-1">
                  <span className="text-sm font-medium">Name <span className="text-gray-400">(optional)</span></span>
                  <input name="name" value={feedback.name} onChange={handleChange} className="rounded-lg border border-gray-300 px-3 py-2 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black/60 transition" />
                </label>
                <label className="flex flex-col gap-1">
                  <span className="text-sm font-medium">Email <span className="text-gray-400">(optional)</span></span>
                  <input name="email" type="email" value={feedback.email} onChange={handleChange} className="rounded-lg border border-gray-300 px-3 py-2 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black/60 transition" />
                </label>
                <label className="flex flex-col gap-1">
                  <span className="text-sm font-medium">What do you want this AI to help with?</span>
                  <textarea name="help" value={feedback.help} onChange={handleChange} className="rounded-lg border border-gray-300 px-3 py-2 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black/60 transition" required />
                </label>
                <label className="flex flex-col gap-1">
                  <span className="text-sm font-medium">Would you use ConvAI when launched?</span>
                  <select name="use" value={feedback.use} onChange={handleChange} className="rounded-lg border border-gray-300 px-3 py-2 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black/60 transition" required>
                    <option value="">Select...</option>
                    <option value="yes">Yes</option>
                    <option value="maybe">Maybe</option>
                    <option value="no">No</option>
                  </select>
                </label>
                <label className="flex flex-col gap-1">
                  <span className="text-sm font-medium">Suggestions or desired features</span>
                  <textarea name="suggestions" value={feedback.suggestions} onChange={handleChange} className="rounded-lg border border-gray-300 px-3 py-2 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black/60 transition" />
                </label>
                <button type="submit" className="mt-2 bg-black text-white rounded-full px-6 py-3 font-semibold shadow hover:bg-gray-900 transition-all flex items-center gap-2 justify-center">
                  <MessageCircle className="w-5 h-5" /> Submit Feedback
                </button>
              </form>
            )}
            {submitted && (
              <div className="flex flex-col items-center justify-center gap-4 min-h-[200px]">
                <CheckCircle className="w-12 h-12 text-green-500 animate-pop-in" />
                <div className="text-xl font-semibold">Feedback submitted!</div>
              </div>
            )}
            <button onClick={() => { setShowForm(false); setShowThankYou(false); }} className="absolute top-3 right-3 text-gray-400 hover:text-black transition text-xl">&times;</button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="w-full py-8 flex flex-col items-center gap-2 text-white/40 text-sm mt-12 animate-fade-in delay-500">
        <div className="flex items-center gap-2">
          <User className="w-4 h-4" />
          Made for founders & teams — ConvAI © {new Date().getFullYear()}
        </div>
        <div className="flex items-center gap-2">
          <span>Premium AI meeting assistant. Not affiliated with OpenAI.</span>
        </div>
      </footer>

      {/* Animations */}
      <style>{`
        .animate-fade-in { animation: fadeIn 0.8s both; }
        .animate-fade-in-up { animation: fadeInUp 0.8s both; }
        .animate-pop-in { animation: popIn 0.5s both; }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-500 { animation-delay: 0.5s; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: none; } }
        @keyframes popIn { 0% { opacity: 0; transform: scale(0.7); } 80% { opacity: 1; transform: scale(1.1); } 100% { opacity: 1; transform: scale(1); } }
      `}</style>
    </div>
  );
}

export default App;
