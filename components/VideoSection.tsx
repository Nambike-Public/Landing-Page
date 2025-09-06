export default function VideoSection() {
	return (
		<section className="flex justify-center py-2 px-8 bg-[#0d1117]">
			<div className="w-[90vw] h-[70vh]">
				<div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl border border-blue-500/20">
					<iframe
						width="100%"
						height="100%"
						src="https://www.youtube.com/embed/Q-Y7PRpQ9-w?si=yZkFAIej2nz_DqMV"
						title="YouTube video player"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerPolicy="strict-origin-when-cross-origin"
						allowFullScreen
					></iframe>
				</div>
			</div>
		</section>
	);
}
