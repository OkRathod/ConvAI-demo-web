import React from 'react';
import { MessageSquare, Users, BarChart3, Zap } from 'lucide-react';

const VisualSections: React.FC = () => {
  return (
    <div className="py-20 space-y-32">
      {/* Real-time Transcription Section */}
      <section className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="glass-effect rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-500 to-blue-500"></div>
              
              {/* Mock video call interface */}
              <div className="bg-gray-900 rounded-lg p-4 mb-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-xs text-gray-400 ml-2">ConvAI Meeting Assistant</span>
                </div>
                
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="bg-gray-800 rounded aspect-video flex items-center justify-center">
                      <Users className="w-8 h-8 text-gray-600" />
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Live transcription */}
              <div className="space-y-2">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-xs font-bold">JD</div>
                  <div className="flex-1">
                    <div className="text-xs text-gray-400 mb-1">John Doe • 2:34 PM</div>
                    <div className="text-sm text-white">So our Q4 projections are looking really strong...</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-xs font-bold">SM</div>
                  <div className="flex-1">
                    <div className="text-xs text-gray-400 mb-1">Sarah Miller • 2:35 PM</div>
                    <div className="text-sm text-white">That's great news! What about the European market?</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-xs font-bold">AI</div>
                  <div className="flex-1">
                    <div className="text-xs text-blue-400 mb-1">ConvAI • Live</div>
                    <div className="text-sm text-blue-300 italic">💡 Key point: Q4 projections show strong growth</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Every word, <span className="gradient-text">captured</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              ConvAI transcribes your meetings in real-time with 99% accuracy. 
              Never worry about missing important details again.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">Real-time transcription</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">Speaker identification</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Smart Summaries Section */}
      <section className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              <span className="gradient-text">Smart summaries</span> that matter
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Get AI-powered meeting summaries with action items, key decisions, 
              and next steps automatically extracted.
            </p>
            <div className="space-y-4">
              {[
                { icon: BarChart3, text: "Key metrics and insights" },
                { icon: Zap, text: "Action items prioritized" },
                { icon: MessageSquare, text: "Decision summaries" }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <item.icon className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <div className="glass-effect rounded-2xl p-8">
              <div className="flex items-center gap-2 mb-6">
                <BarChart3 className="w-6 h-6 text-blue-400" />
                <h3 className="text-xl font-bold text-white">Meeting Summary</h3>
                <span className="text-xs bg-green-500 text-white px-2 py-1 rounded-full ml-auto">Generated</span>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">📋 Key Decisions</h4>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Approved Q4 marketing budget increase by 15%</li>
                    <li>• Launch European expansion in January 2024</li>
                    <li>• Hire 3 additional developers by month-end</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">⚡ Action Items</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="text-sm text-gray-400">Sarah: Prepare EU market analysis by Friday</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <span className="text-sm text-gray-400">John: Review developer job descriptions</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-400">Team: Schedule follow-up for next Tuesday</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">💡 Key Insights</h4>
                  <p className="text-sm text-gray-400">
                    Meeting sentiment: Positive (87%). High engagement on European expansion topic. 
                    Budget concerns minimal.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Q&A Section */}
      <section className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ask anything about your <span className="gradient-text">meetings</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            ConvAI's intelligent Q&A system lets you query your meeting history 
            and get instant, contextual answers.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="glass-effect rounded-2xl p-8">
            <div className="space-y-6">
              {/* Mock chat interface */}
              <div className="space-y-4">
                <div className="flex justify-end">
                  <div className="bg-blue-600 text-white rounded-2xl rounded-br-md px-4 py-3 max-w-xs">
                    What were the main concerns about the European expansion?
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-xs font-bold">AI</div>
                  <div className="bg-gray-800 text-white rounded-2xl rounded-bl-md px-4 py-3 max-w-lg">
                    <p className="mb-2">Based on your recent meetings, the main concerns were:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Regulatory compliance in different EU countries</li>
                      <li>• Currency exchange rate risks</li>
                      <li>• Need for local partnerships</li>
                    </ul>
                    <p className="text-xs text-gray-400 mt-2">From meetings on Dec 15, Dec 8, and Nov 30</p>
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <div className="bg-blue-600 text-white rounded-2xl rounded-br-md px-4 py-3 max-w-xs">
                    Who was assigned to research compliance requirements?
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-xs font-bold">AI</div>
                  <div className="bg-gray-800 text-white rounded-2xl rounded-bl-md px-4 py-3 max-w-lg">
                    Sarah Miller was assigned to research EU compliance requirements. The deadline mentioned was January 15th, 2024.
                    <p className="text-xs text-gray-400 mt-2">From meeting on Dec 15, 2:30 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VisualSections;