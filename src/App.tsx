import React, { useState } from 'react';
import { Zap, Star, Sparkles, CheckCircle } from 'lucide-react';

function App() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsLoading(false);
    setIsSubscribed(true);
  };

  const resetForm = () => {
    setIsSubscribed(false);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center justify-center px-6 py-12">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-[#1A1A1A]">
            Weekly Design Tips You'll
            <span className="block">Actually Want to Read</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-600 mb-12 font-light">
            Join 5,000+ designers getting actionable insights every Thursday
          </p>

          {!isSubscribed ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-6">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="flex-1 px-6 py-4 text-lg border-2 border-gray-200 rounded-lg focus:border-[#FFDDEE] focus:outline-none transition-colors duration-200 min-h-[44px]"
                  aria-label="Email address"
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="px-8 py-4 bg-[#FFDDEE] text-[#1A1A1A] font-semibold text-lg rounded-lg hover:bg-[#FFB8DD] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed min-h-[44px] whitespace-nowrap"
                  aria-label="Subscribe to newsletter"
                >
                  {isLoading ? 'Subscribing...' : 'Subscribe Free'}
                </button>
              </div>
            </form>
          ) : (
            <div className="max-w-md mx-auto mb-6 p-6 bg-green-50 border border-green-200 rounded-lg">
              <div className="flex items-center justify-center gap-3 mb-3">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <span className="text-lg font-semibold text-green-800">Successfully subscribed!</span>
              </div>
              <p className="text-green-700 mb-4">
                Check your inbox for a welcome email. Your first newsletter arrives Thursday.
              </p>
              <button
                onClick={resetForm}
                className="text-sm text-green-600 hover:text-green-800 underline"
              >
                Subscribe another email
              </button>
            </div>
          )}

          <p className="text-sm text-gray-500 font-light">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="min-h-[60vh] flex items-center py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 text-[#1A1A1A]">
            Why Join Subly?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <div className="text-center group">
              <div className="w-16 h-16 bg-[#FFDDEE] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#FFB8DD] transition-colors duration-200">
                <Zap className="w-8 h-8 text-[#1A1A1A]" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-[#1A1A1A]">
                Bite-sized Learning
              </h3>
              <p className="text-gray-600 leading-relaxed">
                5-minute reads packed with practical tips you can apply immediately to your design work.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-[#FFDDEE] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#FFB8DD] transition-colors duration-200">
                <Star className="w-8 h-8 text-[#1A1A1A]" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-[#1A1A1A]">
                Curated Content
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Hand-picked resources from industry experts, saving you hours of searching for quality content.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-[#FFDDEE] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#FFB8DD] transition-colors duration-200">
                <Sparkles className="w-8 h-8 text-[#1A1A1A]" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-[#1A1A1A]">
                Actually Useful
              </h3>
              <p className="text-gray-600 leading-relaxed">
                No fluff, just actionable insights that make a real difference in your design process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-100">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-gray-500 text-sm">
            © 2025 Subly. Crafted with care for the design community.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;