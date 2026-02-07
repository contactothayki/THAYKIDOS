'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const SUCCESS_IMAGES = [
	'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
	'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80',
	'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
];

export default function SuccessCarousel() {
	const [current, setCurrent] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrent((prev) => (prev + 1) % SUCCESS_IMAGES.length);
		}, 4000);
		return () => clearInterval(timer);
	}, []);

	return (
		<div className="relative w-full h-64 md:h-96 overflow-hidden rounded-lg">
			{SUCCESS_IMAGES.map((src, index) => (
				<div
					key={index}
					className={`absolute inset-0 transition-opacity duration-700 ${
						index === current ? 'opacity-40' : 'opacity-0'
					}`}
				>
					<Image
						src={src}
						alt={`Caso de éxito ${index + 1}`}
						className="object-cover"
						fill
						sizes="(max-width: 768px) 100vw, 1200px"
					/>
				</div>
			))}
			<div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
				<h1 className="text-4xl md:text-6xl font-bold text-[#563256] text-center drop-shadow-lg">
					Capital de trabajo a partir de tu crédito
				</h1>
				<p className="mt-4 text-black font-bold text-sm md:text-lg max-w-2xl">
					Somos especialistas en capitalizar el crédito de tu tarjeta, brindándote liquidez inmediata con respaldo, discreción y total confianza para impulsar tu negocio.
				</p>
			</div>
			<div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
				{SUCCESS_IMAGES.map((_, index) => (
					<button
						key={index}
						onClick={() => setCurrent(index)}
						className={`w-2 h-2 rounded-full transition-colors ${
							index === current ? 'bg-[#eed102]' : 'bg-white/60'
						}`}
						aria-label={`Ir a slide ${index + 1}`}
					/>
				))}
			</div>
		</div>
	);
}
