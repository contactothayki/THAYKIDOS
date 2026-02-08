'use client';

import { useState } from 'react';
import FormModal from './FormModal';

const BANKS = ['BCP', 'BBVA', 'Scotiabank', 'Interbank', 'Banbif', 'CRM Falabella'];
const CARD_CATEGORIES = [
  'Bfree',
  'Black',
  'Blue',
  'Cero',
  'Clásica',
  'Gold',
  'Green',
  'Infinite',
  'Light',
  'Oro',
  'Platinum',
  'Platinum Card',
  'Signature',
];

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
		<section
			id="calculadora"
			className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-x-clip overflow-hidden bg-watermark-money"
		>
			<div className="relative z-10 max-w-xl mx-auto px-4 py-12">
				<h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-center text-gradient-fintech-neon mb-6">
					Calculadora de efectivización
				</h2>
				<p className="text-center text-white/85 mb-8 text-sm font-medium">
					Monto calculado: menos 5% + IGV
				</p>
				<form onSubmit={handleSubmit} className="space-y-4 card-fintech p-6 md:p-7">
					<div>
						<label htmlFor="monto" className="block text-sm font-semibold text-[#0F172A] mb-1">
							Monto (S/)
						</label>
						<input
							id="monto"
							type="text"
							value={monto}
							onChange={(e) => setMonto(e.target.value.replace(/[^0-9.]/g, ''))}
							placeholder="Ej: 5000"
							className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-[#0F172A] placeholder:text-slate-400 shadow-sm focus-ring-fintech"
						/>
					</div>
					<div>
						<label htmlFor="banco" className="block text-sm font-semibold text-[#0F172A] mb-1">
							Banco de la tarjeta
						</label>
						<select
							id="banco"
							value={banco}
							onChange={(e) => setBanco(e.target.value)}
							className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-[#0F172A] shadow-sm focus-ring-fintech"
						>
							<option value="">Seleccione el banco</option>
							{BANKS.map((b) => (
								<option key={b} value={b}>{b}</option>
							))}
						</select>
					</div>
					<div>
						<label htmlFor="categoria" className="block text-sm font-semibold text-[#0F172A] mb-1">
							Categoría de la tarjeta
						</label>
						<select
							id="categoria"
							value={categoria}
							onChange={(e) => setCategoria(e.target.value)}
							className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-[#0F172A] shadow-sm focus-ring-fintech"
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
						className="w-full btn-gradient-fintech"
					>
						OBTENER AHORA
					</button>
				</form>
				{parseFloat(monto) > 0 && (
					<p className="mt-6 text-center text-base md:text-lg font-extrabold tracking-wide text-[#16A34A]">
						MONTO A RECIBIR: S/ {calcularEfectivo().toFixed(2)}
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
