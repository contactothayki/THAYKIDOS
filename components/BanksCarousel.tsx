'use client';

const BANKS = ['BCP', 'BBVA', 'Scotiabank', 'Interbank', 'Banbif', 'CRM Falabella'];

export default function BanksCarousel() {
	return (
		<section className="py-8 bg-[#d7dad6]/30">
			<h2 className="text-xl font-semibold text-center text-[#563256] mb-6">
				Bancos que manejamos
			</h2>
			<div className="overflow-hidden">
				<div className="flex gap-6 justify-center items-center flex-wrap px-4">
					{BANKS.map((bank) => (
						<div
							key={bank}
							className="flex-shrink-0 w-28 h-16 md:w-36 md:h-20 bg-white rounded-lg shadow-md flex items-center justify-center border border-[#bc90ba]/30"
						>
							<span className="text-sm font-semibold text-[#563256]">{bank}</span>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
