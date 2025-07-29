import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

interface HeroSectionProps {
  onCTAClick: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onCTAClick }) => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 opacity-50"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gray-300 opacity-3 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Main tagline */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            <span className="gradient-text">Meetings.</span>
            <br />
            <span className="text-white">Transformed by</span>
            <br />
            <span className="gradient-text">AI.</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            ConvAI captures, organizes, and understands your team conversations in real-time.
            <br />
            <span className="text-gray-400 text-lg">
              Never miss a crucial insight again.
            </span>
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button 
              onClick={onCTAClick}
              className="btn-primary group flex items-center gap-3"
            >
              Join In / Interested
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="btn-secondary group flex items-center gap-3">
              <Play className="w-5 h-5" />
              Watch Demo
            </button>
          </div>
          
          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: "🎙️", text: "Real-time Transcription" },
              { icon: "👥", text: "Speaker Identification" },
              { icon: "📝", text: "Smart Summaries" },
              { icon: "💡", text: "Instant Q&A" }
            ].map((feature, index) => (
              <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-3xl mb-3">{feature.icon}</div>
                <p className="text-gray-400 text-sm font-medium">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;