import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Careers() {
	return (
		<main className="bg-[#0d1117] min-h-screen">
			<div className="max-w-7xl mx-auto border border-blue-500/20 rounded-none">
				<Navbar />

				<section className="py-20 px-8 text-white">
					<div className="max-w-4xl mx-auto">
						<h1 className="text-4xl md:text-6xl font-bold mb-8 text-center">
							Join Our Team
						</h1>

						<div className="prose prose-invert max-w-none">
							<p className="text-lg text-gray-300 mb-8 leading-relaxed text-center">
								Be part of a mission to revolutionize how people build
								meaningful relationships. We're looking for passionate
								individuals who want to make a real impact.
							</p>

							<h2 className="text-2xl font-semibold mb-6 text-white">
								Why Work at Nambike?
							</h2>
							<div className="grid md:grid-cols-2 gap-6 mb-8">
								<div className="bg-gray-800 p-6 rounded-lg">
									<h3 className="text-xl font-semibold mb-3 text-blue-400">
										🚀 Growth Opportunities
									</h3>
									<p className="text-gray-300">
										Work on cutting-edge technology and grow your career with
										us.
									</p>
								</div>
								<div className="bg-gray-800 p-6 rounded-lg">
									<h3 className="text-xl font-semibold mb-3 text-blue-400">
										💡 Innovation
									</h3>
									<p className="text-gray-300">
										Be part of building the future of social networking.
									</p>
								</div>
								<div className="bg-gray-800 p-6 rounded-lg">
									<h3 className="text-xl font-semibold mb-3 text-blue-400">
										🤝 Collaborative Culture
									</h3>
									<p className="text-gray-300">
										Work with a diverse, talented team that values
										collaboration.
									</p>
								</div>
								<div className="bg-gray-800 p-6 rounded-lg">
									<h3 className="text-xl font-semibold mb-3 text-blue-400">
										⚖️ Work-Life Balance
									</h3>
									<p className="text-gray-300">
										Flexible working arrangements and comprehensive benefits.
									</p>
								</div>
							</div>

							<h2 className="text-2xl font-semibold mb-6 text-white">
								Open Positions
							</h2>
							<div className="space-y-4 mb-8">
								<div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
									<h3 className="text-xl font-semibold mb-2 text-white">
										React Native Developer
									</h3>
									<p className="text-gray-300 mb-3">
										Build scalable mobile applications.
									</p>{" "}
								</div>

								<div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
									<h3 className="text-xl font-semibold mb-2 text-white">
										Senior Full Stack Developer
									</h3>
									<p className="text-gray-300 mb-3">
										Build scalable mobile applications.
									</p>
									<div className="flex flex-wrap gap-2">
										<span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
											React
										</span>
										<span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
											Node.js
										</span>
										<span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
											TypeScript
										</span>
										<span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
											PostgreSQL
										</span>
									</div>
								</div>

								<div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
									<h3 className="text-xl font-semibold mb-2 text-white">
										Backend Developer
									</h3>
									<p className="text-gray-300 mb-3">
										Build scalable web services using Modern Technologies
									</p>
									<div className="flex flex-wrap gap-2">
										<span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
											Python
										</span>
										<span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
											Node.js
										</span>
										<span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
											Golang
										</span>
										<span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
											PostgreSQL
										</span>
										<span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
											Redis
										</span>
										<span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
											Elasticsearch
										</span>
										<span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
											Kafka
										</span>
										<span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
											RabbitMQ
										</span>
									</div>
								</div>

								<div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
									<h3 className="text-xl font-semibold mb-2 text-white">
										Product Designer
									</h3>
									<p className="text-gray-300 mb-3">
										Design intuitive user experiences that bring people
										together.
									</p>
									<div className="flex flex-wrap gap-2">
										<span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
											Figma
										</span>
										<span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
											User Research
										</span>
										<span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
											Prototyping
										</span>
									</div>
								</div>

								<div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
									<h3 className="text-xl font-semibold mb-2 text-white">
										Marketing Specialist
									</h3>
									<p className="text-gray-300 mb-3">
										Help us reach and connect with our target audience.
									</p>
									<div className="flex flex-wrap gap-2">
										<span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
											Digital Marketing
										</span>
										<span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
											Content Creation
										</span>
										<span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
											Analytics
										</span>
									</div>
								</div>

								<div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
									<h3 className="text-xl font-semibold mb-2 text-white">
										Technical Internship
									</h3>
									<p className="text-gray-300 mb-3">
										We are looking for Technical Interns who are passionate
										about technology and want to learn and grow with us.
									</p>
									<div className="flex flex-wrap gap-2">
										<span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
											React
										</span>
										<span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
											Node.js
										</span>
										<span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
											TypeScript
										</span>
										<span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
											PostgreSQL
										</span>
									</div>
								</div>

								<div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
									<h3 className="text-xl font-semibold mb-2 text-white">
										Non-Technical Internship
									</h3>
									<p className="text-gray-300 mb-3">
										We are also looking for Non-Technical Interns who are
										passionate about technology and want to learn and grow with
										us.
									</p>
									<div className="flex flex-wrap gap-2">
										<span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
											Marketing
										</span>
										<span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
											Content Creation
										</span>
										<span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
											Video Editing
										</span>
										<span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
											Analytics
										</span>
										<span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
											Operations
										</span>
										<span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
											Customer Support
										</span>
										<span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
											Sales
										</span>
									</div>
								</div>
							</div>

							<h2 className="text-2xl font-semibold mb-6 text-white">
								How to Apply
							</h2>
							<div className="bg-gray-800 p-6 rounded-lg mb-8">
								<p className="text-gray-300 mb-4">
									Ready to join our mission? We'd love to hear from you!
								</p>
								<ol className="list-decimal list-inside text-gray-300 space-y-2">
									<li>
										Send your resume and cover letter to careers@nambike.in
									</li>
									<li>
										Include the position you're interested in and why you want
										to join Nambike
									</li>
									<li>
										We'll review your application and get back to you within 5
										business days
									</li>
									<li>
										If selected, we'll schedule an interview to learn more about
										you
									</li>
								</ol>
							</div>

							<div className="text-center">
								<a
									href="mailto:careers@nambike.in"
									className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 px-8 py-3 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 font-medium text-white mr-4"
								>
									Apply Now
								</a>
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
