export default function VideoSection() {
	return (
		<section className="flex justify-center py-2 px-4 sm:px-8 bg-[#0d1117]">
			<div className="w-full">
				<div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl border border-blue-500/20">
					<iframe
						width="100%"
						height="100%"
						src="https://www.youtube.com/embed/q8fiCT8mfrY?si=_g7tO3962cMwyNXK"
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
