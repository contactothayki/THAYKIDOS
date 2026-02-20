'use client';

import Image from 'next/image';

type Props = {
	imageSrc: string;
	alt: string;
};

export default function FullWidthBanner({ imageSrc, alt }: Props) {
	return (
		<section className="w-full">
			<div className="relative w-full h-[260px] sm:h-[350px] md:h-[500px]">
				<Image
					src={imageSrc}
					alt={alt}
					fill
					className="object-cover"
					priority
				/>
			</div>
		</section>
	);
}
