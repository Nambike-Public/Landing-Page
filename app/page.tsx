import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import VideoSection from "@/components/VideoSection";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#0d1117] min-h-screen">
      <div className="max-w-7xl mx-auto border border-blue-500/20">
        <Navbar />
        <Hero />
        <VideoSection />
        <Newsletter />
        <Footer />
      </div>
    </main>
  );
}