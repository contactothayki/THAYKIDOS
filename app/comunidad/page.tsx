'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';

export default function ComunidadPage() {
	const [open, setOpen] = useState(false);
	const [dni, setDni] = useState('');
	const [whatsapp, setWhatsapp] = useState('');
	const [submitted, setSubmitted] = useState(false);

	const canSubmit = useMemo(() => {
		const dniOk = /^\d{8}$/.test(dni.trim());
		const waOk = /^\+?\d[\d\s]{7,14}$/.test(whatsapp.trim());
		return dniOk && waOk;
	}, [dni, whatsapp]);

	const onClose = () => {
		setOpen(false);
		setSubmitted(false);
		setDni('');
		setWhatsapp('');
	};

	return (
		<main className="min-h-screen">
			<section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-x-clip overflow-hidden bg-cinematic-fintech">
				<div className="relative z-10 mx-auto max-w-4xl px-4 py-14 md:py-18">
					<div className="flex items-center justify-between gap-4">
						<Link href="/" className="text-sm font-semibold text-[#563256] hover:text-[#645c9f] transition">
							Volver al inicio
						</Link>
						<button type="button" className="btn-gradient-fintech" onClick={() => setOpen(true)}>
							Unirse a la comunidad
						</button>
					</div>

					<header className="mt-10">
						<h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#0F172A]">
							Efectivización de tarjetas de crédito en el Perú
						</h1>
						<p className="mt-4 text-base md:text-lg text-[#64748B] font-medium">
							Liquidez inmediata en una realidad financiera que no siempre ayuda
						</p>
					</header>

					<article className="mt-10 space-y-6 text-[15px] md:text-[16px] leading-7 text-[#0F172A]">
						<p>
							En el Perú, miles de personas usan su tarjeta de crédito no por comodidad, sino por necesidad.
							Emergencias, gastos imprevistos, capital de trabajo o simplemente llegar a fin de mes.
						</p>
						<p className="font-semibold">
							La pregunta no es si ocurre.
							<br />
							La pregunta es: ¿entiendes realmente lo que estás haciendo con tu crédito?
						</p>

						<h2 className="pt-4 text-xl md:text-2xl font-extrabold tracking-tight text-[#563256]">
							¿Qué es la efectivización de tarjetas de crédito?
						</h2>
						<p>
							La efectivización es el proceso mediante el cual una persona convierte el saldo disponible de su tarjeta de crédito en dinero en efectivo o transferencia bancaria.
						</p>
						<p>No es un ingreso extra.</p>
						<p>Es crédito adelantado, que luego deberá pagarse.</p>
						<p>En un país con:</p>
						<ul className="pl-5 list-disc space-y-1 text-[#0F172A]">
							<li>acceso limitado al crédito formal</li>
							<li>altas tasas de interés</li>
							<li>alta informalidad laboral</li>
						</ul>
						<p>
							la tarjeta se ha convertido, para muchos, en la única fuente de liquidez inmediata.
						</p>

						<h2 className="pt-4 text-xl md:text-2xl font-extrabold tracking-tight text-[#563256]">
							¿Por qué cada vez más personas recurren a este mecanismo?
						</h2>
						<p>Porque el sistema financiero tradicional:</p>
						<ul className="pl-5 list-disc space-y-1">
							<li>es lento</li>
							<li>es rígido</li>
							<li>no siempre está diseñado para la realidad del peruano promedio</li>
						</ul>
						<p>La efectivización permite:</p>
						<ul className="pl-5 list-disc space-y-1">
							<li>cubrir gastos urgentes</li>
							<li>manejar baches de caja</li>
							<li>comprar mercadería</li>
							<li>enfrentar imprevistos</li>
						</ul>
						<p>Todo esto sin pasar por procesos largos ni préstamos difíciles de obtener.</p>

						<p className="font-semibold">
							👉 El problema no es la herramienta.
							<br />
							👉 El problema es usarla sin información ni estrategia.
						</p>

						<h2 className="pt-4 text-xl md:text-2xl font-extrabold tracking-tight text-[#563256]">
							Lo que casi nadie te explica (y deberías saber)
						</h2>
						<ul className="pl-0 space-y-2">
							<li>✔ El monto efectivizado reduce tu línea disponible</li>
							<li>✔ Genera una obligación de pago futura</li>
							<li>✔ Tiene costos (comisiones o intereses)</li>
							<li>✔ Usarla sin planificación puede llevar al sobreendeudamiento</li>
						</ul>
						<p>
							La efectivización no es buena ni mala por sí sola.
							<br />
							Es una herramienta.
							<br />
							Y como toda herramienta financiera, depende de cómo la uses.
						</p>

						<h2 className="pt-4 text-xl md:text-2xl font-extrabold tracking-tight text-[#563256]">
							El verdadero riesgo no es el crédito
							<br />
							Es no entenderlo
						</h2>
						<p>Muchas personas terminan atrapadas en deudas no porque quieran, sino porque:</p>
						<ul className="pl-5 list-disc space-y-1">
							<li>nadie les explicó cómo funciona realmente una tarjeta</li>
							<li>no conocen sus costos reales</li>
							<li>no tienen educación financiera práctica</li>
						</ul>
						<p>Ahí es donde empieza el problema.</p>

						<h2 className="pt-4 text-xl md:text-2xl font-extrabold tracking-tight text-[#563256]">
							🧠 Aquí entra Thayqui
							<br />
							Aprende a usar el crédito sin que el crédito te use a ti
						</h2>
						<p>
							Thayqui es una comunidad de educación financiera pensada para la realidad peruana.
							Sin discursos bancarios.
							Sin fórmulas mágicas.
							Sin juicios.
						</p>
						<p>Aquí aprendemos a:</p>
						<ul className="pl-5 list-disc space-y-1">
							<li>entender cómo funcionan las tarjetas de crédito</li>
							<li>tomar mejores decisiones financieras</li>
							<li>usar el crédito con criterio, no por desesperación</li>
							<li>reducir errores que cuestan caro a largo plazo</li>
						</ul>

						<h2 className="pt-4 text-xl md:text-2xl font-extrabold tracking-tight text-[#563256]">
							¿Qué encontrarás en la comunidad Thayqui?
						</h2>
						<ul className="pl-0 space-y-2">
							<li>✔ Educación financiera clara y aplicable</li>
							<li>✔ Tips reales para manejar tarjetas y deudas</li>
							<li>✔ Enfoque práctico para el día a día</li>
							<li>✔ Acompañamiento y aprendizaje continuo</li>
							<li>✔ Una comunidad de personas reales con problemas financieros reales</li>
						</ul>

						<div className="pt-6">
							<p className="font-semibold">
								👉 Únete hoy a la comunidad Thayqui
							</p>
							<p className="mt-2">
								La información correcta cambia decisiones.
								Las decisiones correctas cambian tu futuro financiero.
							</p>
							<p className="mt-4 font-semibold">
								👉 Únete a la comunidad Thayqui y empieza a tomar control de tu dinero.
							</p>
							<div className="mt-6">
								<button type="button" className="btn-gradient-fintech" onClick={() => setOpen(true)}>
									Unirse a la comunidad
								</button>
							</div>
						</div>
					</article>
				</div>
			</section>

			{open && (
				<div className="fixed inset-0 z-[60]">
					<div className="absolute inset-0 bg-black/40" onClick={onClose} />
					<div className="absolute inset-0 flex items-center justify-center p-4">
						<div className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-[0_30px_90px_-55px_rgba(15,23,42,0.65)]">
							<div className="flex items-start justify-between gap-4">
								<h3 className="text-lg font-extrabold text-[#0F172A]">
									{submitted ? '¡Gracias por unirte!' : 'Unirse a la comunidad'}
								</h3>
								<button
									type="button"
									onClick={onClose}
									className="rounded-lg px-2 py-1 text-[#64748B] hover:text-[#0F172A]"
									aria-label="Cerrar"
								>
									✕
								</button>
							</div>

							{submitted ? (
								<p className="mt-4 text-sm text-[#64748B] leading-6">
									Te enviaremos la invitación para unirte a la comunidad.
								</p>
							) : (
								<form
									onSubmit={(e) => {
										e.preventDefault();
										if (!canSubmit) return;
										setSubmitted(true);
										const text = `Hola quiero unirme a la comunidad de Thayqui mi DNI es ${dni}`;
										const url = `https://wa.me/924738467?text=${encodeURIComponent(text)}`;
										window.open(url, '_blank', 'noopener,noreferrer');
									}}
									className="mt-5 space-y-4"
								>
									<div>
										<label htmlFor="dni" className="block text-sm font-semibold text-[#0F172A] mb-1">
											DNI
										</label>
										<input
											id="dni"
											inputMode="numeric"
											value={dni}
											onChange={(e) => setDni(e.target.value.replace(/\D/g, '').slice(0, 8))}
											className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-[#0F172A] shadow-sm focus-ring-fintech"
											placeholder="8 dígitos"
											required
										/>
									</div>
									<div>
										<label htmlFor="whatsapp" className="block text-sm font-semibold text-[#0F172A] mb-1">
											WhatsApp
										</label>
										<input
											id="whatsapp"
											inputMode="tel"
											value={whatsapp}
											onChange={(e) => setWhatsapp(e.target.value)}
											className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-[#0F172A] shadow-sm focus-ring-fintech"
											placeholder="Ej: +51 999 999 999"
											required
										/>
									</div>
									<button type="submit" className="w-full btn-gradient-fintech" disabled={!canSubmit}>
										Unirme
									</button>
									<p className="text-xs text-[#64748B] leading-5">
										Al enviar tus datos, te enviaremos la invitación para unirte a la comunidad.
									</p>
								</form>
							)}
						</div>
					</div>
				</div>
			)}
		</main>
	);
}
