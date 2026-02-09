'use client';

import Link from 'next/link';

export default function Footer() {
	return (
		<footer id="contacto" className="bg-[#563256] text-white py-12">
			<div className="max-w-6xl mx-auto px-4">
				<div className="grid md:grid-cols-3 gap-8 mb-8">
					<div>
						<h3 className="text-lg font-bold mb-4">THAYLUS CONSULTING</h3>
						<p className="text-white/90 text-sm">
							Trabajamos con contratos mercantiles transparentes y protección legal al cliente.
						</p>
					</div>
					<div>
						<h3 className="text-lg font-bold mb-4">Contacto</h3>
						<ul className="space-y-2 text-sm text-white/90">
							<li>
								<a href="mailto:contacto@thayqui.com" className="hover:text-[#eed102] transition">
									contacto@thayqui.com
								</a>
							</li>
							<li>
								<a href="mailto:soporte@thayqui.com" className="hover:text-[#eed102] transition">
									soporte@thayqui.com
								</a>
							</li>
						</ul>
					</div>
					<div>
						<h3 className="text-lg font-bold mb-4">Legal</h3>
						<ul className="space-y-2 text-sm text-white/90">
							<li>
								<Link href="/terminos-condiciones" className="hover:text-[#eed102] transition">
									Términos y condiciones
								</Link>
							</li>
							<li>
								<Link href="/politicas-privacidad" className="hover:text-[#eed102] transition">
									Políticas de privacidad y seguridad
								</Link>
							</li>
						</ul>
					</div>
				</div>
				<div className="border-t border-white/20 pt-8 text-center text-sm text-white/80">
					<p>© {new Date().getFullYear()} THAYLUS CONSULTING. Todos los derechos reservados.</p>
				</div>
			</div>
		</footer>
	);
}
