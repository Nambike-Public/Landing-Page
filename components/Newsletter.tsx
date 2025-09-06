"use client";

import { useState } from "react";

export default function Newsletter() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		const res = await fetch("/api/submit", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ name, email, message }),
		});
		const data = await res.json();
		alert(data.success ? "Submitted!" : "Error: " + data.error);
	};

	return (
		<section className="text-center py-8 px-8 bg-[#0d1117] text-white">
			<div className="max-w-4xl mx-auto">
				<h2 className="text-3xl md:text-4xl font-bold mb-4">
					Stay Ahead of the Curve
				</h2>
				<p className="mb-8 text-lg text-gray-300 max-w-2xl mx-auto">
					Join our mailing list to receive the latest news, insights, and
					exclusive updates from Nambike.
				</p>
        <form className="flex flex-col space-y-4 max-w-2xl mx-auto" onSubmit={handleSubmit}>
					<input
						type="text"
						maxLength={100}
						placeholder="Your name"
						value={name}
						onChange={(e) => setName(e.target.value)}
						className="flex-1 px-6 py-3 rounded-lg border border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-200"
						required
					/>
					<input
						type="email"
						placeholder="Enter your email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						className="flex-1 px-6 py-3 rounded-lg border border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-200"
						required
					/>
					<div className="relative">
						<textarea
							maxLength={200}
							placeholder="Share your query or pain points you've experienced..."
							rows={4}
							value={message}
							onChange={(e) => {
								setMessage(e.target.value);
								const counter = document.getElementById("textarea-char-count");
								if (counter)
									counter.textContent = `${e.target.value.length}/200`;
							}}
							className="w-full px-6 py-3 rounded-lg border border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-200 resize-none"
						/>
						<div
							id="textarea-char-count"
							className="absolute right-4 bottom-4 text-xs text-gray-400"
						>
							0/200
						</div>
					</div>
					<button
						type="submit"
						className="w-full bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-3 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 font-medium text-white"
						style={{
							background: "linear-gradient(to right, #3b82f6, #2563eb)",
							padding: "12px 24px",
							borderRadius: "8px",
							color: "white",
							fontWeight: "500",
							border: "none",
							cursor: "pointer",
						}}
					>
						Submit Query
					</button>
				</form>
			</div>
		</section>
	);
}
