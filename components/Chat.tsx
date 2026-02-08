'use client';

import { useState, useRef, useEffect } from 'react';

const FAQ: Record<string, string> = {
	'¿Cuánto tiempo demora el proceso?':
		'Desde que nos contactas hasta que recibes el dinero, pueden pasar solo de 5 a 15 minutos (dependiendo del banco y el monto).',
	'¿Trabajan con todos los bancos?':
		'Trabajamos con los bancos BCP, INTERBANK, SCOTIABANK, BBVA, BANBIF, CRM Falabella.',
	'¿Es legal este proceso?':
		'Totalmente. Nuestro servicio cumple con las normativas vigentes y no pone en riesgo tu historial ni tus fondos.',
	'¿Debo enviar información personal?':
		'No, solamente es necesario la cuenta bancaria, no la tarjeta de crédito, ni información personal.',
	'¿Hay algún costo oculto o comisión adicional?':
		'No. La comisión es fija, de acuerdo a la calculadora, sin sorpresas ni cobros extra.',
	'¿Puedo cancelar si cambio de opinión?':
		'No, una vez iniciado el proceso ya no se puede cancelar la operación, porque ya se efectuaría la comisión por transacción.',
	'¿Puedo usar una tarjeta de crédito que no está a mi nombre?':
		'Por motivos de seguridad, solo trabajamos con tarjetas personales del titular que realiza la solicitud. Esto garantiza que el proceso sea seguro y transparente para ambas partes.',
	'¿Qué tipo de tarjetas aceptan?':
		'Aceptamos tarjetas de crédito Visa, Mastercard y algunas tarjetas de tiendas por departamento, siempre que estén activas y habilitadas para compras.',
	'¿Qué pasa si tengo dudas durante el proceso?':
		'Nuestro equipo te acompaña en cada paso. Puedes escribirnos en cualquier momento vía WhatsApp, y un asesor te responderá al instante para aclararte cualquier duda. Nuestro horario de atención es de Lunes a Domingo de 8 am a 8 pm.',
};

const QUESTIONS = Object.keys(FAQ);

export default function Chat() {
	const [isOpen, setIsOpen] = useState(false);
	const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([]);
	const [input, setInput] = useState('');
	const [showWelcome, setShowWelcome] = useState(true);
	const messagesEndRef = useRef<HTMLDivElement>(null);

	const handleBackToMenu = () => {
		setShowWelcome(true);
	};

	useEffect(() => {
		messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
	}, [messages]);

	useEffect(() => {
		if (isOpen && messages.length === 0) {
			setShowWelcome(true);
		}
	}, [isOpen, messages.length]);

	const handleSend = () => {
		const text = input.trim();
		if (!text) return;
		setInput('');
		setShowWelcome(false);
		setMessages((prev) => [...prev, { role: 'user', text }]);
		const answer = FAQ[text] || 'Por favor, escoge una de las preguntas sugeridas o contáctanos por WhatsApp para más información.';
		setTimeout(() => {
			setMessages((prev) => [...prev, { role: 'bot', text: answer }]);
		}, 500);
	};

	const handleQuestionClick = (q: string) => {
		setShowWelcome(false);
		setMessages((prev) => [...prev, { role: 'user', text: q }]);
		const answer = FAQ[q];
		setTimeout(() => {
			setMessages((prev) => [...prev, { role: 'bot', text: answer }]);
		}, 500);
	};

	return (
		<>
			<button
				onClick={() => setIsOpen(!isOpen)}
				className="fixed bottom-24 right-6 z-40 w-14 h-14 rounded-full bg-[#645c9f] text-white shadow-lg flex items-center justify-center hover:bg-[#563256] transition-colors"
				aria-label="Abrir chat"
			>
				<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
				</svg>
			</button>

			{isOpen && (
				<div className="fixed bottom-44 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] h-[500px] max-h-[70vh] bg-white rounded-xl shadow-2xl border border-[#bc90ba]/30 flex flex-col">
					<div className="p-4 bg-[#563256] text-white rounded-t-xl">
						<h3 className="font-semibold">Chat Thayki</h3>
						<p className="text-sm opacity-90">¿En qué podemos ayudarte?</p>
					</div>
					<div className="flex-1 overflow-y-auto p-4 space-y-4">
						{showWelcome && (
							<div className="space-y-3">
								<div className="bg-[#d7dad6]/50 rounded-lg p-3">
									<p className="text-sm">¡Hola! Bienvenido a Thayki. ¿En qué podemos ayudarte?</p>
									<p className="text-sm mt-2 font-medium text-[#563256]">Escoge una pregunta:</p>
								</div>
								<div className="flex flex-col gap-2">
									{QUESTIONS.slice(0, 5).map((q) => (
										<button
											key={q}
											onClick={() => handleQuestionClick(q)}
											className="text-left text-sm px-3 py-2 rounded-lg bg-[#645c9f]/10 hover:bg-[#645c9f]/20 text-[#563256] transition"
										>
											{q}
										</button>
									))}
									<details className="group">
										<summary className="text-sm px-3 py-2 cursor-pointer text-[#645c9f] hover:underline">
											Ver más preguntas
										</summary>
										<div className="mt-2 flex flex-col gap-2">
											{QUESTIONS.slice(5).map((q) => (
												<button
													key={q}
													onClick={() => handleQuestionClick(q)}
													className="text-left text-sm px-3 py-2 rounded-lg bg-[#645c9f]/10 hover:bg-[#645c9f]/20 text-[#563256] transition"
												>
													{q}
												</button>
											))}
										</div>
									</details>
								</div>
							</div>
						)}
						{messages.length > 0 && !showWelcome && (
							<div className="flex justify-center">
								<button
									onClick={handleBackToMenu}
									className="text-sm px-3 py-2 rounded-lg bg-[#645c9f]/10 hover:bg-[#645c9f]/20 text-[#563256] transition"
								>
									Volver al menú
								</button>
							</div>
						)}
						{messages.map((msg, i) => (
							<div
								key={i}
								className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
							>
								<div
									className={`max-w-[85%] rounded-lg px-4 py-2 text-sm ${
										msg.role === 'user'
											? 'bg-[#645c9f] text-white'
											: 'bg-[#d7dad6]/50 text-gray-800'
									}`}
								>
									{msg.text}
								</div>
							</div>
						))}
						<div ref={messagesEndRef} />
					</div>
					<div className="p-4 border-t flex gap-2">
						<input
							type="text"
							value={input}
							onChange={(e) => setInput(e.target.value)}
							onKeyDown={(e) => e.key === 'Enter' && handleSend()}
							placeholder="Escribe tu mensaje..."
							className="flex-1 px-3 py-2 rounded-lg border border-[#bc90ba] focus:ring-2 focus:ring-[#645c9f] outline-none text-sm"
						/>
						<button
							onClick={handleSend}
							className="px-4 py-2 rounded-lg bg-[#645c9f] text-white hover:bg-[#563256] transition text-sm font-medium"
						>
							Enviar
						</button>
					</div>
				</div>
			)}
		</>
	);
}
