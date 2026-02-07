import Link from 'next/link';

export default function TerminosCondiciones() {
	return (
		<div className="min-h-screen bg-white">
			<header className="bg-[#563256] text-white py-6">
				<div className="max-w-4xl mx-auto px-4">
					<Link href="/" className="text-[#eed102] hover:underline text-sm mb-4 inline-block">
						← Volver al inicio
					</Link>
					<h1 className="text-2xl font-bold">Términos y Condiciones</h1>
					<p className="text-white/80 text-sm">THAYLUS CONSULTING</p>
				</div>
			</header>
			<main className="max-w-4xl mx-auto px-4 py-12 prose prose-gray">
				<section className="mb-8">
					<h2 className="text-xl font-semibold text-[#563256] mb-4">1. Aceptación de términos</h2>
					<p className="text-gray-600">
						Al utilizar los servicios de THAYLUS CONSULTING (en adelante &quot;Thayki&quot;), el usuario acepta
						plenamente los presentes términos y condiciones. Si no está de acuerdo con alguno de ellos,
						deberá abstenerse de utilizar nuestros servicios.
					</p>
				</section>
				<section className="mb-8">
					<h2 className="text-xl font-semibold text-[#563256] mb-4">2. Descripción del servicio</h2>
					<p className="text-gray-600">
						Thayki ofrece servicios de efectivización de tarjetas de crédito, permitiendo a los usuarios
						obtener capital de trabajo mediante el uso de su línea de crédito disponible. El proceso se
						realiza de manera virtual a través del aplicativo del banco emisor.
					</p>
				</section>
				<section className="mb-8">
					<h2 className="text-xl font-semibold text-[#563256] mb-4">3. Comisiones y costos</h2>
					<p className="text-gray-600">
						Las comisiones aplicables son las indicadas en la calculadora de efectivización al momento de
						realizar la solicitud. No existen costos ocultos ni comisiones adicionales no informadas
						previamente.
					</p>
				</section>
				<section className="mb-8">
					<h2 className="text-xl font-semibold text-[#563256] mb-4">4. Irreversibilidad</h2>
					<p className="text-gray-600">
						Una vez iniciado el proceso de efectivización, la operación no podrá ser cancelada debido a
						que la comisión por transacción se efectúa de manera inmediata.
					</p>
				</section>
				<section className="mb-8">
					<h2 className="text-xl font-semibold text-[#563256] mb-4">5. Requisitos</h2>
					<p className="text-gray-600">
						El usuario debe ser titular de la tarjeta de crédito utilizada. Solo se aceptan tarjetas
						personales en nombre del solicitante. Se requiere contar con una cuenta de débito (propia o
						de terceros) para la transferencia de fondos.
					</p>
				</section>
				<section className="mb-8">
					<h2 className="text-xl font-semibold text-[#563256] mb-4">6. Modificaciones</h2>
					<p className="text-gray-600">
						Thayki se reserva el derecho de modificar estos términos en cualquier momento. Los cambios
						serán efectivos desde su publicación en este sitio web.
					</p>
				</section>
				<section>
					<h2 className="text-xl font-semibold text-[#563256] mb-4">7. Contacto</h2>
					<p className="text-gray-600">
						Para consultas: contacto@thayki.com | Soporte: soporte@thayki.com
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
