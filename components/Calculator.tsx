'use client';

import { useState } from 'react';
import FormModal from './FormModal';

const BANKS = ['BCP', 'BBVA', 'Scotiabank', 'Interbank', 'Banbif', 'CRM Falabella'];
const CARD_CATEGORIES = ['Clásica', 'Oro', 'Platinum', 'Signature', 'Infinite'];

const IGV_RATE = 0.18;
const COMMISSION_RATE = 0.05;

export default function Calculator() {
	const [monto, setMonto] = useState('');
	const [banco, setBanco] = useState('');
	const [categoria, setCategoria] = useState('');
	const [showModal, setShowModal] = useState(false);
	const [montoCalculado, setMontoCalculado] = useState(0);

	const calcularEfectivo = () => {
		const valor = parseFloat(monto.replace(/[^0-9.]/g, '')) || 0;
	  
		const comision = valor * COMMISSION_RATE;
		const igvComision = comision * IGV_RATE;
		const totalDescuento = comision + igvComision;
	  
		const efectivo = valor - totalDescuento;
	  
		return Math.round(efectivo * 100) / 100;
	  };
	  

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		const efectivo = calcularEfectivo();
		setMontoCalculado(efectivo);
		setShowModal(true);
	};

	const isValid = monto && banco && categoria;

	return (
		<section id="calculadora" className="py-12 bg-white">
			<div className="max-w-xl mx-auto px-4">
				<h2 className="text-2xl font-bold text-center text-[#563256] mb-8">
					Calculadora de efectivización
				</h2>
				<p className="text-center text-gray-600 mb-6 text-sm">
					Monto calculado: menos 5% + IGV
				</p>
				<form onSubmit={handleSubmit} className="space-y-4 bg-[#d7dad6]/30 p-6 rounded-xl">
					<div>
						<label htmlFor="monto" className="block text-sm font-medium text-[#563256] mb-1">
							Monto (S/)
						</label>
						<input
							id="monto"
							type="text"
							value={monto}
							onChange={(e) => setMonto(e.target.value.replace(/[^0-9.]/g, ''))}
							placeholder="Ej: 5000"
							className="w-full px-4 py-3 rounded-lg border border-[#bc90ba] focus:ring-2 focus:ring-[#645c9f] focus:border-transparent outline-none"
						/>
					</div>
					<div>
						<label htmlFor="banco" className="block text-sm font-medium text-[#563256] mb-1">
							Banco de la tarjeta
						</label>
						<select
							id="banco"
							value={banco}
							onChange={(e) => setBanco(e.target.value)}
							className="w-full px-4 py-3 rounded-lg border border-[#bc90ba] focus:ring-2 focus:ring-[#645c9f] focus:border-transparent outline-none bg-white"
						>
							<option value="">Seleccione el banco</option>
							{BANKS.map((b) => (
								<option key={b} value={b}>{b}</option>
							))}
						</select>
					</div>
					<div>
						<label htmlFor="categoria" className="block text-sm font-medium text-[#563256] mb-1">
							Categoría de la tarjeta
						</label>
						<select
							id="categoria"
							value={categoria}
							onChange={(e) => setCategoria(e.target.value)}
							className="w-full px-4 py-3 rounded-lg border border-[#bc90ba] focus:ring-2 focus:ring-[#645c9f] focus:border-transparent outline-none bg-white"
						>
							<option value="">Seleccione la categoría</option>
							{CARD_CATEGORIES.map((c) => (
								<option key={c} value={c}>{c}</option>
							))}
						</select>
					</div>
					<button
						type="submit"
						disabled={!isValid}
						className="w-full py-4 rounded-lg font-semibold text-white bg-[#645c9f] hover:bg-[#563256] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
					>
						OBTENER AHORA
					</button>
				</form>
				{parseFloat(monto) > 0 && (
					<p className="mt-4 text-center text-sm text-gray-600">
						Monto a recibir: S/ {calcularEfectivo().toFixed(2)}
					</p>
				)}
			</div>
			<FormModal
				isOpen={showModal}
				onClose={() => setShowModal(false)}
				montoCalculado={montoCalculado}
				banco={banco}
				categoria={categoria}
			/>
		</section>
	);
}
