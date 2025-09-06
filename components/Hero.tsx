export default function Hero() {
  return (
    <section className="text-center py-2 px-8 bg-[#0d1117] text-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          Revolutionizing Social Networking
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-gray-300 mb-4 leading-relaxed">
          Nambike Brings <b style={{ color: "#3b82f6" }}>Trust</b>
          <br/>
          Helps Build, Foster & Nurture <b style={{ color: "#3b82f6" }}>Meaningful Relationships</b>
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-gradient-to-r from-blue-500 to-blue-600 px-8 py-3 rounded-lg font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-200">
            Learn More
          </button>
          <button className="bg-gray-800 border border-gray-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-700 transition-all duration-200">
            Sign Up
          </button>
        </div>
      </div>
    </section>
  );
}