import React, { useState } from 'react';
import { 
  Brain, 
  Zap, 
  Share2, 
  FileText, 
  ArrowRight, 
  Github, 
  Twitter, 
  Coffee, 
  BookOpen,
  CheckCircle,
  Copy,
  ExternalLink
} from 'lucide-react';

function App() {
  const [activeDemo, setActiveDemo] = useState(0);
  const [email, setEmail] = useState('');
  const [inputText, setInputText] = useState('');
  const [showDemo, setShowDemo] = useState(false);

  const demoLevels = [
    {
      level: 'Scholar',
      emoji: '🎓',
      text: 'Quantum entanglement manifests as a non-local correlation phenomenon whereby measurement of one particle instantaneously affects its entangled partner, regardless of spatial separation, challenging classical locality principles.'
    },
    {
      level: 'Professional',
      emoji: '💼', 
      text: 'Quantum entanglement creates a special connection between particles where measuring one immediately influences the other, even across vast distances, defying our normal understanding of how things interact.'
    },
    {
      level: 'Everyday',
      emoji: '☕',
      text: 'Think of quantum entanglement like having two magic coins that are forever connected. When you flip one and it lands heads, the other will always land tails, no matter how far apart they are.'
    },
    {
      level: 'Teen',
      emoji: '📱',
      text: 'Quantum entanglement is like having telepathic particles. When something happens to one particle, its "twin" instantly knows about it, even if they\'re on opposite sides of the universe. Pretty wild, right?'
    },
    {
      level: 'Potato',
      emoji: '🥔',
      text: 'Two tiny things become best friends forever. When you poke one friend, the other friend feels it immediately, even if they\'re super far away. Science is weird like that!'
    }
  ];

  const handleTryNow = () => {
    document.getElementById('input-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSeeExample = () => {
    document.getElementById('demo-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleExplainThis = () => {
    if (inputText.trim()) {
      setShowDemo(true);
      document.getElementById('demo-section')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24">
          <div className="text-center">
            <div className="mb-8">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold shadow-lg">
                <Brain className="w-4 h-4 mr-2" />
                Now in Beta!
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-6">
              Explain Like I'm Dumb
            </h1>
            
            <p className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
              From PhD to Potato — one click away. 🥔
            </p>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Paste any complicated mess. Get 5 levels of crystal-clear explanation.
              Perfect for students, professionals, and anyone who's tired of pretending they understand things.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <button 
                onClick={handleTryNow}
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-full text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center"
              >
                Try it Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button 
                onClick={handleSeeExample}
                className="px-8 py-4 bg-white text-gray-800 font-bold rounded-full text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 border-2 border-gray-200"
              >
                See Example
              </button>
            </div>
            
            {/* Input Box */}
            <div id="input-section" className="max-w-2xl mx-auto">
              <div className="bg-white rounded-2xl shadow-2xl p-6 border-2 border-gray-100">
                <div className="text-left">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Paste your complicated text here:
                  </label>
                  <textarea
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Try pasting a research paper, legal document, or that confusing news article..."
                    className="w-full bg-gray-50 rounded-xl p-4 border-2 border-dashed border-gray-300 min-h-[120px] resize-none focus:border-purple-500 focus:outline-none text-gray-700 placeholder-gray-500"
                  />
                  <button 
                    onClick={handleExplainThis}
                    disabled={!inputText.trim()}
                    className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-blue-500 to-teal-500 text-white font-bold rounded-xl hover:shadow-lg transform hover:scale-102 transition-all duration-200 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    <Zap className="w-5 h-5 mr-2" />
                    Explain This!
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How It Works ⚡
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Three simple steps to turn brain-melting content into something actually understandable.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200">
                <FileText className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Paste Any Content</h3>
              <p className="text-gray-600">
                Research papers, legal docs, technical manuals, weird news articles — if it's confusing, we'll take it.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200">
                <Brain className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">2. AI Breaks It Down</h3>
              <p className="text-gray-600">
                Our AI creates 5 levels of explanation: Scholar, Professional, Everyday, Teen, and the legendary Potato Mode.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200">
                <Share2 className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Explore & Share</h3>
              <p className="text-gray-600">
                Pick your perfect level of understanding. Copy, share, or export for later. Knowledge is meant to be shared!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why ELiD */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why ELiD? 🤔
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Because life's too short to pretend you understand everything on the first read.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-200">
              <CheckCircle className="w-12 h-12 text-green-500 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Perfect for students, nerds, and curious minds</h3>
              <p className="text-gray-600">
                Whether you're cramming for exams or just love learning new things, ELiD meets you at your level.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-200">
              <CheckCircle className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Translate anything into plain English</h3>
              <p className="text-gray-600">
                From quantum physics to cryptocurrency — no more nodding along while being completely lost.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-200">
              <CheckCircle className="w-12 h-12 text-purple-500 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Learn at your own level</h3>
              <p className="text-gray-600">
                Start with Potato Mode and work your way up, or dive straight into Scholar level. Your brain, your rules.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-200">
              <CheckCircle className="w-12 h-12 text-pink-500 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Share or reuse explanations easily</h3>
              <p className="text-gray-600">
                Found the perfect explanation? Save it, share it, or export it. Knowledge sharing made simple.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Live Demo */}
      <section id="demo-section" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              See It In Action 🚀
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              {showDemo && inputText ? 
                "Here's how we'd explain your text across all 5 levels:" :
                "Here's how we'd explain \"Quantum Entanglement\" across all 5 levels:"
              }
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-2xl p-6 mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Original Text:</h3>
              <p className="text-gray-600 italic">
                {showDemo && inputText ? 
                  `"${inputText.substring(0, 200)}${inputText.length > 200 ? '...' : ''}"` :
                  '"Quantum entanglement manifests as a non-local correlation phenomenon whereby measurement of one particle instantaneously affects its entangled partner, regardless of spatial separation..."'
                }
              </p>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-8 justify-center">
              {demoLevels.map((level, index) => (
                <button
                  key={index}
                  onClick={() => setActiveDemo(index)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 flex items-center ${
                    activeDemo === index
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-200'
                  }`}
                >
                  <span className="mr-2">{level.emoji}</span>
                  {level.level}
                </button>
              ))}
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-900 flex items-center">
                  <span className="mr-3">{demoLevels[activeDemo].emoji}</span>
                  {demoLevels[activeDemo].level} Level
                </h3>
                <button 
                  onClick={() => copyToClipboard(demoLevels[activeDemo].text)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                  title="Copy to clipboard"
                >
                  <Copy className="w-5 h-5 text-gray-500" />
                </button>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                {showDemo && inputText ? 
                  `This would be your ${demoLevels[activeDemo].level.toLowerCase()}-level explanation! (Demo mode - actual AI processing coming soon)` :
                  demoLevels[activeDemo].text
                }
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What People Are Saying 💬
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="text-4xl mb-4">🤯</div>
              <p className="text-gray-700 mb-6 italic">
                "I finally understood quantum computing. Kind of. Potato Mode was surprisingly enlightening!"
              </p>
              <p className="font-semibold text-gray-900">— Sarah, Physics Student</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="text-4xl mb-4">👵</div>
              <p className="text-gray-700 mb-6 italic">
                "Perfect for explaining crypto to my mom. She finally stopped asking if Bitcoin is a real coin."
              </p>
              <p className="font-semibold text-gray-900">— Mike, Crypto Enthusiast</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="text-4xl mb-4">🥔</div>
              <p className="text-gray-700 mb-6 italic">
                "I use Potato Mode daily and I'm proud of it. Sometimes simple is better!"
              </p>
              <p className="font-semibold text-gray-900">— Alex, Marketing Manager</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get notified when we launch! 🚀</h3>
              <div className="flex gap-3 mb-6">
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-purple-500 focus:outline-none text-white placeholder-gray-400"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-semibold hover:shadow-lg transition-all duration-200">
                  Notify Me
                </button>
              </div>
              <p className="text-gray-400 text-sm">
                Join 1,000+ people who don't want to feel dumb anymore.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6">Connect with Hatman 🎩</h3>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://github.com/whotfishatman"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200"
                >
                  <Github className="w-5 h-5 mr-2" />
                  GitHub
                  <ExternalLink className="w-4 h-4 ml-2 opacity-50" />
                </a>
                <a
                  href="https://x.com/WhoTFIsHatman"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200"
                >
                  <Twitter className="w-5 h-5 mr-2" />
                  Twitter/X
                  <ExternalLink className="w-4 h-4 ml-2 opacity-50" />
                </a>
                <a
                  href="https://medium.com/@whotfishatman"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200"
                >
                  <BookOpen className="w-5 h-5 mr-2" />
                  Medium
                  <ExternalLink className="w-4 h-4 ml-2 opacity-50" />
                </a>
                <a
                  href="https://buymeacoffee.com/whotfishatman"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 bg-orange-600 hover:bg-orange-700 rounded-lg transition-colors duration-200"
                >
                  <Coffee className="w-5 h-5 mr-2" />
                  Buy Me a Coffee
                  <ExternalLink className="w-4 h-4 ml-2 opacity-50" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400 flex items-center justify-center">
              Made with 💡 by Hatman • © 2025 Explain Like I'm Dumb
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;