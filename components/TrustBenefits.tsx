type Benefit = {
	title: string;
	description: string;
};

const BENEFITS: Benefit[] = [
	{
		title: 'Rapidez',
		description: 'Resolvemos tu solicitud de capital en minutos, sin demoras innecesarias.',
	},
	{
		title: 'Seguridad Optimizada',
		description: 'Operamos con total transparencia bajo normativas vigentes.',
	},
	{
		title: 'Confianza',
		description: 'Todo el proceso es digital con la opción de atención presencial para tu total tranquilidad.',
	},
	{
		title: 'Servicio soporte 24/7',
		description: 'Nuestra área de soporte estará disponible para soluciones garantizadas.',
	},
];

interface TrustBenefitsProps {
	className?: string;
}

export default function TrustBenefits({ className }: TrustBenefitsProps) {
	return (
		<section
			className={`${className ?? ''} relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-x-clip overflow-hidden bg-cinematic-fintech`}
		>
			<div className="relative z-10 mx-auto max-w-6xl px-4 py-10 md:py-14">
				<h2 className="mx-auto max-w-4xl text-2xl md:text-3xl font-extrabold tracking-tight text-[#645c9f] text-center">
					Estas son las <span className="text-[#2563EB]">razones</span> por las que miles de personas ya{' '}
					<span className="text-[#2563EB]">confían</span> en nosotros para transformar su tarjeta de crédito en oportunidades reales.
				</h2>

				<ol className="mt-8 grid gap-4 md:grid-cols-2">
					{BENEFITS.map((b, idx) => (
						<li
							key={b.title}
							className="rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_16px_50px_-30px_rgba(15,23,42,0.25)] transition hover:-translate-y-0.5 hover:shadow-[0_22px_70px_-40px_rgba(37,99,235,0.45)]"
						>
							<div className="flex gap-3 items-start">
								<span className="mt-0.5 inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#eed102] text-[#0F172A] font-extrabold text-sm shadow-sm">
									{idx + 1}
								</span>
								<div>
									<h3 className="text-base md:text-lg font-bold text-[#0F172A]">{b.title}</h3>
									<p className="mt-1 text-sm md:text-base text-[#64748B] leading-snug">{b.description}</p>
								</div>
							</div>
						</li>
					))}
				</ol>
			</div>
		</section>
	);
}
