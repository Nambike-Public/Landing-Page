import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <main className="bg-[#0d1117] min-h-screen">
      <div className="max-w-7xl mx-auto border border-blue-500/20 rounded-none">
        <Navbar />
        
        <section className="py-20 px-8 text-white">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center">
              Get in Touch
            </h1>
            
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-gray-300 mb-12 leading-relaxed text-center">
                Have questions about Nambike? We'd love to hear from you. 
                Reach out to us through any of the channels below.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-gray-800 p-8 rounded-lg">
                  <h2 className="text-2xl font-semibold mb-6 text-white">Contact Information</h2>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-sm">📧</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">Email</h3>
                        <p className="text-gray-300">hello@nambike.in</p>
                        <p className="text-sm text-gray-400">General inquiries</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-sm">💼</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">Careers</h3>
                        <p className="text-gray-300">careers@nambike.in</p>
                        <p className="text-sm text-gray-400">Job opportunities</p>
                      </div>
                    </div>
                    
                    {/* <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-sm">🛠️</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">Support</h3>
                        <p className="text-gray-300">support@nambike.in</p>
                        <p className="text-sm text-gray-400">Technical support</p>
                      </div>
                    </div> */}
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-sm">📍</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">Office</h3>
                        <p className="text-gray-300">Bengaluru, IN</p>
                        {/* <p className="text-sm text-gray-400">Remote-first company</p> */}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-800 p-8 rounded-lg">
                  <h2 className="text-2xl font-semibold mb-6 text-white">Send us a Message</h2>
                  
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        placeholder="Your name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        placeholder="your@email.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="support">Technical Support</option>
                        <option value="partnership">Partnership</option>
                        <option value="media">Media Inquiry</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 resize-none"
                        placeholder="Tell us how we can help..."
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-3 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 font-medium text-white"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
              
              <div className="text-center">
                <a 
                  href="/" 
                  className="inline-block bg-gray-700 px-8 py-3 rounded-lg hover:bg-gray-600 transition-all duration-200 font-medium text-white"
                >
                  Back to Home
                </a>
              </div>
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    </main>
  );
}
