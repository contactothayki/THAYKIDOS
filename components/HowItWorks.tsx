'use client';

const STEPS = [
	{
		title: 'Procedimiento virtual',
		description:
			'Todo el procedimiento es de manera virtual desde el aplicativo del banco. En caso lo desee realizar de manera presencial es previa coordinación.',
		icon: '📱',
	},
	{
		title: 'Pago de servicios',
		description:
			'Este procedimiento consiste en realizar el pago a la empresa con la opción de pago de servicios.',
		icon: '💳',
	},
	{
		title: 'Transferencia bancaria',
		description:
			'La entrega del dinero es vía transferencia bancaria a una cuenta débito, puede ser propia (titular) o de una tercera persona.',
		icon: '🏦',
	},
];

export default function HowItWorks() {
	return (
		<section id="como-funciona" className="py-16 bg-[#645c9f]/5">
			<div className="max-w-4xl mx-auto px-4">
				<h2 className="text-2xl md:text-3xl font-bold text-center text-[#563256] mb-12">
					¿Cómo funciona?
				</h2>
				<div className="space-y-8">
					{STEPS.map((step, index) => (
						<div
							key={index}
							className="flex gap-6 items-start bg-white p-6 rounded-xl shadow-md border border-[#bc90ba]/20"
						>
							<div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#eed102] flex items-center justify-center text-2xl">
								{step.icon}
							</div>
							<div>
								<h3 className="text-lg font-semibold text-[#563256] mb-2">
									{index + 1}. {step.title}
								</h3>
								<p className="text-gray-600">{step.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
