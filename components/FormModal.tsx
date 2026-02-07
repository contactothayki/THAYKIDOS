'use client';

import { useState } from 'react';

const DOC_TYPES = ['DNI', 'Pasaporte', 'Carnet de extranjería'];

interface FormModalProps {
	isOpen: boolean;
	onClose: () => void;
	montoCalculado: number;
	banco: string;
	categoria: string;
}

export default function FormModal({ isOpen, onClose, montoCalculado, banco, categoria }: FormModalProps) {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const [form, setForm] = useState({
		nombres: '',
		apellidos: '',
		tipoDoc: '',
		numeroDoc: '',
		celular: '',
		email: '',
		provincia: '',
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
		setError(null);
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setLoading(true);
		setError(null);
		try {
			const res = await fetch('/api/solicitudes', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					...form,
					montoCalculado,
					banco,
					categoria,
				}),
			});
			const data = await res.json();
			if (!res.ok) throw new Error(data.error || 'Error al guardar');
			const msg = encodeURIComponent(
				`Hola, solicito efectivización.\nMonto: S/${montoCalculado}\nBanco: ${banco}\nCategoría: ${categoria}\n\nDatos:\n- ${form.nombres} ${form.apellidos}\n- ${form.tipoDoc}: ${form.numeroDoc}\n- Cel: ${form.celular}\n- Email: ${form.email}\n- Provincia: ${form.provincia}`
			);
			window.open(`https://wa.me/51912970490?text=${msg}`, '_blank');
			setForm({ nombres: '', apellidos: '', tipoDoc: '', numeroDoc: '', celular: '', email: '', provincia: '' });
			onClose();
		} catch (err) {
			setError(err instanceof Error ? err.message : 'Error al enviar. Intenta de nuevo.');
		} finally {
			setLoading(false);
		}
	};

	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50">
			<div className="bg-white rounded-xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl">
				<div className="p-6">
					<div className="flex justify-between items-start mb-6">
						<h3 className="text-xl font-bold text-[#563256]">
							¡Bienvenido a Thayki!
						</h3>
						<button
							onClick={onClose}
							className="text-gray-500 hover:text-gray-700 text-2xl"
							aria-label="Cerrar"
						>
							&times;
						</button>
					</div>
					<p className="text-gray-600 mb-4">
						Completa el siguiente formulario y accede al monto que necesitas
					</p>
					{error && (
						<div className="mb-4 p-3 rounded-lg bg-red-100 text-red-700 text-sm">
							{error}
						</div>
					)}
					<form onSubmit={handleSubmit} className="space-y-4">
						<div className="p-4 rounded-lg bg-[#eed102]/50 border-2 border-[#eed102]">
							<div className="grid gap-4 sm:grid-cols-2">
								<div>
									<label htmlFor="nombres" className="block text-sm font-medium text-[#563256] mb-1">
										Nombres
									</label>
									<input
										id="nombres"
										name="nombres"
										type="text"
										required
										value={form.nombres}
										onChange={handleChange}
										className="w-full px-3 py-2 rounded border border-[#bc90ba] focus:ring-2 focus:ring-[#645c9f] outline-none"
									/>
								</div>
								<div>
									<label htmlFor="apellidos" className="block text-sm font-medium text-[#563256] mb-1">
										Apellidos
									</label>
									<input
										id="apellidos"
										name="apellidos"
										type="text"
										required
										value={form.apellidos}
										onChange={handleChange}
										className="w-full px-3 py-2 rounded border border-[#bc90ba] focus:ring-2 focus:ring-[#645c9f] outline-none"
									/>
								</div>
							</div>
							<div className="mt-4 grid gap-4 sm:grid-cols-2">
								<div>
									<label htmlFor="tipoDoc" className="block text-sm font-medium text-[#563256] mb-1">
										Tipo de documento
									</label>
									<select
										id="tipoDoc"
										name="tipoDoc"
										required
										value={form.tipoDoc}
										onChange={handleChange}
										className="w-full px-3 py-2 rounded border border-[#bc90ba] focus:ring-2 focus:ring-[#645c9f] outline-none bg-white"
									>
										<option value="">Seleccione</option>
										{DOC_TYPES.map((t) => (
											<option key={t} value={t}>{t}</option>
										))}
									</select>
								</div>
								<div>
									<label htmlFor="numeroDoc" className="block text-sm font-medium text-[#563256] mb-1">
										Número de documento
									</label>
									<input
										id="numeroDoc"
										name="numeroDoc"
										type="text"
										required
										value={form.numeroDoc}
										onChange={handleChange}
										className="w-full px-3 py-2 rounded border border-[#bc90ba] focus:ring-2 focus:ring-[#645c9f] outline-none"
									/>
								</div>
							</div>
							<div className="mt-4">
								<label htmlFor="celular" className="block text-sm font-medium text-[#563256] mb-1">
									Número celular
								</label>
								<input
									id="celular"
									name="celular"
									type="tel"
									required
									value={form.celular}
									onChange={handleChange}
									placeholder="Ej: 912 970 490"
									className="w-full px-3 py-2 rounded border border-[#bc90ba] focus:ring-2 focus:ring-[#645c9f] outline-none"
								/>
							</div>
							<div className="mt-4">
								<label htmlFor="email" className="block text-sm font-medium text-[#563256] mb-1">
									Correo electrónico
								</label>
								<input
									id="email"
									name="email"
									type="email"
									required
									value={form.email}
									onChange={handleChange}
									className="w-full px-3 py-2 rounded border border-[#bc90ba] focus:ring-2 focus:ring-[#645c9f] outline-none"
								/>
							</div>
							<div className="mt-4">
								<label htmlFor="provincia" className="block text-sm font-medium text-[#563256] mb-1">
									Provincia
								</label>
								<input
									id="provincia"
									name="provincia"
									type="text"
									required
									value={form.provincia}
									onChange={handleChange}
									className="w-full px-3 py-2 rounded border border-[#bc90ba] focus:ring-2 focus:ring-[#645c9f] outline-none"
								/>
							</div>
						</div>
						<button
							type="submit"
							disabled={loading}
							className="w-full py-3 rounded-lg font-semibold text-white bg-[#645c9f] hover:bg-[#563256] disabled:opacity-70 disabled:cursor-not-allowed transition-colors"
						>
							{loading ? 'Enviando...' : 'Enviar solicitud'}
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}
