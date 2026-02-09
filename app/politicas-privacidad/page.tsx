import Link from 'next/link';

export default function PoliticasPrivacidad() {
	return (
		<div className="min-h-screen bg-white">
			<header className="bg-[#563256] text-white py-6">
				<div className="max-w-4xl mx-auto px-4">
					<Link href="/" className="text-[#eed102] hover:underline text-sm mb-4 inline-block">
						← Volver al inicio
					</Link>
					<h1 className="text-2xl font-bold">Políticas de Privacidad y Seguridad</h1>
					<p className="text-white/80 text-sm">THAYLUS CONSULTING</p>
				</div>
			</header>
			<main className="max-w-4xl mx-auto px-4 py-12 prose prose-gray">
				<section className="mb-8">
					<h2 className="text-xl font-semibold text-[#563256] mb-4">1. Recopilación de información</h2>
					<p className="text-gray-600">
						THAYLUS CONSULTING recopila únicamente la información necesaria para prestar el servicio
						solicitado: datos de contacto, información de documento de identidad y datos bancarios
						para la transferencia. No solicitamos datos de la tarjeta de crédito ni información
						sensible adicional.
					</p>
				</section>
				<section className="mb-8">
					<h2 className="text-xl font-semibold text-[#563256] mb-4">2. Uso de la información</h2>
					<p className="text-gray-600">
						La información recopilada se utiliza exclusivamente para procesar las solicitudes de
						efectivización, realizar las transferencias correspondientes y mantener la comunicación
						con el usuario durante el proceso.
					</p>
				</section>
				<section className="mb-8">
					<h2 className="text-xl font-semibold text-[#563256] mb-4">3. Protección de datos</h2>
					<p className="text-gray-600">
						Implementamos medidas de seguridad técnicas y organizativas para proteger la información
						personal contra acceso no autorizado, alteración, divulgación o destrucción.
					</p>
				</section>
				<section className="mb-8">
					<h2 className="text-xl font-semibold text-[#563256] mb-4">4. No divulgación</h2>
					<p className="text-gray-600">
						No vendemos, intercambiamos ni transferimos información personal identificable a terceros,
						excepto cuando sea necesario para completar la transacción solicitada o cuando la ley lo
						requiera.
					</p>
				</section>
				<section className="mb-8">
					<h2 className="text-xl font-semibold text-[#563256] mb-4">5. Cookies y tecnologías</h2>
					<p className="text-gray-600">
						Este sitio puede utilizar cookies para mejorar la experiencia del usuario. El usuario puede
						configurar su navegador para rechazar cookies si lo prefiere.
					</p>
				</section>
				<section className="mb-8">
					<h2 className="text-xl font-semibold text-[#563256] mb-4">6. Derechos del usuario</h2>
					<p className="text-gray-600">
						El usuario tiene derecho a acceder, rectificar o solicitar la eliminación de sus datos
						personales. Para ejercer estos derechos, puede contactarnos a soporte@thayqui.com.
					</p>
				</section>
				<section>
					<h2 className="text-xl font-semibold text-[#563256] mb-4">7. Contacto</h2>
					<p className="text-gray-600">
						Para consultas sobre privacidad: soporte@thayqui.com
					</p>
				</section>
			</main>
			<footer className="border-t py-6 mt-12">
				<div className="max-w-4xl mx-auto px-4 text-center text-sm text-gray-500">
					<Link href="/" className="text-[#645c9f] hover:underline">
						Volver al inicio
					</Link>
				</div>
			</footer>
		</div>
	);
}
