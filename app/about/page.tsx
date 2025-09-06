import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <main className="bg-[#0d1117] min-h-screen">
      <div className="max-w-7xl mx-auto border border-blue-500/20 rounded-none">
        <Navbar />
        
        <section className="py-20 px-8 text-white">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center">
              About Nambike
            </h1>
            
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Nambike is revolutionizing how people build meaningful relationships in the digital age. 
                We believe that authentic connections are the foundation of personal and professional success.
              </p>
              
              <h2 className="text-2xl font-semibold mb-4 text-white">Our Mission</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                To create a platform where individuals can discover, connect, and build lasting relationships 
                based on shared values, interests, and goals. We're committed to fostering genuine human 
                connections in an increasingly digital world.
              </p>
              
              <h2 className="text-2xl font-semibold mb-4 text-white">What We Do</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Nambike provides innovative tools and services that help people:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li>Create meaningful personal relationships</li>
                <li>Discover like-minded individuals in their community</li>
                <li>Build networks based on shared interests</li>
              </ul>
              
              <h2 className="text-2xl font-semibold mb-4 text-white">Our Values</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-800 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2 text-blue-400">Authenticity</h3>
                  <p className="text-gray-300">We believe in genuine connections over superficial interactions.</p>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2 text-blue-400">Community</h3>
                  <p className="text-gray-300">Building strong, supportive communities is at our core.</p>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2 text-blue-400">Innovation</h3>
                  <p className="text-gray-300">We continuously evolve to meet changing needs.</p>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2 text-blue-400">Trust</h3>
                  <p className="text-gray-300">Trust and safety are fundamental to everything we do.</p>
                </div>
              </div>
              
              <div className="text-center">
                <a 
                  href="/" 
                  className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 px-8 py-3 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 font-medium text-white"
                >
                  Get Started with Nambike
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
