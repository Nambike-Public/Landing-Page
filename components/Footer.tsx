export default function Footer() {
  return (
    <footer className="flex justify-between items-center px-8 py-6 bg-[#0d1117] text-gray-400 text-sm border-t border-gray-800">
      <p>© 2025 Nambike. All rights reserved.</p>
      <div className="flex space-x-6">
        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
      </div>
    </footer>
  );
}