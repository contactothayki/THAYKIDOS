'use client';

import Image from 'next/image';
import { useMemo, useState } from 'react';

type Bank = {
	name: string;
	logoSrc?: string;
};

const BANKS: Bank[] = [
	{ name: 'BCP', logoSrc: '/banks/bcp.png' },
	{ name: 'BBVA', logoSrc: '/banks/bbva.png' },
	{ name: 'Scotiabank', logoSrc: '/banks/scotiabank.png' },
	{ name: 'Interbank', logoSrc: '/banks/interbank.png' },
	{ name: 'Banbif', logoSrc: '/banks/banbif.png' },
	{ name: 'CMR Falabella', logoSrc: '/banks/cmr-falabella.png' },
];

export default function BanksCarousel() {
	const [failedLogos, setFailedLogos] = useState<Record<string, true>>({});
	const items = useMemo(() => BANKS, []);

	return (
		<section className="py-8 bg-[#d7dad6]/30">
			<h2 className="text-xl font-semibold text-center text-[#563256] mb-6">
				Bancos que manejamos
			</h2>
			<div className="relative overflow-hidden">
				<div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#d7dad6]/80 to-transparent" />
				<div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#d7dad6]/80 to-transparent" />

				<div className="banks-marquee group">
					<div className="banks-track">
						{[0, 1].map((dup) => (
							<div key={dup} className="flex gap-6 items-center px-4">
								{items.map((bank) => {
									const canShowLogo = !!bank.logoSrc && !failedLogos[bank.logoSrc];
									return (
										<div
											key={`${dup}-${bank.name}`}
											className="flex-shrink-0 w-36 h-20 md:w-44 md:h-24 bg-white rounded-xl shadow-md flex items-center justify-center border border-[#bc90ba]/30"
										>
											{canShowLogo ? (
												<Image
													src={bank.logoSrc as string}
													alt={bank.name}
													width={160}
													height={56}
													className="max-h-10 w-auto object-contain rounded-lg"
													onError={() => {
													setFailedLogos((prev) => ({
														...prev,
														[bank.logoSrc as string]: true,
													}));
												}}
												/>
											) : (
												<span className="text-sm font-semibold text-[#563256]">{bank.name}</span>
											)}
											<span className="sr-only">{bank.name}</span>
										</div>
									);
								})}
							</div>
						))}
					</div>
				</div>
			</div>

			<style jsx>{`
				.banks-marquee {
					position: relative;
					width: 100%;
				}
				.banks-track {
					display: flex;
					width: max-content;
					animation: banks-marquee 24s linear infinite;
				}
				.banks-marquee:hover .banks-track {
					animation-play-state: paused;
				}
				@keyframes banks-marquee {
					0% {
						transform: translateX(0);
					}
					100% {
						transform: translateX(-50%);
					}
				}
				@media (prefers-reduced-motion: reduce) {
					.banks-track {
						animation: none;
					}
				}
			`}</style>
		</section>
	);
}
